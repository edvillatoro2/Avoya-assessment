<template>
  <div>
    <div class="container">
        <Carousel
        :startAutoPlay="false"
        :timeout="5000"
        class="carousel"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info">
            <img :src="require(`../assets/img/slideshow/${slide}.jpg`)" alt="" />
          </div>
        </Slide>
      </Carousel>
      <!-- <Slider class="mb50"/> -->
      <Content class="mb25 mt50" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slide from "../components/Slide.vue";
import Content from '../components/Content.vue'
import Carousel from "../components/Carousel.vue";


export default {
  name: 'Home',
  setup() {
    const carouselSlides = ["01", "02", "03"];
    return { carouselSlides };
  },
  components: {
    Content,
    Carousel,
    Slide,
  }
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  max-height: 100%;
  height: 400px;
  .slide-info {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-height: 100%;
    height: 100%;
    img {
      height:400px;
      width:100%;
      object-fit: cover;
      border: 4px solid white;
      box-shadow: rgba(0, 0, 0, 0.4) 4px 4px 5px;
    }
  }
}
</style>
