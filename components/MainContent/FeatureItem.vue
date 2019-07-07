<template>
  <el-card
    :body-style="{ padding: '10px', color: '#fff' }"
    :class="background"
  >
    <div class="row">
      <div class="col-lg-3 col-md-3 col-sm-2 col-2 d-flex text-center">
        <img
          :src="icon"
          class="img-responsive rounded"
          style="object-fit: contain;"
        >
      </div>
      <div class="col-lg-9 col-md-9 col-sm-10 col-10">
        <div><span class="title"><b>{{ title }}</b></span></div>
        <span class="title">{{ subTitle }}</span>
      </div>
    </div>
  </el-card>
</template>
<script>
export default {
  name: 'FeatureItem',
  props: {
    title: {
      type: String,
      default: 'Hỗ trợ khách hàng 24/7'
    },
    subTitle: {
      type: String,
      default: 'Hỗ trợ khách hàng mọi ngày trong tuần, bất cứ lúc nào'
    },
    icon: {
      type: String,
      default: '/_nuxt/static/img/bkg_return.png'
    },
    background: {
      type: String,
      default: 'bg-success'
    }
  }
}
</script>
<style scoped>
.row {
  align-items: center;
}
@media only screen and (min-width: 992px) {
  .img-responsive {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 77%;
  }
}
@media only screen and (max-width: 992px) {
  .img-responsive {
    width: auto;
    height: 70%;
  }
  .title {
    font-size: 54%;
  }
}
@media only screen and (max-width: 768px) {
  .img-responsive {
    width: 100%;
    height: 100%;
  }
  .title {
    font-size: 85%;
  }
}
</style>
