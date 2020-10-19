<template>
  <div
    id="app"
    :style="{
      backgroundImage:
        this.$route.name === 'Works' ||
        this.$route.name === 'Home' ||
        this.$route.name === 'About' ||
        this.$route.name === 'Work' ||
        this.$route.name === 'Contact' ||
        this.$route.name === 'Order' ||
        this.$route.name === 'Favorite' ||
        this.$route.name === 'Cart' ||
        this.$route.name === 'Checkout' ||
        this.$route.name === 'CheckoutFinish' ||
        this.$route.name === 'Error' ||
        this.$route.name === 'Login'
          ? `url(${bg})`
          : ''
    }"
  >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Toast />
    <router-view :key="key" />
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
  }
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
