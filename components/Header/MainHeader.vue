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
<style scoped>
.header-main {
  background-color: #fff;
}

.top-logo {
  text-align: center;
}

.top-logo img {
  width: 70%;
}

.search-wrap {
  display: flex;
  align-items: center;
}

.top-search {
  width: 100%;
}
.search-input {
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  font-size: 0.85em;
  border-radius: 0;
  max-width: 90%;
  width: 90%;
  background-color: #fff;
  color: #333;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
  height: 40px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.btn-search {
  position: absolute;
  height: 40px;
  width: 40px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #f79c3a;
  border-color: rgba(0, 0, 0, 0.05);
  color: #fff;
}
.btn-search:hover {
  outline: none;
  opacity: 1;
  color: #fff;
  box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.2);
}
.top-cart {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.link-wishlist a {
  font-size: 90%;
  font-weight: 500;
  color: #0a0a0a;
  text-decoration: none;
}
.link-wishlist a:hover {
  color: #dc3545;
}
</style>
