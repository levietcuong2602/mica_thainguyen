<template>
  <ul
    id="mega_menu"
    class="menu active"
  >
    <!-- <li
      id="menu-item-27"
      class="top-menu"
      aria-expanded="false"
    >

      <a href="/danh-muc/vat-tu-mica/">Vật tư Mica</a>
      <i class="fas fa-chevron-right"></i>
      <ul class="sub-menu">
        <li
          id="menu-item-517"
          class="top-menu menu-item-517"
        ><a href="#">Mica Malayxia</a></li>
        <li
          id="menu-item-518"
          class="top-menu menu-item-518"
        ><a href="#">Mica Nhật Bản</a></li>
        <li
          id="menu-item-519"
          class="top-menu menu-item-519"
        ><a href="#">Mica Đài Loan</a></li>
      </ul>
    </li>
    <li
      id="menu-item-29"
      class="top-menu menu-item-29"
    >
      <a href="/danh-muc/ke-to-roi-mica/">Kệ tờ rơi Mica</a>
    </li>
    <li
      id="menu-item-30"
      class="top-menu menu-item-30"
    > <a href="/danh-muc/ke-trung-bay-san-pham/">Kệ trưng bày sản phẩm</a></li>
    <li
      id="menu-item-31"
      class="top-menu menu-item-31"
    > <a href="/danh-muc/hop-mica/">Hộp Mica</a></li>
    <li
      id="menu-item-28"
      class="top-menu"
      aria-expanded="false"
    >

      <a href="/danh-muc/ke-menu-mica/">Kệ menu Mica</a>
      <i class="fas fa-chevron-right"></i>
      <ul class="sub-menu">
        <li
          id="menu-item-524"
          class=" top-menu menu-item-524"
        ><a href="#">Kệ menu đế chữ V</a></li>
        <li
          id="menu-item-525"
          class=" top-menu menu-item-525"
        ><a href="#">Kệ menu 3 mặt</a></li>
        <li
          id="menu-item-523"
          class=" top-menu menu-item-523"
        ><a href="#">Kệ menu để bàn chữ T</a></li>
        <li
          id="menu-item-522"
          class=" top-menu menu-item-522"
        ><a href="#">Kệ menu để bàn chữ T</a></li>
        <li
          id="menu-item-521"
          class=" top-menu menu-item-521"
        ><a href="#">Kệ tam giác đế rời</a></li>
        <li
          id="menu-item-520"
          class=" top-menu menu-item-520"
        ><a href="#">Kệ tam giác đế liền</a></li>
      </ul>
    </li>
    <li
      id="menu-item-32"
      class="top-menu menu-item-32"
    > <a href="/danh-muc/qua-tang-mica/">Quà tặng Mica</a></li>
    <li
      id="menu-item-33"
      class="top-menu menu-item-33"
    > <a href="/danh-muc/ke-chuc-danh-mica/">Kệ chức danh Mica</a></li>
    <li
      id="menu-item-34"
      class="top-menu menu-item-34"
    > <a href="/danh-muc/buc-phat-bieu-mica/">Bục phát biểu Mica</a></li>
    <li
      id="menu-item-35"
      class="top-menu menu-item-35"
    > <a href="/danh-muc/khung-anh-mica/">Khung ảnh Mica</a></li>
    <li
      id="menu-item-36"
      class="top-menu menu-item-36"
    > <a href="/danh-muc/de-lich-ban-mica/">Đế lịch bàn Mica</a></li>
    <li
      id="menu-item-37"
      class="top-menu menu-item-37"
    > <a href="/danh-muc/tranh-dien-mica/">Tranh điện Mica</a></li>
    <li
      id="menu-item-38"
      class="top-menu menu-item-38"
    > <a href="/danh-muc/san-pham-mica-khac/">Sản phẩm khác</a></li> -->
    <li
      class="top-menu"
      aria-expanded="false"
      v-for="menuItem in menuItems"
      :key="menuItem.id"
    >
      <a href="#">{{ menuItem.title }}</a>
      <i
        class="fas fa-chevron-right"
        v-if="menuItem.children"
      ></i>
      <ul
        v-if="menuItem.children"
        class="sub-menu"
      >
        <li
          class="top-menu"
          v-for="item in menuItem.children"
          :key="item.id"
        >
          <a href="#">{{ item.title }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
import { menu } from '@/data/category-product';

export default {
  name: 'TreeMenu',
  data() {
    return {
      menuItems: menu
    }
  },
}
</script>
<style scoped>
li {
  list-style: none;
  margin-bottom: 0.3em;
  text-align: left;
  margin: 0;
}

#mega_menu {
  position: relative;
}

#mega_menu li {
  border-bottom: 1px solid lightgrey;
  padding: 5px;
}

#mega_menu > li {
  background: url(/img/icon-menu.png) no-repeat 2px 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

#mega_menu li a {
  text-decoration: none;
  color: #000;
  padding-left: 20px;
  flex-grow: 1;
}

#mega_menu li a:hover {
  color: #dd3333;
}

#mega_menu li > ul.sub-menu {
  position: absolute;
  top: -1px;
  left: 100%;
  background: #fff;
  height: auto;
  min-height: 200px;
  padding: 0;
  border: 1px solid #ccc;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  margin: 0px;
  width: 200px;
}

#mega_menu .top-menu > ul.sub-menu {
  display: none;
}

#mega_menu .top-menu:hover > .sub-menu {
  display: block;
}
</style>
