<template>
  <div class="works">
    <Loading :active.sync="isLoading"></Loading>
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
                <a
                  href="#"
                  :class="{ active: filterCate === '' }"
                  @click.prevent="filterCate = ''"
                >
                  全部
                </a>
              </li>
              <li v-for="item in cates" :key="item">
                <a
                  href="#"
                  :class="{ active: item === filterCate }"
                  @click.prevent="filterCate = item"
                >
                  {{ item }}
                </a>
              </li>
              <!-- <li>
                <a
                  href="#"
                  :class="{ active: isSea }"
                  @click.prevent="getSea()"
                >
                  海景畫
                </a>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="col-sm-9">
          <ul class="row prod-list">
            <li
              v-for="prod in filterCates"
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
              <a
                href="#"
                class="add-to-favorite"
                @click.prevent="updateFavorite(prod.id)"
              >
                <i
                  class="fa fa-heart-o"
                  v-if="favorited.indexOf(prod.id) === -1"
                ></i>
                <i class="fa fa-heart text-danger" v-else></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr />
      <div class="float-right">
        <Pagination :pages="Pagination" @update="getProds" />
      </div>
    </div>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      prods: [],
      isLoading: false,
      Pagination: {},
      cates: ["風景", "海景"],
      filterCate: "",
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || []
    };
  },
  methods: {
    updateFavorite(id) {
      if (this.favorited.indexOf(id) === -1) {
        this.favorited.push(id);
        this.$bus.$emit("message:push", "已加入我的最愛", "info");
      } else {
        this.favorited.splice(this.favorited.indexOf(id), 1);
        this.$bus.$emit("message:push", "已移出我的最愛", "info");
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.$bus.$emit("get-favorite-num:favorited", id);
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity: qty
      };

      this.$http
        .post(url, cart)
        .then(res => {
          this.isLoading = false;

          this.$bus.$emit(
            "message:push",
            res.data.data.product.title + "已加入購物車",
            "info"
          );
          this.$bus.$emit("get-cart-num");
        })
        .catch(err => {
          this.isLoading = false;

          this.$bus.$emit(
            "message:push",
            err.response.data.errors[0],
            "danger"
          );
        });
    },
    getProds(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=40`;
      this.$http
        .get(url)
        .then(res => {
          const { cateName } = this.$route.params;
          if (cateName) {
            this.filterCate = cateName;
          }
          this.isLoading = false;
          this.prods = res.data.data;
          this.Pagination = res.data.meta.pagination;
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    }
  },
  created() {
    this.getProds();
  },
  computed: {
    filterCates() {
      if (this.filterCate) {
        return this.prods.filter(item => {
          const filterData = item.category
            .toLowerCase()
            .includes(this.filterCate.toLowerCase());
          return filterData;
        });
      }
      return this.prods;
    }
  }
};
</script>
