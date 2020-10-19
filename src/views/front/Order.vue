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
                  <label for="email">電子郵件信箱</label>
                  <input
                    id="email"
                    type="email"
                    name="電子郵件信箱"
                    class="form-control"
                    placeholder="E-mail"
                    v-model="order.email"
                    :classes="classes"
                    required
                  />
                  <span class="text-danger">{{ errors[0] }}</span>
                </validation-provider>
                <validation-provider
                  v-slot="{ errors, classes }"
                  rules="required"
                >
                  <label for="orderNumber">訂單編號</label>
                  <input
                    id="orderNumber"
                    type="text"
                    name="訂單編號"
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
          <table class="table-bordered table-responsive">
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
                  <button
                    class="btn"
                    type="button"
                    data-toggle="modal"
                    data-target="#prodModal"
                  >
                    詳細
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- prodModal -->
    <form>
      <div
        class="modal fade"
        id="prodModal"
        tabindex="-1"
        aria-labelledby="prodModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                <span>訂單內容</span>
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-12">
                  <!-- 輸入圖片連結 -->
                  <div class="form-group">
                    <label>訂單編號：</label>
                    <p>{{ result.id }}</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>訂單日期：</label>
                    <p>{{ result.created.datetime }}</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>訂單金額：</label>
                    <p>{{ result.amount | currency }}</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>付款狀態：</label>
                    <p v-if="result.paid">已付款</p>
                    <p v-else>未付款</p>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>付款方式：</label>
                    <p>{{ result.payment }}</p>
                  </div>
                </div>
                <div class="col-sm-12">
                  <div class="form-group">
                    <label>購買內容：</label>
                    <div class="buying-list">
                      <div
                        class="buying-prod"
                        v-for="(item, idx) in result.products"
                        :key="idx"
                      >
                        <div class="buying-img">
                          <img
                            :src="item.product.imageUrl[0]"
                            :alt="item.product.title"
                          />
                        </div>
                        <div class="buying-name">
                          {{ item.product.title }}
                        </div>
                        <div class="buying-name">
                          {{ item.quantity }} {{ item.product.unit }}
                        </div>
                        <div class="buying-name">
                          {{ item.product.price | currency }}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn"
                data-dismiss="modal"
                aria-label="Close"
              >
                確認
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      order: {
        email: "fef!@greh.uyi",
        id: "UP2xCUQLl0EgiHJGY3Yq8NiiX0cVWBI1c4VMki42juRCMJPyfvZFOQZM9N13gcKz"
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
