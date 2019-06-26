<template>
  <div>
    <div class="asidebar">
      <div class="title">
        <span>Bài viết mới</span>
      </div>
      <ul class="post-content">
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <hr v-if="post !== posts[0]">
          <a href="#">{{ post.title }}</a>
        </li>
      </ul>
    </div>
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
    <FeatureBox />
  </div>
</template>
<script>
import FeatureBox from './FeatureBox';

import { posts } from '@/data/post';
import { newProduct } from '@/data/new-product';

export default {
  name: 'Asidebar',
  components: {
    FeatureBox
  },
  data() {
    return {
      posts,
      newProducts: newProduct,
    }
  }
}
</script>
