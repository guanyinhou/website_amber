<template>
  <div class="works">
    <div class="container">
      <h1>作品集</h1>
      <hr />
      <ul class="row prod-list">
        <li v-for="prod in prods" :key="prod.id" class="col-sm-3">
          <router-link :to="`/product/${prod.id}`">
            <div class="prod-image">
              <img :src="prod.imageUrl[0]" :alt="prod.title" />
            </div>
            <div class="prod-title">{{ prod.title }}</div>
            <div
              class="prod-origin-price"
              v-if="prod.origin_price === prod.price"
            >
              售價&nbsp;&nbsp;&nbsp;&nbsp;{{ prod.origin_price | currency }}
            </div>
            <span v-else>
              <div class="prod-origin-price old-price">
                售價&nbsp;&nbsp;&nbsp;&nbsp;
                {{ prod.origin_price | currency }}
              </div>
              <div class="prod-price">
                <b>特價&nbsp;&nbsp;&nbsp;&nbsp;{{ prod.price | currency }}</b>
              </div>
            </span>
          </router-link>
          <a href="#" class="add-to-cart" @click.prevent="addToCart(prod.id)">
            <i class="fa fa-cart-plus"></i>
          </a>
        </li>
      </ul>

      <hr />
      <div class="float-right">
        <pagination :pages="pagination" @update="getProds" />
      </div>
    </div>
  </div>
</template>

<script>
// /* global $ */
// import { VueEditor } from "vue2-editor/dist/vue2-editor.core";
import pagination from "@/components/Pagination";
export default {
  components: {
    pagination
    // VueEditor
  },
  data() {
    return {
      prods: [],
      isLoading: false,
      pagination: {}
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${this.apiPath}/api/${this.uuid}/ec/shopping`;
      const cart = {
        product: id,
        quantity: qty
      };
      console.log(cart);

      this.$http
        .post(url, cart)
        .then(res => {
          this.isLoading = false;
          console.log(res);
          // eslint-disable-next-line no-undef
          swal({
            title: res.data.data.product.title + "已加入購物車",
            icon: "success",
            buttons: false,
            timer: 3000
          });
          this.$bus.$emit("get-cart-num");
          // $("#modal").modal("hide");
          // this.getCart();
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
          console.log(err.response);
          console.log(err.response.data.errors[0]);
          // alert(err.response.data.errors[0]);
          // eslint-disable-next-line no-undef
          swal({
            title: err.response.data.errors[0],
            icon: "info",
            buttons: false,
            timer: 3000
          });
          // $("#modal").modal("hide");
        });
    },
    getCart() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;

      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          console.log(res);
          this.carts = res.data.data;
          // this.cartNum = res.data.data.length;
          this.cartTotal = 0;
          this.updateCartTotal();
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateCartTotal() {
      this.carts.forEach(item => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
    getProds(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          this.pagination = res.data.meta.pagination;
        })
        .catch(err => {
          console.dir(err);
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    }
  },
  created() {
    this.getProds();
    this.getCart();
  }
};
</script>
