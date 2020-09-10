<template>
  <div>
    <nav class="navbar navbar-top fixed-top navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand" href="#" to="/">
        The Art of Amber Wu
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/home">
              首頁
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">
              關於藝術家
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/works">
              作品集
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">
              聯絡我們
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/order">
              訂單查詢
            </router-link>
          </li>
          <span class="ml-auto d-flex">
            <li class="nav-item">
              <router-link class="nav-link" to="/favorite">
                <i class="fa fa-heart show-991"></i>
                <span class="hide-991">我的最愛</span>
                <FavoriteNum />
                <!-- <span class="badge badge-pill badge-danger">
                  {{ favoriteTotalNum }}
                </span> -->
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/cart">
                <i class="fa fa-shopping-cart show-991"></i>
                <span class="hide-991">購物車</span>
                <span class="badge badge-pill badge-danger">
                  {{ cartTotalNum }}
                </span>
              </router-link>
            </li>
          </span>
        </ul>
      </div>
    </nav>
    <div class="container-fluid">
      <!-- <router-view v-if="checkSuccess" :token="token" /> -->
      <router-view />
    </div>
  </div>
</template>

<script>
/* global $ */
import FavoriteNum from "@/components/FavoriteNum.vue";
export default {
  components: {
    FavoriteNum
  },
  data() {
    return {
      // token: "",
      // checkSuccess: false
      prods: [],
      carts: [],
      cartTotalNum: 0,
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || []
    };
  },
  created() {
    this.getCart();
    this.$bus.$on("get-cart-num", () => {
      this.getCart();
    });
  },
  mounted() {
    $(".nav-link").on("click", function() {
      // console.log("test");
      $(this)
        .parentsUntil("nav")
        .removeClass("show");
    });
    $(window).scroll(function() {
      if ($(this).scrollTop() > 300) {
        $("nav.navbar").addClass("active");
      } else {
        $("nav.navbar").removeClass("active");
      }
    });
  },
  methods: {
    // signout() {
    //   document.cookie = "tokenName=;expire=;";
    //   window.location = "/final_work/dist/#/";
    // }
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(url)
        .then(res => {
          console.log(res);
          this.carts = res.data.data;
          this.cartTotalNum = 0;
          this.carts.forEach(item => {
            this.cartTotalNum += item.quantity;
          });
        })
        .catch(err => {
          console.dir(err);
        });
    }
  }
};
</script>
