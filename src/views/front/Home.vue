<template>
  <div class="home">
    <div class="container">
      <h1>首頁</h1>
      <hr />
      <br />
      <div class="cate-area">
        <div class="text-center">
          <h4>作品分類</h4>
        </div>
        <a
          href="#"
          class="half-banner"
          @click.prevent="toCategory(`海景`)"
          :style="{
            backgroundImage: `url(${banner1})`
          }"
        >
          <span>海景</span>
        </a>
        <a
          href="#"
          class="half-banner"
          @click.prevent="toCategory(`風景`)"
          :style="{
            backgroundImage: `url(${banner2})`
          }"
        >
          <span>風景</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import banner1 from "../../assets/img/home/OPS00020-1.jpg";
import banner2 from "../../assets/img/home/OPL00026-1.jpg";
export default {
  data() {
    return {
      banner1,
      banner2
    };
  },
  methods: {
    toCategory(Name) {
      this.$router.push({
        name: "Works",
        params: { cateName: Name }
      });
    }
  }
};
</script>
