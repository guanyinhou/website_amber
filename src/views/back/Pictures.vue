<template>
  <div class="pics">
    <Loading :active.sync="isLoading" />
    <div class="text-right mt-4">
      <h3 class="float-left">圖片列表</h3>
    </div>
    <div class="clearfix"></div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>排序</th>
          <th>圖片縮圖</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(pic, i) in pics" :key="i">
          <td>{{ i + 1 }}</td>
          <td>
            <img :src="pic.path" :alt="pic.path" class="img-fluid" />
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button class="btn" @click="openModal(pic)" type="button">
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <hr />
    <div class="float-right">
      <Pagination :pages="Pagination" @update="getData" />
    </div>
    <!-- deleteModal -->
    <div
      class="modal fade"
      id="deleteModal"
      tabindex="-1"
      aria-labelledby="deleteModal"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              刪除圖片
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
            是否刪除圖片(刪除後將無法復原)？
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn" @click="removeData">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* global $ */
import Pagination from "@/components/Pagination.vue";

export default {
  components: {
    Pagination
  },
  data() {
    return {
      isLoading: false,
      tempData: {},
      pics: {},
      Pagination: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage?page=${page}`;

      this.$http
        .get(url)
        .then(res => {
          this.pics = res.data.data;
          this.Pagination = res.data.meta.pagination;
          this.isLoading = false;
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    removeData() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/admin/storage/${this.tempData.id}`;

      this.$http
        .delete(url)
        .then(res => {
          this.isLoading = false;
          $("#deleteModal").modal("hide");
          this.$bus.$emit("message:push", `圖片刪除成功(${res})`, "info");
          this.getData();
        })
        .catch(err => {
          this.isLoading = false;
          $("#deleteModal").modal("hide");
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    openModal(item) {
      $("#deleteModal").modal("show");
      this.tempData = { ...item };
    }
  }
};
</script>
