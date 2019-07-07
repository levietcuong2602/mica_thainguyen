<template>
  <div class="services">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-3 col-sm-6 col-12">
          <NPostAside />
          <FeatureBox />
          <NProductAside />
        </div>
        <div class="col-md-9 col-sm-6 col-12">
          <div class="post-content">
            <div class="pagination-post">
              <div class="title">
                <span>Danh sách bài viết</span>
              </div>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="50"
              >
              </el-pagination>
            </div>
            <div class="content-post mt-3">
              <div class="row">
                <PostItem
                  v-for="item in 8"
                  :key="item"
                />
              </div>
            </div>
          </div>
          <div class="product-content">
            <div class="pagination-product">
              <div class="title">
                <span>Danh sách sản phẩm</span>
              </div>
              <el-pagination
                background
                layout="prev, pager, next"
                :total="50"
              >
              </el-pagination>
            </div>
            <div class="content-post mt-3">
              <div class="row">
                <ProductItem
                  v-for="item in 8"
                  :key="item"
                />
              </div>
              <!-- <no-ssr>
                <carousel options>
                  <img src="https://placeimg.com/200/200/any?1">
                  <img src="https://placeimg.com/200/200/any?2">
                  <img src="https://placeimg.com/200/200/any?3">
                  <img src="https://placeimg.com/200/200/any?4">
                  <img src="https://placeimg.com/200/200/any?4">
                  <img src="https://placeimg.com/200/200/any?4">
                  <img src="https://placeimg.com/200/200/any?4">
                </carousel>
              </no-ssr> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NPostAside from '@/components/MainContent/Sidebar/NPostAside';
import FeatureBox from '@/components/MainContent/Sidebar/FeatureBox';
import NProductAside from '@/components/MainContent/Sidebar/NProductAside';
import PostItem from '@/components/MainContent/News/PostItem';
import ProductItem from '@/components/MainContent/Products/ProductItem';

let carousel;
if (process.browser) {
  carousel = require('v-owl-carousel');
}
// import carousel from 'v-owl-carousel';

export default {
  name: 'ServicePager',
  components: {
    NPostAside,
    PostItem,
    FeatureBox,
    NProductAside,
    ProductItem,
    carousel
  },
  data() {
    return {
      options: {
        items: 4,
        loop: true,
        margin: 20,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        // responsive: {
        //   0: {
        //     items: 1
        //   },
        //   600: {
        //     items: 3
        //   },
        //   1000: {
        //     items: 3
        //   }
        // }
      }
    }
  }
}
</script>
<style scoped>
.services .pagination-post,
.services .pagination-product {
  background-color: #fff;
  padding: 5px;
  display: flex;
  justify-content: space-between;
}

.services .pagination-post .title,
.services .pagination-product .title {
  padding: 0px 10px;
  background-color: #dd3333;
  color: #fff;
}

.services .pagination-post .title > span,
.services .pagination-product .title > span {
  vertical-align: middle;
  font-size: 110%;
  font-weight: 500;
}
</style>

