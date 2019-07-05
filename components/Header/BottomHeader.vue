<template>
  <div>
    <div class="header-bottom">
      <div class="container">
        <div class="row">
          <b-navbar
            toggleable="lg"
            type="dark"
            variant="none"
          >
            <!-- <b-navbar-nav>
            </b-navbar-nav> -->
            <CategoryDropdown />

            <b-navbar-toggle
              target="nav-collapse1"
              @click="showSideoutMenu"
            ></b-navbar-toggle>

            <b-collapse
              id="nav-collapse"
              is-nav
            >
              <b-navbar-nav class="ml-auto">
                <!-- <CategoryDropdown /> -->
                <b-nav-item href="/">TRANG CHỦ</b-nav-item>
                <b-nav-item href="/introduction">GIỚI THIỆU</b-nav-item>
                <b-nav-item href="/products">SẢN PHẨM</b-nav-item>
                <b-nav-item href="/services">DỊCH VỤ</b-nav-item>
                <b-nav-item href="/news">TIN TỨC</b-nav-item>
                <b-nav-item href="/contacts">LIÊN HỆ</b-nav-item>
              </b-navbar-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item
                  class="phone-number"
                  href="#"
                  style="color: #fff"
                >0986.989.626</b-nav-item>
                <b-nav-item
                  class="buy-now"
                  href="#"
                >Mua ngay</b-nav-item>
              </b-navbar-nav>
            </b-collapse>

          </b-navbar>
          <!-- <nav class="navbar navbar-expand-lg navbar-light">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="#"
                  >Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="#"
                  >Link</a>
                </li>
              </ul>
            </div>
          </nav> -->
        </div>
      </div>
    </div>
    <SlideoutMenu />
  </div>
</template>
<script>
// let Slide = {};
// if (process.browser) {
//   Slide = require('vue-burger-menu');
// }
import CategoryDropdown from './CategoryDropdown';
import SlideoutMenu from './SlideoutMenu';
import { mapGetters } from 'vuex';

export default {
  name: 'BottomHeader',
  components: {
    // SlideMenu: Slide,
    CategoryDropdown,
    SlideoutMenu
  },
  computed: {
    ...mapGetters(['getIsOpenSideout'])
  },
  methods: {
    showSideoutMenu() {
      const isOpen = this.getIsOpenSideout;
      this.$store.dispatch('updateIsOpenSideout', !isOpen);
    }
  }
}
</script>
<style scoped>
.header-bottom {
  background-color: #dd3333;
}
.navbar {
  width: 100%;
  padding: 0 1rem;
  min-height: 50px;
}
.navbar-nav .nav-item {
  font-size: 90%;
  font-weight: 500;
}
.nav-item.phone-number {
  background-color: #f79c3a;
  border-radius: 3px;
  color: #fff;
  margin-right: 10px;
}
.nav-item.buy-now {
  border: 2px solid #fff;
  border-radius: 3px;
}
.navbar-nav .nav-item a {
  color: #000;
}
</style>
