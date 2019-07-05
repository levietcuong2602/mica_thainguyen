<template>
  <div
    class="zap-slideout"
    :class="[{'isOpen': getIsOpenSideout} ]"
  >
    <div
      class="zap-slideout-opener"
      @click="toggle"
      :class="[{'isOpen': getIsOpenSideout} ]"
    >
      <button
        class="header--btn"
        key="off"
      >
        <svg
          viewBox="0 0 24 24"
          style="width: 1.4rem; height: 1.4rem; padding: 0;"
        >
          <title>Close</title>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
    <ul class="zap-slideout-menu">
      <li class="search-form">
        <div class="top-search">
          <form>
            <input
              type="search"
              placeholder="Nhập từ khóa bạn muốn tìm kiếm"
              class="search-input"
            >
            <button
              type="buttom"
              class="submit btn-search"
            ><i class="fa fa-search"></i>
            </button>
          </form>
        </div>
      </li>
      <li
        class="zap-slideout-menu-item"
        v-for="item in menu"
        :key="item.title"
        @click="close"
      >
        <a :href="item.url">{{ item.title }}</a>
      </li>
      <!-- <li
        class="zap-slideout-menu-item--small"
        v-for="item in smallMenu"
        :key="item"
      >{{item}}</li> -->
    </ul>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name: 'SlideoutMenu',
  data: () => ({
    openerText: 'Open',
    menu: [
      {
        url: '/',
        title: 'Trang chủ'
      },
      {
        url: '/introduction',
        title: 'Giới thiệu'
      },
      {
        url: '/products',
        title: 'Sản phẩm'
      },
      {
        url: '/services',
        title: 'Dịch vụ'
      },
      {
        url: '/news',
        title: 'Tin tức'
      },
      {
        url: '/contacts',
        title: 'Liên hệ'
      },
      {
        url: '/login',
        title: 'Đăng nhập'
      }],
  }),
  computed: {
    ...mapGetters(['getIsOpenSideout'])
  },
  methods: {
    open() {
      this.openerText = 'Close';
      this.$store.dispatch('updateIsOpenSideout', true);
    },
    close() {
      this.openerText = 'Open';
      this.$store.dispatch('updateIsOpenSideout', false);
    },
    toggle() {
      if (this.getIsOpenSideout) {
        this.close();
      } else {
        this.open();
      }
    }
  },
}
</script>
<style scoped>
ul li {
  list-style: none;
}
</style>

