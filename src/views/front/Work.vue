<template>
  <div class="work" v-if="work !== undefined && work">
    <loading :active.sync="isLoading"></loading>
    <div class="container">
      <div class="text-center">
        <h1>{{ work.title }}</h1>
      </div>
      <hr />
      <div class="prod-zone">
        <div class="row">
          <div class="col-md-6">
            <VueSlickCarousel
              ref="c1"
              :asNavFor="$refs.c2"
              :focusOnSelect="true"
            >
              <div v-for="(item, idx) in 5" :key="idx">
                <div class="prod-img">
                  <img :src="work.imageUrl[idx]" :alt="idx" />
                </div>
              </div>
            </VueSlickCarousel>
            <VueSlickCarousel
              ref="c2"
              :asNavFor="$refs.c1"
              :slidesToShow="4"
              :focusOnSelect="true"
            >
              <div v-for="(item, idx) in 5" :key="idx">
                <div class="prod-img-small">
                  <img :src="work.imageUrl[idx]" :alt="idx" />
                </div>
              </div>
            </VueSlickCarousel>
            <!-- <div class="prod-img" v-for="(item, idx) in 5" :key="idx">
                <img :src="work.imageUrl[idx]" />
              </div> -->
          </div>
          <div class="col-md-5 offset-md-1">
            <div class="prod-content">
              <div class="sub-title">作品材質</div>
              <p>{{ work.description }}</p>
            </div>
            <div class="prod-content">
              <div class="sub-title">價格</div>
              <div
                class="prod-origin-price"
                v-if="work.origin_price === work.price"
              >
                售價 {{ work.origin_price | currency }}
              </div>
              <span v-else>
                <div class="prod-origin-price old-price">
                  售價 {{ work.origin_price | currency }}
                </div>
                <div class="prod-price">
                  <h2>特價 {{ work.price | currency }}</h2>
                </div>
              </span>
            </div>
            <div class="add-to-cart-zone">
              <button class="btn" @click="addToCart(work.id)" type="button">
                <i class="fa fa-cart-plus"></i> 加入購物車
              </button>
              <button
                class="btn"
                @click="updateFavorite(work.id)"
                v-if="favorited.indexOf(work.id) === -1"
                type="button"
              >
                <i class="fa fa-heart-o"></i> 加入我的最愛
              </button>
              <button
                class="btn"
                @click="updateFavorite(work.id)"
                v-else
                type="button"
              >
                <i class="fa fa-heart text-danger"></i> 已加入我的最愛
              </button>
            </div>
          </div>
        </div>
        <div class="prod-content">
          <div class="sub-title">作品介紹</div>
          <div v-html="work.content"></div>
        </div>
        <div
          class="prod-content"
          v-if="viewedProds !== undefined && viewedProds.length > 0"
        >
          <div class="sub-title">瀏覽紀錄：</div>
          <VueSlickCarousel v-bind="settings1">
            <div v-for="viewedProd in viewedProds" :key="viewedProd.id">
              <router-link class="more-work" :to="`/product/${viewedProd.id}`">
                <div class="more-work-img">
                  <img :src="viewedProd.imageUrl[0]" :alt="viewedProd.title" />
                </div>
                <p>{{ viewedProd.title }}</p>
                <div class="more-work-price">
                  <div
                    class="prod-origin-price"
                    v-if="viewedProd.origin_price === viewedProd.price"
                  >
                    {{ viewedProd.origin_price | currency }}
                  </div>
                  <span v-else>
                    <div class="prod-origin-price old-price">
                      {{ viewedProd.origin_price | currency }}
                    </div>
                    <div class="prod-price">
                      <h2>{{ viewedProd.price | currency }}</h2>
                    </div>
                  </span>
                </div>
              </router-link>
              <a
                href="#"
                class="add-to-cart"
                @click.prevent="addToCart(viewedProd.id)"
              >
                <i class="fa fa-cart-plus"></i>
              </a>
              <a
                href="#"
                class="add-to-favorite"
                @click.prevent="updateFavorite(viewedProd.id)"
              >
                <i
                  class="fa fa-heart-o"
                  v-if="favorited.indexOf(viewedProd.id) === -1"
                ></i>
                <i class="fa fa-heart text-danger" v-else></i>
              </a>
            </div>
          </VueSlickCarousel>
        </div>
        <div
          class="prod-content more-works"
          v-if="moreworks !== undefined && moreworks.length > 0"
        >
          <div class="sub-title">更多{{ work.category }}畫作品：</div>
          <VueSlickCarousel v-bind="settings1">
            <div v-for="morework in moreworks" :key="morework.id">
              <!-- <router-link :to="`/product/${prod.id}`"> -->
              <router-link :to="`/product/${morework.id}`" class="more-work">
                <div class="more-work-img">
                  <img :src="morework.imageUrl[0]" :alt="morework.title" />
                </div>
                <p>{{ morework.title }}</p>
                <div class="more-work-price">
                  <div
                    class="prod-origin-price"
                    v-if="morework.origin_price === morework.price"
                  >
                    {{ morework.origin_price | currency }}
                  </div>
                  <span v-else>
                    <div class="prod-origin-price old-price">
                      {{ morework.origin_price | currency }}
                    </div>
                    <div class="prod-price">
                      <h2>{{ morework.price | currency }}</h2>
                    </div>
                  </span>
                </div>
              </router-link>
              <a
                href="#"
                class="add-to-cart"
                @click.prevent="addToCart(moreworks.id)"
              >
                <i class="fa fa-cart-plus"></i>
              </a>
              <a
                href="#"
                class="add-to-favorite"
                @click.prevent="updateFavorite(moreworks.id)"
              >
                <i
                  class="fa fa-heart-o"
                  v-if="favorited.indexOf(moreworks.id) === -1"
                ></i>
                <i class="fa fa-heart text-danger" v-else></i>
              </a>
            </div>
          </VueSlickCarousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  components: {
    VueSlickCarousel
  },
  data() {
    return {
      settings1: {
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
      },
      work: {
        imageUrl: []
      },
      prods: [],
      moreworks: [],
      viewedProds: [],
      viewed: JSON.parse(localStorage.getItem("viewedList")) || [],
      favorited: JSON.parse(localStorage.getItem("favoriteList")) || [],
      isLoading: false
    };
  },
  created() {
    this.getWork();
    this.getViewed();
    this.getMoreworks();
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
    getWork() {
      const id = this.$route.params.id;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/product/${id}`;
      this.isLoading = true;
      this.$http.get(url).then(res => {
        this.isLoading = false;
        this.work = res.data.data;
      });
    },
    getMoreworks() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          // 相關作品
          this.moreworks = this.prods.filter(
            item =>
              item.category === this.work.category && item.id !== this.work.id
          );
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
    },
    getViewed() {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/products?paged=40`;
      this.$http
        .get(url)
        .then(res => {
          this.isLoading = false;
          this.prods = res.data.data;
          // 瀏覽紀錄
          const viewedId = this.$route.params.id;
          if (this.viewed.indexOf(viewedId) === -1) {
            this.viewed.push(viewedId);
          } else {
            this.viewed.splice(this.viewed.indexOf(viewedId));
          }
          localStorage.setItem("viewedList", JSON.stringify(this.viewed));
          this.viewedProds = this.prods.filter(
            item => this.viewed.indexOf(item.id) > -1
          );
        })
        .catch(err => {
          this.isLoading = false;
          this.$bus.$emit("message:push", err.response.data.message, "danger");
        });
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
    }
  }
};
</script>
