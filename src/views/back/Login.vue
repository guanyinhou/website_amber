<template>
  <div class="login">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="row">
        <div class="col-xl-4 col-lg-3 col-md-3 col-sm-2 col-1"></div>
        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-8 col-10">
          <div class="text-center">
            <h1 class="theme">
              The Art of<br />
              Amber Wu
            </h1>
            <h1 class="title">後臺登入</h1>
            <form class="form-signin" @submit.prevent.enter="signin">
              <hr />
              <input
                type="email"
                class="form-control"
                placeholder="E-mail"
                v-model="user.email"
                required
              />
              <br />
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                v-model="user.password"
                required
              />
              <br />
              <hr />
              <div class="btn-zone">
                <button class="btn" type="submit">登入</button>
                <br />
              </div>
            </form>
          </div>
        </div>
        <div class="col-xl-4 col-lg-3 col-md-3 col-sm-2 col-1"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    signin() {
      this.isLoading = true;

      const url = `${process.env.VUE_APP_APIPATH}/api/auth/login`;

      this.axios
        .post(url, this.user)
        .then(res => {
          this.isLoading = false;
          const { token } = res.data;
          const { expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(
            expired * 1000
          )}`;
          this.$bus.$emit("message:push", res.data.message, "info");
          this.$router.push("/admin");
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    }
  }
};
</script>
