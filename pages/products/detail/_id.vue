<template>
  <div class="container product-detail">
    <div class="row mt-3">
      <div class="col-lg-9 col-md-9 col-sm-6 col-12">
        <div class="row infor-product">
          <div class="col-lg-5 col-md-6 col-sm-12">
            <div class="row">
              <div
                :key="index"
                @click="() => showImg(index)"
                style="width: 100%;"
              >
                <img
                  :src="img"
                  style="width: 100%; height: 100%;"
                >
              </div>
              <vue-easy-lightbox
                :visible="visible"
                :imgs="img"
                @hide="handleHide"
              ></vue-easy-lightbox>
            </div>
            <div class="row">
              <div class="img-small-wrap">
                <ThumbnailZoom
                  v-for="img in imgs"
                  :key="img"
                  :img="img"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-7 col-md-6 col-sm-12">
            <div class="product-name">
              <h5>MÔ HÌNH LẮP GHÉP HG 00 DIVER ACE</h5>
            </div>
            <div class="ratings">
              <div class="rating">
                <el-rate v-model="rating"></el-rate>
              </div>
              <p class="ratings-link">
                <a href="#">0 đánh giá</a>
                <span>|</span>
                <a href="#">0 Đã bán</a>
              </p>
            </div>
            <hr>
            <div class="price-box">
              <div class="special-price">384,000 đ</div>
              <div class="old-price">400,000 đ</div>
              <div class="sales-price">69% GIẢM</div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-3 col-sm-6 col-6 title-size">
                <p>Kích thước</p>
              </div>
              <div class="col-md-9 col-sm-6 col-6">
                <el-select
                  v-model="sizes"
                  multiple
                  large
                  placeholder="Vui lòng chọn size"
                >
                  <el-option
                    v-for="size in sizeOptions"
                    :key="size"
                    :label="size.label"
                    :value="size.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-3 col-sm-6 col-6 title-size">
                <p>Bảng màu</p>
              </div>
              <div class="col-md-9 col-sm-6 col-6">
                <el-select
                  v-model="colors"
                  multiple
                  large
                  placeholder="Vui lòng chọn màu"
                >
                  <el-option
                    v-for="color in colorOptions"
                    :key="color"
                    :label="color.label"
                    :value="color.value"
                  >
                  </el-option>
                </el-select>
              </div>
            </div>
            <hr>
            <div class="row">
              <div class="col-md-3 col-sm-6 col-6 title-size">
                <p>Số lượng</p>
              </div>
              <div class="col-md-9 col-sm-6 col-6">
                <div class="numbers-row">
                  <div class="numbers">
                    <div
                      @click="(amount > 0 ? amount-- : '')"
                      class="decrement qtybutton"
                    ><i class="fa fa-minus">&nbsp;</i></div>
                    <input
                      type="number"
                      class="qty"
                      title="Số lượng"
                      v-model="amount"
                      maxlength="12"
                    >
                    <div
                      @click="(amount < 12 ? amount++ : '')"
                      class="increment qtybutton"
                    ><i class="fa fa-plus">&nbsp;</i></div>
                  </div>
                  <span class="has-product">420 sản phẩm có sẵn</span>
                </div>
              </div>
            </div>
            <div
              class="row mt-3"
              style="justify-content: center;"
            >
              <el-button
                type="primary"
                @click="handleNotification"
              >
                <i class="fa fa-shopping-cart"></i>
                Mua ngay
              </el-button>
            </div>
            <hr>
            <BlogShare />
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
        <div>
          <FeatureBox />
          <NProductAside />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FeatureBox from '@/components/MainContent/Sidebar/FeatureBox';
import NProductAside from '@/components/MainContent/Sidebar/NProductAside';
import BlogShare from '@/components/MainContent/Sections/BlogShare';
import ThumbnailZoom from '@/components/MainContent/Products/ThumbnailZoom';

export default {
  name: 'ProductDetail',
  data() {
    return {
      items: [
        {
          text: 'Trang chủ',
          href: '/'
        },
        {
          text: 'Hộp mica',
          href: '#',
          active: true
        },
      ],
      visible: false,
      imgs: [
        'https://via.placeholder.com/450.png/',
        'https://via.placeholder.com/300.png/',
        'https://via.placeholder.com/150.png/'
      ],
      rating: 5,
      sizeOptions: [
        { label: 'S', value: 0 },
        { label: 'M', value: 1 },
        { label: 'L', value: 2 },
        { label: 'XL', value: 3 },
        { label: 'XXL', value: 4 }
      ],
      sizes: [],
      colorOptions: [
        { label: 'Màu đỏ', value: 0 },
        { label: 'Màu đen', value: 1 },
        { label: 'Màu trắng', value: 2 },
        { label: 'Màu xám', value: 3 },
      ],
      colors: [],
      amount: 1,
    }
  },
  props: {
    img: {
      type: String,
      default: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
  },
  components: {
    FeatureBox,
    NProductAside,
    BlogShare,
    ThumbnailZoom
  },
  methods: {
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    },
    handleNotification() {
      alert('Chức năng đang được xây dựng');
    }
  }
}
</script>
<style scoped>
.el-select {
  display: block;
}
</style>
