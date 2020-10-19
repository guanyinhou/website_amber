<template>
  <div class="ckout-fin">
    <Loading :active.sync="isLoading"></Loading>
    <div class="container">
      <h1>結帳完成</h1>
      <hr />
      <div class="ckout-result">
        <div class="row">
          <div class="col-md-12">
            <p class="ovflow-xs">
              您的訂單編號：
              <span>{{ order.id }}</span>
            </p>
            <br />
          </div>
          <div class="col-md-6">
            <p>
              作品預計會在3-5個工作天寄出。期間若想確認訂單，也可以在「訂單查詢」取得訂單相關內容。倘若對訂單有任何疑問，還請與我們的客服聯繫。
            </p>
            <br />
            <p>感謝您的購買</p>
            <h4>祝您購物愉快！</h4>
            <router-link class="btn pos-abs show-767" to="/home">
              <i class="fa fa-home"></i> 回到首頁
            </router-link>
          </div>
          <div class="col-md-6">
            <h3>購買明細</h3>
            <div class="order-list">
              <div
                class="order-item"
                v-for="(item, idx) in orderProds"
                :key="idx"
              >
                <div class="row">
                  <div class="col-lg-4 col-md-5">
                    <div class="item-img">
                      <img
                        :src="item.product.imageUrl[0]"
                        :alt="item.product.title"
                      />
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-7">
                    <div class="item-name">
                      {{ item.product.title }} x {{ item.quantity }}
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-7">
                    <div class="item-price">
                      {{ item.product.price | currency }} /
                      {{ item.product.unit }}
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="order-payment">
                <div class="order-price">
                  購買金額：
                  <span class="float-right">{{ order.amount | currency }}</span>
                </div>
                <div class="order-payby">
                  付款方式：
                  <span class="float-right">{{ order.payment }}</span>
                </div>
                <div class="order-status">
                  付款狀態：
                  <span class="float-right">{{
                    order.paid ? "已付款" : "尚未付款"
                  }}</span>
                </div>
              </div>
              <hr />
              <div class="order-receiver">
                <div class="order-name">
                  收件人：
                  <span class="float-right">{{ order.user.name }}</span>
                </div>
                <div class="order-email">
                  收件人Email：
                  <span class="float-right">{{ order.user.email }}</span>
                </div>
                <div class="order-tel">
                  收件人電話：
                  <span class="float-right">{{ order.user.tel }}</span>
                </div>
                <div class="order-address">
                  收件人地址：
                  <span class="float-right">{{ order.user.address }}</span>
                </div>
                <div class="order-msg">
                  收件人備註：
                  <span class="float-right">
                    {{ order.user.message ? order.user.message : "無備註" }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 hide-767 text-center">
            <router-link class="btn full-479" to="/home">
              <i class="fa fa-home"></i> 回到首頁
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      orderId: "",
      order: {
        user: {
          name: ""
        }
      },
      orderProds: {}
    };
  },
  created() {
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.orderId = this.$route.params.orderId;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${this.orderId}`;
      this.isLoading = true;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.order = res.data.data;
          this.orderProds = res.data.data.products;
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", `讀取錯誤${err}`, "danger");
        });
    }
  }
};
</script>
