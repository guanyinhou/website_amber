<template>
  <div class="cart favorite">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <h1 class="d-inline-block">我的最愛</h1>
      <hr />
      <div class="cart-area" v-if="favoriteProd.length > 0">
        <div class="clearfix"></div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>品名</th>
                <th>圖片</th>
                <th>單位</th>
                <th>單價</th>
                <th>購買</th>
                <th>移除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in favoriteProd" :key="item.id">
                <td class="name">
                  <a href="#">{{ item.title }}</a>
                </td>
                <td class="img">
                  <img :src="item.imageUrl[0]" :alt="item.title" />
                </td>
                <td class="unit">{{ item.unit }}</td>
                <td class="prod-price">
                  {{ item.price | currency }}
                </td>
                <td class="add-to-cart">
                  <button class="btn" @click="addToCart(item.id)" type="button">
                    <i class="fa fa-cart-plus"></i>
                  </button>
                </td>
                <td class="trash">
                  <button
                    class="btn"
                    @click="rmFavorited(item.id)"
                    type="button"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總數</span>
                </td>
                <td class="text-center">
                  {{ favoriteTotalNum }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總計</span>
                </td>
                <td class="text-center prod-price">
                  {{ favoriteTotal | currency }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="float-right">
          <button class="btn first" type="button" @click="rmAllFavorites">
            <i class="fa fa-times"></i> 全部移除
          </button>
        </div>
      </div>
      <div class="cont-shop text-center" v-else>
        <br />
        <p>目前尚無我的最愛</p>
        <br />
        <router-link to="/works" class="btn">繼續挑選</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: {
        loadingNum: ""
      },
      carts: [],
      favoriteTotal: 0,
      favoriteTotalNum: 0,
      cartPageTotalNum: 0,
      favoriteProd: [],
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || [],
      prods: []
    };
  },
  methods: {
    getProds(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          this.pagination = res.data.meta.pagination;
          this.getFavorite();
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    getFavorite() {
      this.favoriteTotalNum = this.favorited.length;
      this.favoriteProd = this.prods.filter(
        item => this.favorited.indexOf(item.id) > -1
      );
      this.updateFavoriteTotal();
      this.$bus.$emit("get-favorite-num");
    },
    updateFavoriteTotal() {
      this.favoriteTotal = 0;
      this.favoriteProd.forEach(item => {
        this.favoriteTotal += item.price;
      });
    },
    rmFavorited(id) {
      const favoriteId = this.favorited.indexOf(id);
      if (favoriteId !== -1) {
        this.favorited.splice(favoriteId, 1);
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.getProds();
      this.$bus.$emit("get-favorite-num:favorited", id);
    },
    rmAllFavorites() {
      this.favorited = [];
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.getProds();
      this.$bus.$emit("message:push", "已全數移出", "info");
      this.$bus.$emit("get-favorite-num:favorited", null);
    },
    updateQuantity(id, quantity) {
      if (quantity <= 0) return;
      // 等同addToCart
      // 加速數量選擇
      this.status.loadingNum = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity
      };
      this.$http.patch(url, cart).then(() => {
        // 加速數量選擇
        this.status.loadingNum = "";
        this.favoriteTotalNum = 0;
        this.cartPageTotalNum = 0;
        this.$bus.$emit("get-cart-num");
        this.updateFavoriteTotal();
        this.getCart();
      });
    },
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http.get(url).then(res => {
        this.carts = res.data.data;
        this.cartTotalNum = 0;
        this.carts.forEach(item => {
          this.cartPageTotalNum += item.quantity;
        });
        this.cartTotal = 0;
        this.updateCartTotal();
      });
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
    }
  },
  created() {
    this.getProds();
    this.getCart();
  }
};
</script>
