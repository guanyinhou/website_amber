<template>
  <div class="about">
    <div class="container">
      <h1>關於藝術家</h1>
      <hr />
      <br />
      <div class="row">
        <div class="col-md-6">
          <p>
            嗨，您好！我叫Amber，我是一位熱情的畫家，並且從事軟體工程師的專職工作。
          </p>
          <p>
            年輕的時候，我就對藝術充滿熱情，但是從未去過正規的藝術學校或是以藝術為職志。相反地，我主修電子工程並獲得了軟體工程的工作。直到三年前，我決定順從我的熱情，開始學習油畫！這是我非常喜歡的東西，也是我放鬆的最佳方式！
          </p>
          <p>
            我幾乎在任何地方都能找到靈感，在美麗的台灣島嶼生活可以提供無限的題材！您在我的作品集中看到的風景和海景畫的靈感來自我周圍的自然生態。我會盡可能地用擅長的外光描繪，戶外繪畫對我來說是一個探索和嘗試的機會。
          </p>
          <p>
            這裡是一種分享我的畫作的方式，非常感謝您對我的藝術感興趣！
          </p>
        </div>
        <div class="col-md-6">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleFade"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleFade" data-slide-to="1"></li>
              <li data-target="#carouselExampleFade" data-slide-to="2"></li>
              <li data-target="#carouselExampleFade" data-slide-to="3"></li>
              <li data-target="#carouselExampleFade" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div
                class="carousel-item active"
                :style="{
                  backgroundImage: 'url(' + slider01 + ')'
                }"
              >
                <!-- <img src="../../assets/img/slider/slider01.jpg" class="d-block w-100" alt="..."> -->
                <div class="carousel-caption">
                  <div class="carousel-content">
                    <h5>在家鄉寫生</h5>
                  </div>
                </div>
              </div>
              <div
                class="carousel-item"
                :style="{
                  backgroundImage: 'url(' + slider02 + ')'
                }"
              >
                <div class="carousel-caption">
                  <div class="carousel-content">
                    <h5>我的寫生畫具</h5>
                  </div>
                </div>
              </div>
              <div
                class="carousel-item"
                :style="{
                  backgroundImage: 'url(' + slider03 + ')'
                }"
              >
                <div class="carousel-caption">
                  <div class="carousel-content">
                    <h5>我的寫生畫具</h5>
                  </div>
                </div>
              </div>
              <div
                class="carousel-item"
                :style="{
                  backgroundImage: 'url(' + slider04 + ')'
                }"
              >
                <div class="carousel-caption">
                  <div class="carousel-content">
                    <h5>在家鄉寫生</h5>
                  </div>
                </div>
              </div>
              <div
                class="carousel-item"
                :style="{
                  backgroundImage: 'url(' + slider05 + ')'
                }"
              >
                <div class="carousel-caption">
                  <div class="carousel-content">
                    <h5>我的靜物畫牆</h5>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleFade"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleFade"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import slider01 from "../../assets/img/about/about01.jpg";
import slider02 from "../../assets/img/about/about02.jpg";
import slider03 from "../../assets/img/about/about03.jpg";
import slider04 from "../../assets/img/about/about04.jpg";
import slider05 from "../../assets/img/about/about05.jpg";
export default {
  data() {
    return {
      slider01,
      slider02,
      slider03,
      slider04,
      slider05
    };
  }
};
</script>
