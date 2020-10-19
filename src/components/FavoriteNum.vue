<template>
  <span class="badge badge-pill badge-danger">
    {{ favoriteTotalNum }}
  </span>
</template>

<script>
export default {
  data() {
    return {
      favoriteTotalNum: 0,
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || []
    };
  },
  created() {
    this.getFavorite();
    this.$bus.$on("get-favorite-num:favorited", id => {
      this.updateFavorite(id);
    });
  },
  methods: {
    getFavorite() {
      this.favoriteTotalNum = this.favorited.length;
    },
    updateFavorite(id) {
      if (id === null || undefined || "") {
        this.favorited = [];
      } else if (this.favorited.indexOf(id) === -1) {
        this.favorited.push(id);
      } else {
        this.favorited.splice(this.favorited.indexOf(id), 1);
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.favoriteTotalNum = this.favorited.length;
    }
  }
};
</script>
