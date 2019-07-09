<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="brand in brands"
      :key="brand.id"
    >
      <img
        :src="brand.img"
        alt="brand img"
        style="width: 100%; height: 100%;"
      >
    </swiper-slide>
    <div
      class="swiper-button-prev"
      slot="button-prev"
    ></div>
    <div
      class="swiper-button-next"
      slot="button-next"
    ></div>
  </swiper>
</template>
<script>
import { brands } from '@/data/brand';

export default {
  name: 'BrandSwiper',
  data() {
    return {
      swiperOption: {
        slidesPerView: 6,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1200: {
            slidesPerView: 6,
            spaceBetween: 20
          },
          992: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          576: {
            slidesPerView: 3,
            spaceBetween: 10
          }
        }
      },
      brands
    }
  }
}
</script>
<style scoped>
.swiper-button-next,
.swiper-button-prev {
  /* display: none; */
  /* background: #dd3333; */
  background-repeat: no-repeat;
  background-size: auto;
  padding: 2px;
  box-shadow: 2px 2px 10px grey;
  color: #dd3333;
  border: none;
  cursor: pointer;
  width: 36px;
  border-radius: 100%;
  height: 36px;
}
.swiper-button-prev {
  background-image: url(/img/1.png);
}
.swiper-button-next {
  background-image: url(/img/2.png);
}
</style>
