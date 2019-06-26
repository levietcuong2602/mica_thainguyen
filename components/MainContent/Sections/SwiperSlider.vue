<template>
  <no-ssr>
    <swiper :options="swiperOption">
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
      </swiper-slide>
      <swiper-slide>
        <SwiperItem></SwiperItem>
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
  </no-ssr>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import SwiperItem from './SwiperItem';
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 20,
        freeMode: true,
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    SwiperItem
  }
}
</script>
<style scoped>
.swiper-slide {
  width: 60%;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
.swiper-container {
  /* height: 100%; */
  width: 100%;
}
.swiper-slide {
  text-align: center;
  /* height: 100%; */
  font-weight: 700;
  background-color: rgb(255, 255, 255);
  padding-bottom: 10px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.swiper-button-next,
.swiper-button-prev {
  /* display: none; */
  background: #dd3333;
  padding: 2px;
  box-shadow: 2px 2px 10px grey;
  color: #dd3333;
  border: none;
  cursor: pointer;
  width: 36px;
  border-radius: 100%;
  height: 36px;
}
/* .swiper-button-next:hover,
.swiper-button-prev:hover,
.swiper-button-next:active,
.swiper-button-prev:active {
  display: inline-block;
  background: #dd3333;
} */
</style>
