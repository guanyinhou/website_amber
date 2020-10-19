<template>
  <div class="cart">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <h1 class="d-inline-block">購物車</h1>
      <hr />
      <div class="cart-area" v-if="cartPageTotalNum">
        <div class="clearfix"></div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>品名</th>
                <th>圖片</th>
                <th>數量</th>
                <th>單位</th>
                <th>單價</th>
                <th>刪除</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <td class="name">
                  <a href="#">{{ item.product.title }}</a>
                  <!-- <div v-if="coupon.enabled" class="text-success">
                    已套用優惠卷
                  </div> -->
                </td>
                <td class="img">
                  <img
                    :src="item.product.imageUrl[0]"
                    :alt="item.product.title"
                  />
                </td>
                <td class="calc">
                  <div class="input-group">
                    <div class="inpuy-group-append">
                      <button
                        class="btn"
                        type="button"
                        :disabled="item.quantity <= 1"
                        @click="
                          item.quantity--;
                          updateQuantity(item.product.id, item.quantity);
                        "
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="number"
                      class="form-control text-center"
                      v-model="item.quantity"
                      min="1"
                      @change="updateQuantity(item.product.id, item.quantity)"
                    />
                    <div class="input-group-prepend">
                      <button
                        class="btn"
                        type="button"
                        @click="
                          item.quantity++;
                          updateQuantity(item.product.id, item.quantity);
                        "
                      >
                        <!-- :disabled="status.loadingNum === item.product.id" -->
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="unit">{{ item.product.unit }}</td>
                <td class="prod-price">
                  {{ item.product.price | currency }}
                </td>
                <td class="trash">
                  <button
                    class="btn"
                    @click="rmCartItem(item.product.id)"
                    type="button"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
              </tr>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總數</span>
                </td>
                <td class="text-right">
                  {{ cartPageTotalNum }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總計</span>
                </td>
                <td class="text-right prod-price">
                  {{ cartTotal | currency }}
                </td>
              </tr>
              <!-- <tr v-if="coupon.enabled">
                <td class="text-right" colspan="5">
                  <span class="total-word">折扣價</span>
                </td>
                <td class="text-center prod-price">
                  {{
                    (cartTotal - cartTotal * (coupon.percent / 100)) | currency
                  }}
                </td>
              </tr> -->
            </tfoot>
          </table>
        </div>
        <div class="float-left">
          <!-- <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="請輸入優惠碼"
              v-model="coupon_code"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                @click="addCoupon"
              >
                套用優惠碼
              </button>
            </div>
          </div> -->
          <button class="btn" type="button" @click="rmAllCartItem">
            <i class="fa fa-trash"></i> 刪除所有品項
          </button>
        </div>
        <div class="float-right">
          <router-link class="btn" to="checkout">
            <i class="fa fa-check"></i> 結帳
          </router-link>
        </div>
      </div>
      <div class="cont-shop text-center" v-else>
        <br />
        <p>購物車是空的</p>
        <br />
        <router-link to="/works" class="btn">繼續購物</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      tempData: {},
      status: {
        loadingNum: ""
      },
      carts: [],
      cartTotal: 0,
      cartPageTotalNum: 0
      // coupon: {},
      // coupon_code: ""
    };
  },
  methods: {
    // addCoupon() {
    //   this.isLoading = true;
    //   const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
    //   this.$http
    //     .post(url, { code: this.coupon_code })
    //     .then(res => {
    //       this.coupon = res.data.data;
    //       this.isLoading = false;
    //     })
    //     .catch(err => {
    //       console.log(err);
    //       this.$bus.$emit("message:push", "加入失敗", "danger");
    //       this.isLoading = false;
    //     });
    // },
    updateCartTotal() {
      this.carts.forEach(item => {
        this.cartTotal += item.product.price * item.quantity;
      });
    },
    updateQuantity(id, quantity) {
      if (quantity <= 0) return;
      // 等同addToCart
      // 加速數量選擇
      this.status.loadingNum = id;
      console.log(this.status.loadingNum);
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity
      };
      console.log(cart);
      console.log(cart.quantity);
      this.$http
        .patch(url, cart)
        .then(res => {
          // 加速數量選擇
          this.status.loadingNum = "";
          console.log(res);
          // console.log(this.carts.length);
          this.cartTotal = 0;
          this.cartPageTotalNum = 0;
          this.$bus.$emit("get-cart-num");
          this.updateCartTotal();
          this.getCart();
        })
        .catch(err => {
          console.dir(err);
        });
    },
    rmCartItem(id) {
      this.status.loadingNum = id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`;

      this.$http
        .delete(url)
        .then(res => {
          // 加速數量選擇
          this.status.loadingNum = "";
          this.$bus.$emit("message:push", res.data.message, "info");
          console.log(res);
          this.cartPageTotalNum = 0;
          this.$bus.$emit("get-cart-num");
          this.getCart();
        })
        .catch(err => {
          console.log(err);
        });
    },
    rmAllCartItem() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/all/product`;
      this.$http
        .delete(url)
        .then(() => {
          this.$bus.$emit("message:push", "全部商品已刪除", "info");
          this.isLoading = false;
          this.cartPageTotalNum = 0;
          this.$bus.$emit("get-cart-num");
          this.getCart();
        })
        .catch(err => {
          console.log(err);
          this.isLoading = false;
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
          this.cartTotalNum = 0;
          this.carts.forEach(item => {
            this.cartPageTotalNum += item.quantity;
          });
          this.cartTotal = 0;
          this.updateCartTotal();
        })
        .catch(err => {
          console.dir(err);
        });
    }
  },
  created() {
    this.getCart();
  }
};
</script>
