<template>
  <div class="work">
    <div class="container">
      <div class="text-center">
        <h1>{{ work.title }}</h1>
      </div>
      <hr />
      <div class="prod-zone">
        <div class="prod-img" v-for="(item, idx) in 5" :key="idx">
          <img :src="work.imageUrl[idx]" />
        </div>
        <div class="text-center">
          <div
            class="prod-origin-price"
            v-if="work.origin_price === work.price"
          >
            售價 {{ work.origin_price | currency }}
          </div>
          <span v-else>
            <div class="prod-origin-price old-price">
              售價 {{ work.origin_price | currency }}
            </div>
            <div class="prod-price">
              <h2>特價 {{ work.price | currency }}</h2>
            </div>
          </span>
          <div class="add-to-cart">
            <button class="btn" @click="addToCart(work.id)">
              <i class="fa fa-cart-plus"></i> 加入購物車
            </button>
            <button
              class="btn"
              @click="updateFavorite(work.id)"
              v-if="favorited.indexOf(work.id) === -1"
            >
              <i class="fa fa-heart-o"></i> 加入我的最愛
            </button>
            <button class="btn" @click="updateFavorite(work.id)" v-else>
              <i class="fa fa-heart text-danger"></i> 已加入我的最愛
            </button>
          </div>
        </div>
        <div class="prod-content">
          <div class="sub-title">產品介紹</div>
          <div v-html="work.content"></div>
        </div>
        <div class="prod-content">
          <div class="sub-title">產品材質</div>
          <p>{{ work.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      work: [],
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || []
      // isLoading: false,
      // cartTotal: 0
    };
  },
  created() {
    this.getWork();
  },
  methods: {
    updateFavorite(id) {
      // const favoriteId = this.favorited.indexOf(id);
      // if (favoriteId === -1) {
      //   this.favorited.push(id);
      //   this.$bus.$emit("message:push", "已加入我的最愛", "info");
      // } else {
      //   this.favorited.splice(favoriteId, 1);
      //   this.$bus.$emit("message:push", "已移出我的最愛", "info");
      // }
      // localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      // console.log(this.favorited);
      // this.$bus.$emit("get-favorite-num");
      if (this.favorited.indexOf(id) === -1) {
        this.favorited.push(id);
        this.$bus.$emit("message:push", "已加入我的最愛", "info");
      } else {
        this.favorited.splice(this.favorited.indexOf(id), 1);
        this.$bus.$emit("message:push", "已移出我的最愛", "info");
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      // this.favoriteTotalNum = this.favorited.length;
      this.$bus.$emit("get-favorite-num:favorited", id);
    },
    getWork() {
      const id = this.$route.params.id;
      this.$http
        .get(
          `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`
        )
        .then(res => {
          this.work = res.data.data;
        });
    },
    // getCart() {
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
    //   this.$http
    //     .get(url)
    //     .then(res => {
    //       this.carts = res.data.data;
    //       this.cartTotal = 0;
    //       this.updateCartTotal();
    //     })
    //     .catch(err => {
    //       console.dir(err);
    //     });
    // },
    // updateCartTotal() {
    //   this.carts.forEach(item => {
    //     this.cartTotal += item.product.price * item.quantity;
    //   });
    // },
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
          // this.isLoading = false;
          console.log(res);
          this.$bus.$emit(
            "message:push",
            res.data.data.product.title + "已加入購物車",
            "info"
          );
          this.$bus.$emit("get-cart-num");
          // $("#modal").modal("hide");
          // this.getCart();
        })
        .catch(err => {
          // this.isLoading = false;
          this.$bus.$emit(
            "message:push",
            err.response.data.errors[0],
            "danger"
          );
          // $("#modal").modal("hide");
        });
    }
  }
};
</script>
