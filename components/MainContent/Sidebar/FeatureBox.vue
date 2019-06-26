<template>
  <div>
    <FeatureItem
      title="Cam kết"
      subTitle="Sản phẩm mới 100%"
      img="/img/seller1.png"
    />
    <FeatureItem
      title="Chất lượng"
      subTitle="Hoàn tiền 100% nếu sản phẩm chất lượng tồi"
      img="/img/seller2.png"
    />
    <FeatureItem
      title="Hỗ trợ 24/7"
      subTitle="Hotline tư vấn: 0986.989.626"
      img="/img/seller3.png"
    />
    <FeatureItem
      title="Giao hàng đúng hẹn"
      subTitle="Giao hàng trên toàn quốc"
      img="/img/seller4.png"
    />
  </div>
</template>
<script>
import FeatureItem from './FeatureItem';

export default {
  name: 'FeatureBox',
  components: {
    FeatureItem
  }
}
</script>
