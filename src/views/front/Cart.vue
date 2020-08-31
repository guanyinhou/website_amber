<template>
  <div class="cart">
    <div class="container">
      <h1 class="d-inline-block">購物車</h1>
      <div class="float-right" v-if="cartPageTotalNum">
        <button class="btn" type="button" @click="rmAllCartItem">
          <i class="fa fa-trash"></i> 刪除所有品項
        </button>
      </div>
      <hr />
      <div class="cart-area">
        <div class="clearfix"></div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>刪除</th>
                <th>品名</th>
                <th>圖片</th>
                <th>數量</th>
                <th>單位</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in carts" :key="item.product.id + 1">
                <td class="trash">
                  <button class="btn" @click="rmCartItem(item.product.id)">
                    <i class="fa fa-trash"></i>
                  </button>
                </td>
                <td class="name">
                  <a href="#">{{ item.product.title }}</a>
                </td>
                <td class="img">
                  <img :src="item.product.imageUrl[0]" alt="" />
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
              </tr>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總數</span>
                </td>
                <td class="text-center">
                  {{ cartPageTotalNum }}
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-right" colspan="5">
                  <span class="total-word">總計</span>
                </td>
                <td class="text-center prod-price">
                  {{ cartTotal | currency }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tempData: {},
      status: {
        loadingNum: ""
      },
      carts: [],
      cartTotal: 0,
      cartPageTotalNum: 0
    };
  },
  methods: {
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
          this.$bus.$emit("message:push", res.data.message, "success");
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
          this.$bus.$emit("message:push", "全部商品已刪除", "success");
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
