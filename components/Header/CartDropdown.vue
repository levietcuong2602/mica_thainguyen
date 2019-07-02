<template>
  <b-dropdown
    toggle-class="text-decoration-none"
    variant="none"
    right
    no-caret
    lg
  >
    <template slot="button-content">
      <i class="icon-basket"></i>
      <b-badge
        pill
        variant="info"
        style="position: absolute; top: 35%; left: 20%;"
      >
        5
      </b-badge>
      Giỏ hàng
    </template>
    <div class="dropdown-menu-lg">
      <b-dropdown-header
        tag="div"
        class="text-center"
      >
        <strong>Bạn có 5 sản phẩm trong giỏ hàng</strong>
      </b-dropdown-header>
      <b-dropdown-item href="#">
        <div class="row">
          <div class="col-sm-4 col-12">
            <img
              src="https://mica.thainguyenweb.com/wp-content/uploads/2018/06/hop_20dung_20banh_20sinh_20nhat_20nap_20den_2022cm_grande.jpg"
              alt="image product"
              style="width: 100%;"
            >
          </div>
          <div class="col-sm-8 col-12">
            <h5 style="font-size: 85%;">Hộp Mica Kỹ thuật 2808</h5>
            <p>Giá: <span>60.000 đ</span></p>
          </div>
        </div>
      </b-dropdown-item>
      <b-dropdown-item href="#">Another item</b-dropdown-item>
    </div>
  </b-dropdown>
</template>
<script>
export default {
  name: 'CartDropdown'
}
</script>
<style scoped>
.badge {
  position: absolute;
  top: 35%;
  left: 20%;
  margin-top: -16px;
  margin-left: 0;
}
.btn.dropdown-toggle:hover {
  color: #dc3545;
}
</style>
