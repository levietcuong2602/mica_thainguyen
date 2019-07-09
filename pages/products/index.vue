<template>
  <div>
    <div class="page-title">
      <div class="container">
        <div class="order-by">
          <p>Xem tất cả 18 kết quả</p>
          <b-form>
            <b-form-select
              v-model="selected"
              :options="options"
            ></b-form-select>
          </b-form>
        </div>
      </div>
    </div>
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
            <ProductItem
              v-for="product in products"
              :key="product.id"
              :product="product"
            />
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
  </div>
</template>
<script>
import FeatureBox from '@/components/MainContent/Sidebar/FeatureBox';
import ProductItem from '@/components/MainContent/Products/ProductItem';

import { mapGetters } from 'vuex';

export default {
  name: 'Products',
  components: {
    FeatureBox,
    ProductItem
  },
  computed: { ...mapGetters({ getProductCategory: 'product/getProductCategory' }) },
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
      ],
      items: [
        {
          text: 'Admin',
          href: '#'
        },
        {
          text: 'Manage',
          href: '#'
        },
        {
          text: 'Library',
          active: true
        }
      ],
      selected: 1,
      options: [
        { value: 1, text: 'Thứ tự theo mức độ phổ biến' },
        { value: 2, text: 'Thứ tự theo mức độ đánh giá' },
        { value: 3, text: 'Thứ tự theo sản phẩm mới' },
        { value: 4, text: 'Thứ tự theo giá: thấp đến cao' },
        { value: 5, text: 'Thứ tự theo giá: cao xuống thấp' }
      ],
      products: []
    }
  },
  created() {
    this.products = this.getProductCategory('cate_1_1');
  }
}
</script>
<style scoped>
.product-pagination {
  margin: auto;
}
.page-title {
  background-color: #fff;
}
.page-title .order-by {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 5px;
}
.page-title .order-by > p {
  margin: 0px 10px;
}
</style>