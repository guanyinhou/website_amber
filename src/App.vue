<template>
  <div id="app">
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
export default {
  components: {
    Gototop,
    Toast,
    Footer
  }
};
</script>
