<template>
  <div
    id="app"
    :style="{
      backgroundImage: `url(${bg})`
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

<style lang="scss">
@import "./assets/scss/all.scss";
</style>

<script>
import Gototop from "@/components/Gototop.vue";
import Toast from "@/components/Toast.vue";
import Footer from "@/components/Footer.vue";
import bg from "./assets/img/about/OPL00009-1.jpg";
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
  }
};
</script>
