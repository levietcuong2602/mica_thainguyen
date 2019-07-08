<template>
  <ul
    id="mega_menu"
    class="menu active"
  >
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
