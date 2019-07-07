<template>
  <div class="item-feature">
    <div
      class="row"
      style="align-items: center;"
    >
      <div class="col-lg-4 col-md-4 col-sm-3 col-2">
        <img
          class="img-responsive"
          :src="img"
          alt="seller1"
        >
      </div>
      <div class="col-lg-8 col-md-8 col-sm-9 col-10">
        <p>{{ title }}</p>
        <p>
          <span>{{ subTitle }}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FeatureItem',
  props: {
    title: {
      type: String,
      default: 'Cam kết'
    },
    img: {
      type: String,
      default: '/img/seller1.png'
    },
    subTitle: {
      type: String,
      default: 'Sản phẩm mới 100%'
    },
  }
}
</script>
<style scoped>
.item-feature .img-responsive {
  width: 90%;
  height: auto;
}
.item-feature {
  padding: 5px;
  background: white;
  border-radius: 3px;
  border: 1px dashed #f79c3a;
  margin-bottom: 15px;
}
.item-feature p {
  margin: 0px;
  font-size: 85%;
  font-weight: 600;
}
.item-feature p span {
  font-size: 85%;
}
</style>
