<template>
  <swiper :options="swiperOption">
    <swiper-slide
      v-for="brand in brands"
      :key="brand.img"
    >
      <img
        :src="brand.img"
        alt="brand img"
        style="width: auto; height: 100%;"
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
        }
      },
      brands: [
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
        {
          img: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/brand01.jpg',
        },
      ]
    }
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
  height: 70px;
  display: flex;
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
</style>
