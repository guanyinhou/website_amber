<template>
  <span class="badge badge-pill badge-danger">
    {{ favoriteTotalNum }}
  </span>
</template>

<script>
// /* global $ */
export default {
  data() {
    return {
      favoriteTotalNum: 0,
      // favoriteProd: [],
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || []
    };
  },
  created() {
    this.getFavorite();
    this.$bus.$on("get-favorite-num:favorited", id => {
      // console.log(id);
      this.updateFavorite(id);
    });
  },
  methods: {
    getFavorite() {
      this.favoriteTotalNum = this.favorited.length;
    },
    updateFavorite(id) {
      console.log(this);
      console.log(id);
      console.log(this.favorited.indexOf(id));
      if (this.favorited.indexOf(id) === -1) {
        this.favorited.push(id);
        // this.$bus.$emit("message:push", "已加入我的最愛", "info");
      } else if (id === null) {
        this.favorited.splice(0);
      } else {
        this.favorited.splice(this.favorited.indexOf(id), 1);
        // this.$bus.$emit("message:push", "已移出我的最愛", "info");
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.favoriteTotalNum = this.favorited.length;
      console.log(this.favorited.indexOf(id));
      console.log(this.favorited);
      // localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
    }
  }
};
</script>
