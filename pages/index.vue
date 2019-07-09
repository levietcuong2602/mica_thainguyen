<template>
  <div class="main-content mb-3">
    <div class="container">
      <div class="row mt-3">
        <div class="col-lg-8 col-md-8 col-sm-12 col-12 text-center">
          <CarouselItem></CarouselItem>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-12 col-12">
          <div class="row">
            <PostItem
              v-for="post in posts"
              :key="post.id"
              :post="post"
            ></PostItem>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div
          style="padding-left: 5px;"
          class="col-md-4 col-sm-12"
          v-for="feature in features"
          :key="feature.id"
        >
          <FeatureItem
            :title="feature.title"
            :subTitle="feature.subTitle"
            :icon="feature.icon"
            :background='feature.background'
          ></FeatureItem>
        </div>
      </div>
      <div class="row mt-3">
        <!-- Todo responsive and navigation -->
        <SectionContent title="Electronic Devices">
          <SwiperSlider />
        </SectionContent>
      </div>
      <div class="row mt-3">
        <SectionContent title="Electronic Accessories">
          <SwiperSlider />
        </SectionContent>
      </div>
      <div class="row mt-3">
        <SectionContent title="Tin tức - Bài viết">
          <NewsList />
        </SectionContent>
      </div>
      <hr style="margin-top: 50px; margin-bottom: 20px;">
      <div class="row mt-3">
        <SectionContent title="HỖ TRỢ TRỰC TUYẾN">
          <IntroList />
        </SectionContent>
      </div>
      <div class="row mt-3">
        <!-- Todo -->
        <BrandSwiper />
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from '@/components/MainContent/PostItem';
import CarouselItem from '@/components/MainContent/CarouselItem';
import FeatureItem from '@/components/MainContent/FeatureItem';
import SectionContent from '@/components/MainContent/Sections/SectionContent';
import SwiperSlider from '@/components/MainContent/Sections/SwiperSlider';
import NewsList from '@/components/MainContent/News/NewsList';
import IntroList from '@/components/MainContent/Introductions/IntroList';
import BrandSwiper from '@/components/MainContent/BrandSwiper';

import { posts } from '@/data/post';

export default {
  components: {
    PostItem,
    CarouselItem,
    FeatureItem,
    SectionContent,
    SwiperSlider,
    NewsList,
    IntroList,
    BrandSwiper
  },
  data() {
    return {
      posts: posts,
      features: [
        {
          id: 1,
          title: 'Hỗ trợ khách hàng 24/7',
          subTitle: 'Hỗ trợ khách hàng mọi ngày trong tuần, bất cứ lúc nào',
          icon: '/img/bkg_support.png',
          background: 'bg-success',
        },
        {
          id: 2,
          title: 'Chính sách chất lượng',
          subTitle: 'Hoàn 100% tiền nếu sản phẩm không đạt tiêu chuẩn',
          icon: '/img/bkg_return.png',
          background: 'bg-warning',
        },
        {
          id: 3,
          title: 'Quan điểm kinh doanh',
          subTitle: 'Khách hàng mới là người quyết định sự tồn tại và phát triển của chúng tôi',
          icon: '/img/bkg_ship.png',
          background: 'bg-info',
        },
      ]
    }
  },
}
</script>
<style scoped>
.image-content {
  justify-content: center;
  display: flex;
  flex-direction: column;
  /* padding-left: 30px; */
}
</style>
