<template>
  <no-ssr>
    <swiper :options="swiperOption">
      <swiper-slide
        v-for="product in productList"
        :key="product.id"
      >
        <SwiperItem :product="product"></SwiperItem>
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
      }
    }
  },
  props: {
    productList: {
      type: Array,
      default: () => (
        [{
          id: '10142975',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg',
          thumbnail: ['https://salt.tikicdn.com/cache/64x64/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/74/6b/2e/4352b235cf2e5b58ec760e4f364228bb.jpg'
          ],
          title: 'Điện Thoại Coolpad N3 - Hàng Chính Hãng',
          finalPrice: '1.190.000 ₫',
          priceRegular: '1.790.000 ₫',
          sale: '-34%'
        },
        {
          id: '4818337',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/ts/product/bc/23/09/76d09086ceaa3d0d9905fe56644e9e9e.jpg',
          thumbnail: ['https://salt.tikicdn.com/cache/64x64/ts/product/bc/23/09/76d09086ceaa3d0d9905fe56644e9e9e.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/56/ae/30/b0f177f43ab4d26244945911dbc8d367.jpg'
          ],
          title: 'Điện Thoại Xiaomi Mi 8 Lite (4GB / 64GB) -...',
          finalPrice: '3.950.000 ₫',
          priceRegular: '6.690.000 ₫',
          sale: '-41%'
        },
        {
          id: '1929161',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/ts/product/6e/18/9a/30269b567d78c39b8cc7671f8586628c.jpg',
          thumbnail: ['https://salt.tikicdn.com/cache/64x64/ts/product/6e/18/9a/30269b567d78c39b8cc7671f8586628c.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/8e/69/ac/b9c70cfb544a36eb294877462436d8fe.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/a5/b1/03/60de1319622d3775ed78fa2199dcb317.jpg'
          ],
          title: 'iPad WiFi 32GB New 2018 - Hàng Chính Hãng',
          finalPrice: '6.690.000 ₫',
          priceRegular: '8.990.000 ₫',
          sale: '-26%'
        },
        {
          id: '4538569',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/ts/product/32/b2/d6/cf2bd10d965d2201bba25d14fba84fa9.jpg',
          thumbnail: ['https://salt.tikicdn.com/cache/64x64/ts/product/32/b2/d6/cf2bd10d965d2201bba25d14fba84fa9.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/3a/99/94/76d171d92a3258861b272ba9082d12e2.jpg',
            'https://salt.tikicdn.com/cache/64x64/ts/product/65/af/4a/7e9fbfeb44a9cb39e96a180ba4f1caca.jpg'
          ],
          title: 'Điện Thoại iPhone XS Max 64GB - Hàng Chính...',
          finalPrice: '27.790.000 ₫',
          priceRegular: '33.990.000 ₫',
          sale: '-18%'
        },
        {
          id: '809652',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/media/catalog/product/n/o/nokia_105-color-black.u5395.d20170815.t163304.252918_1.jpg',
          thumbnail: ['https://salt.tikicdn.com/cache/64x64/media/catalog/product/n/o/nokia_105-color-black.u5395.d20170815.t163304.252918_1.jpg',
            'https://salt.tikicdn.com/cache/64x64/media/catalog/product/n/o/nokia_105-color-blue.u5395.d20170815.t164008.346743.jpg',
            'https://salt.tikicdn.com/cache/64x64/media/catalog/product/n/o/nokia_105-color-white.u5395.d20170815.t164044.548463.jpg'
          ],
          title: 'Điện Thoại Nokia 105 Single Sim (2017) -...',
          finalPrice: '327.000 ₫',
          priceRegular: '450.000 ₫',
          sale: '-27%'
        },
        {
          id: '840390',
          idCategory: 'cate_1_1',
          img: 'https://salt.tikicdn.com/cache/200x200/media/catalog/product/1/_/1.u5618.d20170823.t165017.549518.jpg',
          thumbnail: [],
          title: '            Máy Đọc Sách Kindle Paperwhite 2018 (7th) -...            ',
          finalPrice: '2.570.000 ₫',
          priceRegular: '3.390.000 ₫',
          sale: '-24%'
        }]
      )
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
