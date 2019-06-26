<template>
  <div class="container">
    <div class="row mt-3">
      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
        <div class="asidebar">
          <div class="title"><span>DANH MỤC SẢN PHẨM</span></div>
          <ul class="category-product">
            <li
              v-for="category in categories"
              :key="category.title"
            >
              <hr v-if="category !== categories[0]">
              <div
                class="product-item d-flex"
                style="justify-content: space-between;"
              >
                <a href="#">{{ category.title }}</a>
                <span>({{ category.count }})</span>
              </div>
            </li>
          </ul>
        </div>
        <FeatureBox />
      </div>
      <div class="col-lg-9 col-md-9 col-sm-6 col-12 product-list">
        <div class="row">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        <div class="row mt-3">
          <el-pagination
            class="product-pagination"
            background
            :pager-count="4"
            layout="prev, pager, next"
            :total="1000"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatureBox from '@/components/MainContent/Sidebar/FeatureBox';
import ProductItem from '@/components/MainContent/Products/ProductItem';

export default {
  name: 'Products',
  components: {
    FeatureBox,
    ProductItem
  },
  data() {
    return {
      categories: [
        {
          title: 'Bục phát biểu Mica',
          count: 0
        },
        {
          title: 'Đế lịch để bàn Mica',
          count: 0
        },
        {
          title: 'Hộp Mica',
          count: 0
        },
        {
          title: 'Kệ chức danh Mica',
          count: 0
        },
        {
          title: 'Kệ rời rơi Mica',
          count: 0
        },
        {
          title: 'Kệ trưng bày sản phẩm Mica',
          count: 0
        },
      ]
    }
  }
}
</script>
<style scoped>
.product-pagination {
  margin: auto;
}
</style>
