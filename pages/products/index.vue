<template>
  <div class="container">
    <div class="row mt-3">
      <div style="flex-grow: 1;">
        <b-breadcrumb :items="items"></b-breadcrumb>
      </div>
      <div class="d-flex">
        <div class="col-lg-4 col-md-5 col-sm-5 col-5 pr-1">
          <p style="font-size: 85%;">Xem tất cả 18 kết quả</p>
        </div>
        <div class="col-lg-8 col-md-7 col-sm-7 col-7 pl-0">
          <b-form-select
            v-model="selected"
            :options="options"
          ></b-form-select>
        </div>
      </div>
    </div>
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
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true }
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