<template>
  <div class="ckout">
    <div class="container">
      <h1>結帳</h1>
      <hr />
      <div class="table-responsive cart-area">
        <div class="view-prod">
          <button class="btn">檢閱購買商品</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>品名</th>
              <th>圖片</th>
              <th>數量</th>
              <th>單位</th>
              <th>單價</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in carts"
              :key="item.product.id + 1"
              class="cart-prod"
            >
              <td class="name">
                <a href="#">{{ item.product.title }}</a>
                <div v-if="coupon.enabled" class="text-info">
                  已套用優惠卷
                </div>
              </td>
              <td class="img">
                <img :src="item.product.imageUrl[0]" alt="" />
              </td>
              <td class="calc">
                <div class="input-group">
                  <span type="number" class="text-center" min="1">
                    {{ item.quantity }}
                  </span>
                </div>
              </td>
              <td class="unit">
                <span class="hide-575">{{ item.quantity }} </span>
                {{ item.product.unit }}
              </td>
              <td class="prod-price">
                {{ item.product.price | currency }}
              </td>
            </tr>
            <tr>
              <td class="text-right" colspan="4">
                <span class="total-word">總數</span>
              </td>
              <td class="text-right">
                {{ cartPageTotalNum }}
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td class="text-right" colspan="4">
                <span class="total-word">小計</span>
              </td>
              <td class="text-right prod-price">
                {{ cartTotal | currency }}
              </td>
            </tr>
            <tr v-if="coupon.enabled">
              <td class="text-right" colspan="4">
                <span class="total-word">折扣</span>
              </td>
              <td class="text-right prod-price">
                - {{ (cartTotal * (coupon.percent / 100)) | currency }}
              </td>
            </tr>
            <tr>
              <td class="text-right" colspan="4">
                <b class="total-word">總計</b>
              </td>
              <td class="text-right prod-price" v-if="coupon.enabled">
                <b>
                  {{
                    (cartTotal - cartTotal * (coupon.percent / 100)) | currency
                  }}
                </b>
              </td>
              <td v-else class="text-right prod-price">
                <b>{{ cartTotal | currency }}</b>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div class="float-left coupon-input">
        <div class="input-group mb-3">
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
        </div>
      </div>
      <br />
      <div class="my-5 justify-content-center">
        <validation-observer v-slot="{ invalid }">
          <h4>收件資訊</h4>
          <hr />
          <form @submit.prevent="createOrder" class="row">
            <div class="col-sm-6">
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required"
                >
                  <label for="name">收件人姓名</label>
                  <input
                    name="收件人姓名"
                    type="text"
                    id="name"
                    class="form-control"
                    v-model="form.name"
                    :class="classes"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required|email"
                >
                  <label for="email">收件人信箱</label>
                  <input
                    name="收件人信箱"
                    type="email"
                    id="email"
                    class="form-control"
                    v-model="form.email"
                    :class="classes"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required|min:8"
                >
                  <label for="tel">收件人電話</label>
                  <input
                    name="收件人電話"
                    type="tel"
                    id="tel"
                    class="form-control"
                    v-model="form.tel"
                    :class="classes"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="form-group">
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required"
                >
                  <label for="address">收件人地址</label>
                  <input
                    name="收件人地址"
                    type="text"
                    id="address"
                    class="form-control"
                    v-model="form.address"
                    :class="classes"
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
            </div>
            <div class="col-sm-12">
              <div class="form-group">
                <label for="address">付款方式</label>
                <select class="form-control" v-model="form.payment" required>
                  <option value="" disabled selected>請選擇</option>
                  <option value="ATM">ATM</option>
                  <option value="Credit">Credit</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </div>
              <div class="form-group">
                <label for="msg">留言</label>
                <textarea
                  id="msg"
                  cols="30"
                  rows="3"
                  class="form-control"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-center">
                <button class="btn full-479" type="submit" :disabled="invalid">
                  <i class="fa fa-send"></i> 送出表單
                </button>
              </div>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
export default {
  data() {
    return {
      carts: [],
      cartTotal: 0,
      cartPageTotalNum: 0,
      form: {
        name: "",
        email: "",
        tel: "",
        address: "",
        payment: "",
        message: ""
      },
      coupon: {},
      coupon_code: ""
    };
  },
  mounted() {
    $(".view-prod .btn").on("click", function() {
      console.log("click");
      $(this)
        .parent()
        .next("table")
        .children("thead")
        // .stop()
        .toggle();
      $(this)
        .parent()
        .next("table")
        .find(".cart-prod")
        // .stop()
        .toggle();
    });
  },
  methods: {
    createOrder() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      const order = { ...this.form };

      if (this.coupon.enabled) {
        order.coupon = this.coupon.code;
      }

      this.$http
        .post(url, order)
        .then(res => {
          if (res.data.data.id) {
            this.$router.push(`/checkout_result/${res.data.data.id}`);
          }
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.$bus.$emit("message:push", "訂單建立失敗", "danger");
          this.isLoading = false;
        });
    },
    addCoupon() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/coupon/search`;
      this.$http
        .post(url, { code: this.coupon_code })
        .then(res => {
          this.coupon = res.data.data;
          this.isLoading = false;
        })
        .catch(err => {
          console.log(err);
          this.$bus.$emit("message:push", "加入失敗", "danger");
          this.isLoading = false;
        });
    },
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
    getCart() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      this.$http
        .get(url)
        .then(res => {
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
