<template>
  <div class="order">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <h1>訂單查詢</h1>
      <hr />
      <p>請依序在下方欄位中填寫訂單查詢所需資料：</p>
      <div class="text-center">
        <validation-observer v-slot="{ invalid }">
          <form class="form-signin" @submit.prevent.enter="searchOrder(order)">
            <br />
            <br />
            <div class="row">
              <div class="col-sm-4"></div>
              <div class="col-sm-4">
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required"
                >
                  <input
                    type="email"
                    name="Email"
                    class="form-control"
                    placeholder="E-mail"
                    v-model="order.email"
                    :classes="classes"
                    required
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
                <br />
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required"
                >
                  <input
                    type="text"
                    name="Order Number"
                    class="form-control"
                    placeholder="Order Number"
                    v-model="order.id"
                    :classes="classes"
                    required
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
              </div>
              <div class="col-sm-4"></div>
            </div>
            <br />
            <br />
            <br />
            <div class="btn-zone">
              <button class="btn" type="submit" :disabled="invalid">
                送出查詢
              </button>
              <br />
            </div>
          </form>
        </validation-observer>
        <div class="order-result" :class="{ active: resultShow }">
          <br />
          <br />
          <br />
          <hr />
          <br />
          <table class="table-bordered">
            <thead>
              <tr>
                <th>訂單編號</th>
                <th>訂單日期</th>
                <th>訂單金額</th>
                <th>付款狀態</th>
                <th>購買內容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ result.id }}</td>
                <td>{{ result.created.datetime }}</td>
                <td>{{ result.amount | currency }}</td>
                <td v-if="result.paid">已付款</td>
                <td v-else>未付款</td>
                <td>
                  <a href="">詳細</a>
                </td>
              </tr>
            </tbody>
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
      isLoading: false,
      order: {
        email: "",
        id: ""
      },
      orders: {},
      result: {
        created: {
          datetime: ""
        }
      },
      resultShow: false
    };
  },
  // created() {
  //   this.searchOrder();
  // },
  methods: {
    searchOrder(order) {
      // this.datetime = this.result.created.datetime;
      this.isLoading = true;
      // const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders`;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/orders/${order.id}`;
      console.log(url);
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.result = res.data.data;
          console.log(this.result);
          let userEmail = this.result.user.email;
          if (order.email === userEmail) {
            // order.forEach(ele => {
            //   console.log(ele);
            // });
            // this.$router.push(`./order/${order.id}`);
            this.order.id = "";
            this.resultShow = true;
          }
        })
        .catch(err => {
          this.isLoading = false;
          console.dir(err);
        });
    }
  }
};
</script>
