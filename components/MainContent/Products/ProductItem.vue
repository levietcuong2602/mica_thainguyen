<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
    <!-- <el-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="image"
      >
      <div style="padding: 14px;">
        <span>Yummy hamburger</span>
        <div class="bottom clearfix">
          <el-button
            type="button"
            class="button"
          >Operating</el-button>
        </div>
      </div>
    </!-->
    <a href="/products/detail/1">
      <div class="product-item mt-3">
        <div class="card-top">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
            style="width: 100%; height: 100%;"
          >
        </div>
        <div class="card-main">
          <p>Hộp mica kỹ thuật HMKT-3110</p>
        </div>
        <div class="card-bottom">
          <a href="#">Đọc tiếp</a>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ProductItem'
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.product-item .card-main p {
  font-weight: 600;
}
</style>

