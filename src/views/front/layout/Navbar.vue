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
          <li class="nav-item ml-auto">
            <router-link class="nav-link" to="/cart">
              <i class="fa fa-shopping-cart show-991"></i>
              <span class="hide-991">購物車</span>
              <span class="badge badge-pill badge-danger">
                {{ cartTotalNum }}
              </span>
            </router-link>
          </li>
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
export default {
  data() {
    return {
      // token: "",
      // checkSuccess: false
      carts: [],
      cartTotalNum: 0
    };
  },
  created() {
    // this.token = document.cookie.replace(
    //   /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
    //   "$1"
    // );

    // const url = `${process.env.VUE_APP_APIPATH}/api/auth/check`;

    // // Axios 預設值
    // this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;

    // this.$http
    //   .post(url, { api_token: this.token })
    //   .then(res => {
    //     if (!res.data.success) {
    //       this.$router.path({
    //         path: "login"
    //       });

    //       this.$bus.$emit("message:push", res.data.message, "success");
    //     }
    //     this.checkSuccess = true;
    //   })
    //   .catch(err => {
    //     console.dir(err);
    //     this.$bus.$emit("message:push", err.message, "danger");
    //   });
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
