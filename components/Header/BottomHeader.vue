<template>
  <div class="header-bottom">
    <div class="container">
      <div class="row">
        <div
          class="col-sm-12 col-md-3 col-lg-3"
          style="height: 100%;"
        >
          This is dropdown menu
        </div>
        <div
          class="col-sm-12 col-md-6 col-lg-6"
          style="height: 100%;"
        >
          <div class="form-check">
            <input
              type="search"
              placeholder="Nhập từ khóa tìm kiếm ..."
              class="search-input"
            >
            <button
              type="buttom"
              class="submit btn-search"
            ><i
                class="icon-magnifier text-light"
                style="font-weight: 700;"
              ></i>
            </button>
          </div>
        </div>
        <div
          class="col-sm-12 col-md-3 col-lg-3"
          style="height: 100%;"
        >
          <b-navbar>
            <b-navbar-nav>
              <b-nav-item
                class="header-button-1"
                style="margin-right: 10px;"
              ><span>0968.078.124</span></b-nav-item>
              <b-nav-item class="header-button-2"><span>Mua ngay</span></b-nav-item>
            </b-navbar-nav>
          </b-navbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BottomHeader'
}
</script>
<style scoped>
@media screen and (max-width: 768px) {
  .header-bottom {
    display: none;
  }
}
.header-bottom {
  min-height: 50px;
  background-color: #dd3333;
  z-index: 9;
  position: relative;
  padding-top: 5px;
}
.search-input {
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 90%;
  width: 90%;
  vertical-align: middle;
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
  max-width: 10%;
  width: 10%;
  margin: 0px;
  height: 40px;
  width: 40px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  background-color: #f79c3a;
  border-color: rgba(0, 0, 0, 0.05);
}
.btn-search:hover,
.header-button-1 > a:hover {
  outline: none;
  opacity: 1;
  color: #fff;
  box-shadow: inset 0 0 0 100px rgba(0, 0, 0, 0.2);
}
.header-button-1 > a {
  position: relative;
  display: inline-block;
  border-radius: 3px;
  background-color: #f79c3a;
  color: #fff;
  border-color: rgba(0, 0, 0, 0.05);
  text-transform: uppercase;
  font-size: 0.9em;
  letter-spacing: 0.03em;
  touch-action: none;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  border: 1px solid transparent;
  vertical-align: middle;
  text-shadow: none;
  line-height: 2.4em;
  min-height: 2.5em;
  padding: 0 1.2em;
  max-width: 100%;
  transition: transform 0.3s, border 0.3s, background 0.3s, box-shadow 0.3s,
    opacity 0.3s, color 0.3s;
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  margin: 0;
}
.header-button-2 > a {
  font-size: 0.9em;
  letter-spacing: 0.03em;
  touch-action: none;
  cursor: pointer;
  font-weight: bolder;
  text-align: center;
  text-decoration: none;
  min-height: 2.5em;
  border-radius: 4px;
  border: 2px solid currentColor;
  background-color: transparent;
  width: 100%;
  height: 35px;
}
.navbar-nav {
  margin-top: -8px;
}
.navbar-light .navbar-nav .nav-link {
  color: #fff;
}
.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
  color: #fff;
}
</style>
