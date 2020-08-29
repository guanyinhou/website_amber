<template>
  <router-link class="home" to="/about">
    <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
      <!-- <ol class="carousel-indicators">
        <li data-target="#carouselExampleFade" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleFade" data-slide-to="1"></li>
      </ol> -->
      <div class="carousel-inner">
        <div class="carousel-item cover active">
          <!-- <img src="../../assets/img/slider/slider01.jpg" class="d-block w-100" alt="..."> -->
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-content">
              <h1>The ART of AMBER WU</h1>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{backgroundImage: 'url('+slider01+')'}">
          <!-- <img src="../../assets/img/slider/slider01.jpg" class="d-block w-100" alt="..."> -->
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-content">
              <h3>河景</h3>
              <h4>River</h4>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{backgroundImage: 'url('+slider02+')'}">
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-content">
              <h3>漁港風光</h3>
              <h4>Fish Boats</h4>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{backgroundImage: 'url('+slider03+')'}">
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-content">
              <h3>日落風光</h3>
              <h4>Sunset</h4>
            </div>
          </div>
        </div>
        <div class="carousel-item" :style="{backgroundImage: 'url('+slider04+')'}">
          <div class="carousel-caption d-none d-md-block">
            <div class="carousel-content">
              <h3>海岸 2</h3>
              <h4>Seashore 2</h4>
            </div>
          </div>
        </div>
      </div>
      <!-- <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>
  </router-link>
</template>

<script>
/* global $ */
import slider01 from "../../assets/img/slider/slider01.jpg";
import slider02 from "../../assets/img/slider/slider02.jpg";
import slider03 from "../../assets/img/slider/slider03.jpg";
import slider04 from "../../assets/img/slider/slider04.jpg";
export default {
  data() {
    return {
      slider01,
      slider02,
      slider03,
      slider04
    }
  },
  mounted() {
    $(".carousel").carousel({
      interval: 5000
    })
  }
}
</script>
