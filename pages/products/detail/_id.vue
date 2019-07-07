<template>
  <div class="container product-detail">
    <div class="row mt-3">
      <div class="col-lg-9 col-md-9 col-sm-6 col-12">
        <div class="row infor-product">
          <div class="col-lg-5 col-md-6 col-sm-12">
            <div class="row">
              <div
                @click="() => showImg()"
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
                    :key="size.label"
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
                    :key="color.label"
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
              <b-button
                @click="handleNotification"
                variant="danger"
                class="mr-3"
              >
                <i class="fa fa-shopping-basket"></i>
                Thêm vào giỏ hàng
              </b-button>
              <b-button
                v-b-modal.modal-dialog
                variant="primary"
              >
                <i class="fa fa-shopping-cart"></i>
                Mua ngay
              </b-button>
              <BuyProductModal />
            </div>
            <hr>
            <BlogShare />
          </div>
        </div>
        <div class="row mt-3 description-product">
          <el-tabs v-model="activeName">
            <el-tab-pane
              label="MÔ TẢ"
              name="description"
            >
              <div class="description mt-3">
                <h4>Thông tin Hộp mica kỹ thuật HMKT-1612</h4>
                <h5>Đặc điểm nổi bật</h5>
                <div class="row">
                  <div class="col-4">– Tên sản phẩm :</div>
                  <div class="col-8">Hộp mica kỹ thuật HMKT-1612</div>
                </div>
                <div class="row">
                  <div class="col-4">– Ngày sản xuất :</div>
                  <div class="col-8">15/12/2015</div>
                </div>
                <div class="row">
                  <div class="col-4">– Chất liệu : </div>
                  <div class="col-8">mica trong suốt Đài Loan</div>
                </div>
                <div class="row">
                  <div class="col-4">– Độ dày </div>
                  <div class="col-8">3mm</div>
                </div>
                <div class="row">
                  <div class="col-4">– Độ dày </div>
                  <div class="col-8">3mm</div>
                </div>
                <p>– Sản phẩm thiết kế gồm 5 mặt trên được lắp bản lề giúp bạn có thể đóng mở nắp hộ</p>
                <p>– Thiết kế đơn giản</p>
                <p>– Chất liệu mica giúp bạn dễ bảo quản, làm sạch nhanh bằng nước xà phòng hoặc kem đánh răng bền và ổn định lý hóa theo thời gian</p>
                <p>– Sản phẩm được sử dụng trong các khu công nghiệp, các nhà xưởng…hoặc bạn cũng có thể sử dụng chúng ở bất cứ đâu tùy theo nhu cầu của mình.</p>
                <p>– Kích thước có thể tùy chỉnh, tùy theo yêu cầu đặt mẫu bên trong</p>
                <h5>Thông tin chi tiết</h5>
                <p><b>Hộp mica kỹ thuật HMKT-1612</b></p>
                <p>được làm từ chất liệu mica trong suốt 3mm Đài Loan, sản phẩm thiết kế gồm 5 mặt trên được lắp bản lề giúp bạn có thể đóng mở nắp hộp. Chất liệu mica giúp bạn dễ bảo quản, làm sạch nhanh bằng nước xà phòng hoặc kem đánh răng bền và ổn định lý hóa theo thời gian</p>
              </div>
            </el-tab-pane>
            <el-tab-pane
              label="ĐÁNH GIÁ"
              name="consider"
            >
              <div class="consider mt-3">
                <h5>Đánh giá</h5>
                <div class="comments">
                  <p>Chưa có đánh giá nào</p>
                </div>
                <div class="review-form-wrap">
                  <h5>Hãy là người đầu tiên nhận xét “Hộp mica kỹ thuật HMKT-1612” </h5>
                  <div class="your-ratings">
                    <p><b>Đánh giá của bạn</b></p>
                    <el-rate v-model="ratingConsider"></el-rate>
                  </div>
                  <el-form
                    ref="form"
                    :model="form"
                  >
                    <el-form-item>
                      <label for="comment-field"><b>Nhận xét của bạn *</b></label>
                      <el-input
                        type="textarea"
                        v-model="form.comment"
                        name="comment-field"
                        id="comment-field"
                        :rows="5"
                      ></el-input>
                    </el-form-item>
                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <el-form-item>
                          <label for="name-field"><b>Tên *</b></label>
                          <el-input
                            name="name-field"
                            id="name-field"
                            v-model="form.name"
                          ></el-input>
                        </el-form-item>
                      </div>
                      <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                        <el-form-item>
                          <label for="email-field"><b>Email *</b></label>
                          <el-input
                            name="email-field"
                            id="email-field"
                            v-model="form.email"
                          ></el-input>
                        </el-form-item>
                      </div>
                    </div>
                    <el-form-item>
                      <el-button type="danger">GỬI ĐI</el-button>
                    </el-form-item>
                  </el-form>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="row mt-3 product-same">
          <SectionContent title="Sản phẩm tương tự">
            <SwiperSlider />
          </SectionContent>
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
import BuyProductModal from '@/components/MainContent/Modals/BuyProductModal';

import ProductItem from '@/components/MainContent/Sections/ProductItem';
import SectionContent from '@/components/MainContent/Sections/SectionContent';
import SwiperSlider from '@/components/MainContent/Sections/SwiperSlider';


import { swiperOptions } from '@/mixins/swiper-options';

export default {
  name: 'ProductDetailPage',
  mixins: [swiperOptions],
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
      activeName: 'description',
      form: {
        comment: '',
        name: '',
        email: ''
      },
      ratingConsider: 5,
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
    ThumbnailZoom,
    ProductItem,
    SectionContent,
    SwiperSlider,
    BuyProductModal
  },
  methods: {
    showImg() {
      // this.index = index
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
.el-tabs.el-tabs--top {
  width: 100%;
}
</style>
