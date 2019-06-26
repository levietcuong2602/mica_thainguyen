<template>
  <div class="top-header">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-6">
          <b-nav>
            <b-nav-item
              style="color: #333333"
              disabled
            >Chào mừng bạn đến với mẫu web bán Mica của Topweb</b-nav-item>
          </b-nav>
        </div>
        <div class="col-sm-12 col-md-6 col-lg-6 float-right">
          <b-nav style="justify-content: flex-end;">
            <b-nav-item href="#">Huong dan thanh toan</b-nav-item>
            <b-nav-item href="#">Dang ky dai ly</b-nav-item>
            <b-nav-item>
              <i class="icon-social-facebook black"></i>
              <i class="icon-social-instagram"></i>
              <i class="icon-social-twitter"></i>
              <i class="icon-envelope"></i>
            </b-nav-item>
          </b-nav>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopHeader'
}
</script>
<style scoped>
.top-header {
  background-color: #efefef;
  min-height: 30px;
  align-items: center;
  padding: 0;
  margin: 0;
}
.nav > .nav-item {
  font-size: 0.75em;
  font-family: "-apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, Oxygen-Sans, Ubuntu, Cantarell, &quot;Helvetica Neue&quot;, sans-serif",
    sans-serif;
}
.nav > .nav-item > a {
  color: #6c757d;
}
.nav > .nav-item > a:hover {
  color: rgba(17, 17, 17, 0.85);
}
</style>
