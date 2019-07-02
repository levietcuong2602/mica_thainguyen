export const swiperOptions = {
  data() {
    return {
      swiperOptions: {
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
  }
}
