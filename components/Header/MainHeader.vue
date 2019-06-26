<template>
  <div class="header-main">
    <div class="container">
      <div class="row">
        <b-navbar
          toggleable="lg"
          type="dark"
          variant="light"
          style="width: 100%; min-height: 90px;"
        >
          <b-navbar-toggle
            class="navbar-toggler"
            target="nav-collapse"
          ></b-navbar-toggle>
          <b-navbar-brand
            href="#"
            class="text-center"
          >
            <img
              src="@/static/img/LOGO1.png"
              alt="logo"
              class="logo d-inline-block align-top"
            >
          </b-navbar-brand>

          <b-collapse
            id="nav-collapse"
            is-nav
          >
            <b-navbar-nav>
              <b-nav-item href="/">Trang chủ</b-nav-item>
              <b-nav-item href="/introduction">Giới thiệu</b-nav-item>
              <b-nav-item href="/products">Sản phẩm</b-nav-item>
              <b-nav-item href="/services">Dịch vụ</b-nav-item>
              <b-nav-item href="/news">Tin tức</b-nav-item>
              <b-nav-item href="/contacts">Liên hệ</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <b-nav-item href="#">Đăng nhập</b-nav-item>
              <b-nav-item href="#">Giỏ hàng
                <i class="icon-handbag"></i>
              </b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainHeader'
}
</script>
<style scoped>
.header-main {
  min-height: 90px;
  background-color: #f8f9fa !important;
  padding: 0;
  margin: 0;
}
.logo {
  padding: 11px 0;
  width: 200px;
  font-weight: 700;
}

.navbar-nav > .nav-item > a {
  color: #0a0a0a;
  font-weight: 700;
}
.navbar-nav > .nav-item > a:hover,
.navbar-nav > .nav-item > a:focus,
.navbar-nav > .nav-item > a:active {
  color: #dd3333;
}
.navbar-dark .navbar-nav .show > .nav-link,
.navbar-dark .navbar-nav .active > .nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
  color: #dd3333;
}
</style>

