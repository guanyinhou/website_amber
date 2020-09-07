<template>
  <div class="order">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <h1>訂單查詢</h1>
      <hr />
      <div class="text-center">
        <form class="form-signin" @submit.prevent.enter="searchOrder(order)">
          <br />
          <br />
          <br />
          <br />
          <div class="row">
            <div class="col-sm-4"></div>
            <div class="col-sm-4">
              <!-- <input
                type="email"
                class="form-control"
                placeholder="E-mail"
                v-model="order.email"
                required
              />
              <br /> -->
              <input
                type="text"
                class="form-control"
                placeholder="Order Number"
                v-model="order.id"
                required
              />
            </div>
            <div class="col-sm-4"></div>
          </div>
          <br />
          <br />
          <br />
          <div class="btn-zone">
            <button class="btn" type="submit">送出查詢</button>
            <br />
          </div>
        </form>
        <div class="order-result" :class="{ active: resultShow }">
          <br />
          <br />
          <br />
          <hr />
          <br />
          <table class="table-hover table-bordered">
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
                <td>{{ result.amount }}</td>
                <td>{{ result.paid }}</td>
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
      // if (order.email === orders[]) {
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.result = res.data.data;
          console.log(this.result);
          // order.forEach(ele => {
          //   console.log(ele);
          // });
          // this.$router.push(`./order/${order.id}`);
          this.order.id = "";
          this.resultShow = true;
        })
        .catch(err => {
          this.isLoading = false;
          console.dir(err);
        });
      // }
    }
  }
};
</script>
