<template>
  <ul
    id="mega_menu"
    class="menu active"
  >
    <li
      id="menu-item-27"
      class="topmenu menu-item-has-children menu-item-27 has-child"
      aria-expanded="false"
    >
      <a href="/danh-muc/vat-tu-mica/">Vật tư Mica</a>
      <button class="toggle"><i class="icon-angle-down"></i></button>
      <ul
        class="sub-menu"
        style="margin-top: 0px;"
      >
        <li
          id="menu-item-517"
          class="topmenu menu-item-517"
        ><a href="#">Mica Malayxia</a></li>
        <li
          id="menu-item-518"
          class="topmenu menu-item-518"
        ><a href="#">Mica Nhật Bản</a></li>
        <li
          id="menu-item-519"
          class="topmenu menu-item-519"
        ><a href="#">Mica Đài Loan</a></li>
      </ul>
    </li>
    <li
      id="menu-item-28"
      class="topmenu menu-item-has-children menu-item-28 has-child"
      aria-expanded="false"
    >
      <a href="/danh-muc/ke-menu-mica/">Kệ menu Mica</a>
      <button class="toggle"><i class="icon-angle-down"></i></button>
      <ul
        class="sub-menu"
        style="margin-top: -37px;"
      >
        <li
          id="menu-item-524"
          class="topmenu menu-item-524"
        ><a href="#">Kệ menu đế chữ V</a></li>
        <li
          id="menu-item-525"
          class="topmenu menu-item-525"
        ><a href="#">Kệ menu 3 mặt</a></li>
        <li
          id="menu-item-523"
          class="topmenu menu-item-523"
        ><a href="#">Kệ menu để bàn chữ T</a></li>
        <li
          id="menu-item-522"
          class="topmenu menu-item-522"
        ><a href="#">Kệ menu để bàn chữ T</a></li>
        <li
          id="menu-item-521"
          class="topmenu menu-item-521"
        ><a href="#">Kệ tam giác đế rời</a></li>
        <li
          id="menu-item-520"
          class="topmenu menu-item-520"
        ><a href="#">Kệ tam giác đế liền</a></li>
      </ul>
    </li>
    <li
      id="menu-item-29"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-29"
    ><a href="/danh-muc/ke-to-roi-mica/">Kệ tờ rơi Mica</a></li>
    <li
      id="menu-item-30"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"
    ><a href="/danh-muc/ke-trung-bay-san-pham/">Kệ trưng bày sản phẩm</a></li>
    <li
      id="menu-item-31"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
    ><a href="/danh-muc/hop-mica/">Hộp Mica</a></li>
    <li
      id="menu-item-32"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
    ><a href="/danh-muc/qua-tang-mica/">Quà tặng Mica</a></li>
    <li
      id="menu-item-33"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-33"
    ><a href="/danh-muc/ke-chuc-danh-mica/">Kệ chức danh Mica</a></li>
    <li
      id="menu-item-34"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-34"
    ><a href="/danh-muc/buc-phat-bieu-mica/">Bục phát biểu Mica</a></li>
    <li
      id="menu-item-35"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-35"
    ><a href="/danh-muc/khung-anh-mica/">Khung ảnh Mica</a></li>
    <li
      id="menu-item-36"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"
    ><a href="/danh-muc/de-lich-ban-mica/">Đế lịch bàn Mica</a></li>
    <li
      id="menu-item-37"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"
    ><a href="/danh-muc/tranh-dien-mica/">Tranh điện Mica</a></li>
    <li
      id="menu-item-38"
      class="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"
    ><a href="/danh-muc/san-pham-mica-khac/">Sản phẩm khác</a></li>
  </ul>
</template>
<script>
import { menu } from '@/data/category-product';

import TreeItem from './TreeItem';
import TreeFolder from './TreeFolder';

export default {
  name: 'CategoryItem',
  data() {
    return {
      menu
    }
  },
  components: {
    TreeItem,
    TreeFolder
  }
}
</script>
<style scoped>
</style>
