<template>
  <div class="header-main">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-sm-3 col-12">
          <div class="top-logo">
            <a
              class="e-commerce"
              href="/"
            >
              <img
                src="~/static/img/LOGO1.png"
                alt="logo"
              >
            </a>
          </div>
        </div>
        <div class="col-md-6 col-sm-5 col-12 search-wrap">
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
        </div>
        <div class="col-md-3 col-sm-4 col-12 top-cart">
          <div class="link-wishlist">
            <a href="#"><i class="icon-heart icons"></i><span> Yêu thích</span></a>
          </div>
          <div class="top-cart-container">
            <CartDropdown />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CartDropdown from './CartDropdown';

export default {
  name: 'MainHeader',
  components: {
    CartDropdown
  }
}
</script>
