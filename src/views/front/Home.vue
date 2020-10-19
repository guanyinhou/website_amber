<template>
  <div class="home">
    <div class="container">
      <div class="text-center">
        <h1>Welcome</h1>
        <hr />
        <br />
      </div>
      <div
        class="desc"
        :style="{
          backgroundImage: `url(${desc})`
        }"
      >
        <p>
          「The Art of Amber Wu」作為一個素人藝術家的平台，
          提供了自創作以來完整的藝術收藏。無論您是藝術愛好者、
          藝術家粉絲、藝術收藏家，均誠摯地期望你們能在這裡有所收穫。
        </p>
      </div>
      <div class="desc-img">
        <img src="../../assets/img/home/home-1.jpg" alt="hmoe1" />
      </div>
      <div class="desc-img">
        <img src="../../assets/img/home/home-2.jpg" alt="hmoe2" />
      </div>
      <div class="desc-img">
        <img src="../../assets/img/home/home-3.jpg" alt="hmoe3" />
      </div>
      <div class="special-works" v-if="special.length > 0">
        <div class="text-center">
          <h4>特賣專區</h4>
          <hr />
        </div>
        <VueSlickCarousel v-bind="settings">
          <div v-for="item in special" :key="item.id">
            <router-link :to="`/product/${item.id}`" class="special-work">
              <div class="special-work-img">
                <img :src="item.imageUrl[0]" :alt="item.title" />
              </div>
              <!-- <div class="text-center"> -->
              <p>{{ item.title }}</p>
              <div class="special-work-price">
                <div
                  class="prod-origin-price"
                  v-if="item.origin_price === item.price"
                >
                  {{ item.origin_price | currency }}
                </div>
                <span v-else>
                  <div class="prod-origin-price old-price">
                    {{ item.origin_price | currency }}
                  </div>
                  <div class="prod-price">
                    <h2>{{ item.price | currency }}</h2>
                  </div>
                </span>
              </div>
              <!-- </div> -->
            </router-link>
            <a href="#" class="add-to-cart" @click.prevent="addToCart(item.id)">
              <i class="fa fa-cart-plus"></i>
            </a>
            <a
              href="#"
              class="add-to-favorite"
              @click.prevent="updateFavorite(item.id)"
            >
              <i
                class="fa fa-heart-o"
                v-if="favorited.indexOf(item.id) === -1"
              ></i>
              <i class="fa fa-heart text-danger" v-else></i>
            </a>
          </div>
        </VueSlickCarousel>
      </div>
      <div class="flearfix"></div>
      <div class="cate-area">
        <div class="text-center">
          <h4>作品分類</h4>
          <hr />
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
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import desc from "../../assets/img/bg.jpg";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      desc,
      banner1,
      banner2,
      special: [],
      prods: null,
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || [],
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      }
    };
  },
  created() {
    this.getProds();
  },
  methods: {
    updateFavorite(id) {
      if (this.favorited.indexOf(id) === -1) {
        this.favorited.push(id);
        this.$bus.$emit("message:push", "已加入我的最愛", "info");
      } else {
        this.favorited.splice(this.favorited.indexOf(id), 1);
        this.$bus.$emit("message:push", "已移出我的最愛", "info");
      }
      localStorage.setItem("favoriteList", JSON.stringify(this.favorited));
      this.$bus.$emit("get-favorite-num:favorited", id);
    },
    addToCart(id, qty = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`;
      const cart = {
        product: id,
        quantity: qty
      };

      this.$http
        .post(url, cart)
        .then(res => {
          this.isLoading = false;

          this.$bus.$emit(
            "message:push",
            res.data.data.product.title + "已加入購物車",
            "info"
          );
          this.$bus.$emit("get-cart-num");
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit(
            "message:push",
            err.response.data.errors[0],
            "danger"
          );
        });
    },
    getProds(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          this.special = this.prods.filter(
            item => item.price < item.origin_price
          );
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    toCategory(Name) {
      this.$router.push({
        name: "Works",
        params: { cateName: Name }
      });
    }
  }
};
</script>
