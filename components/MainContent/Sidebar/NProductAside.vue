<template>
  <div class="asidebar">
    <div class="title">
      <span>SẢN PHẨM MỚI</span>
    </div>
    <ul class="product-content">
      <li
        v-for="newProduct in newProducts"
        :key="newProduct.id"
      >
        <hr v-if="newProduct !== newProducts[0]">
        <div class="row">
          <div class="col-lg-4 col-md-5 col-sm-4 col-4">
            <img
              :src="newProduct.img"
              alt="images title"
              class="img-product"
            >
          </div>
          <div class="col-lg-8 col-md-7 col-sm-8 col-8">
            <a href="#">{{ newProduct.name }}</a>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { newProduct } from '@/data/new-product';
export default {
  name: 'NProductAside',
  data() {
    return {
      newProducts: newProduct,
    }
  }
}
</script>
