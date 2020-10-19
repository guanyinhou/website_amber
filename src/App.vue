<template>
  <div
    id="app"
    :key="key"
    :style="{
      backgroundImage: this.$route.name === 'Front' ? `url(${bg})` : ''
    }"
  >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Toast />
    <router-view />
    <Footer />
    <Gototop />
  </div>
</template>

<script>
import Gototop from "@/components/Gototop.vue";
import Toast from "@/components/Toast.vue";
import Footer from "@/components/Footer.vue";
import bg from "./assets/img/about/OPS00004-1.jpg";

export default {
  components: {
    Gototop,
    Toast,
    Footer
  },
  data() {
    return {
      bg
    };
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    }
  },
  methods: {
    checkBg() {
      // return this.$router.history.current["path"] === "Home";
      // console.log(this.$route.name);
      if (this.$route.name === "Front") {
        return true;
      }
    }
  }
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
