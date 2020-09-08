<template>
  <div class="works">
    <div class="container">
      <h1>作品集</h1>
      <hr />
      <br />
      <div class="row">
        <div class="col-sm-3">
          <div class="prod-cate">
            <h4>作品分類</h4>
            <ul>
              <li>
                <a href="#" :class="{ active: isAll }" @click.prevent="getAll">
                  全部
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="{ active: isLand }"
                  @click.prevent="getLand()"
                >
                  風景畫
                </a>
              </li>
              <li>
                <a
                  href="#"
                  :class="{ active: isSea }"
                  @click.prevent="getSea()"
                >
                  海景畫
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-9">
          <ul class="row prod-list">
            <li
              v-for="prod in prods"
              :key="prod.id"
              class="col-lg-3 col-md-4 col-sm-6 col-6 full-479"
            >
              <router-link :to="`/product/${prod.id}`">
                <div class="prod-image">
                  <img :src="prod.imageUrl[0]" :alt="prod.title" />
                </div>
                <div class="prod-title">{{ prod.title }}</div>
                <div
                  class="prod-origin-price"
                  v-if="prod.origin_price === prod.price"
                >
                  售價 {{ prod.origin_price | currency }}
                </div>
                <span v-else>
                  <div class="prod-origin-price old-price">
                    售價 {{ prod.origin_price | currency }}
                  </div>
                  <div class="prod-price">
                    <b>特價 {{ prod.price | currency }}</b>
                  </div>
                </span>
              </router-link>
              <a
                href="#"
                class="add-to-cart"
                @click.prevent="addToCart(prod.id)"
              >
                <i class="fa fa-cart-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

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
      pagination: {},
      isAll: true,
      isLand: false,
      isSea: false
    };
  },
  methods: {
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
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
          this.$bus.$emit(
            "message:push",
            res.data.data.product.title + "已加入購物車",
            "success"
          );
          this.$bus.$emit("get-cart-num");
          // $("#modal").modal("hide");
          // this.getCart();
        })
        .catch(err => {
          this.isLoading = false;
          // console.log(err);
          // console.log(err.response);
          console.dir(err.response.data.errors[0]);
          // alert(err.response.data.errors[0]);
          // eslint-disable-next-line no-undef
          this.$bus.$emit(
            "message:push",
            err.response.data.errors[0],
            "danger"
          );
          // $("#modal").modal("hide");
        });
    },
    // getCart() {
    //   this.isLoading = true;
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;

    //   this.$http
    //     .get(url)
    //     .then(res => {
    //       this.isLoading = false;
    //       console.log(res);
    //       this.carts = res.data.data;
    //       // this.cartNum = res.data.data.length;
    //       this.cartTotal = 0;
    //       this.updateCartTotal();
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // },
    updateCartTotal() {
      this.carts.forEach(item => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
    // getProds(page = 1) {
    getProds() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?paged=28`;
      // const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          console.log(this.prods);
          this.pagination = res.data.meta.pagination;
        })
        .catch(err => {
          console.dir(err);
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    getAll() {
      this.getProds();
      this.isAll = true;
      this.isLand = false;
      this.isSea = false;
    },
    getLand() {
      this.isLoading = true;
      this.isAll = false;
      this.isLand = true;
      this.isSea = false;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          console.log(res);
          // this.prods.$set.length = 30;
          // console.log(this.prods.length);
          this.pagination = res.data.meta.pagination;
          let obj = JSON.parse(JSON.stringify(this.prods));
          // let land = JSON.parse(JSON.stringify(this.prods));
          // let sea = JSON.parse(JSON.stringify(this.prods));
          obj = this.prods.filter(item => item.category === "風景");
          // console.log(land);
          this.prods = obj;
        })
        .catch(err => {
          console.dir(err);
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    getSea() {
      this.isLoading = true;
      this.isAll = false;
      this.isLand = false;
      this.isSea = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          console.log(res);
          // this.prods.$set.length = 30;
          console.log(this.prods.length);
          this.pagination = res.data.meta.pagination;
          let obj = JSON.parse(JSON.stringify(this.prods));
          // let land = JSON.parse(JSON.stringify(this.prods));
          // let sea = JSON.parse(JSON.stringify(this.prods));
          obj = this.prods.filter(item => {
            // console.log(item);
            return item.category === "海景";
            // return item.origin_price === 4709;
          });
          // console.log(land);
          this.prods = obj;
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
    // this.getCart();
  }
};
</script>
