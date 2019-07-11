<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-6 text-center">
    <a href="/products/detail/1">
      <div class="product-item mt-3">
        <div class="card-top">
          <img
            :src="product.img"
            class="image"
            style="width: 100%; height: 100%;"
          >
        </div>
        <div class="card-main">
          <p>{{ product.title }}</p>
        </div>
        <div class="card-bottom">
          <a href="#">Đọc tiếp</a>
        </div>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => ({
        id: '10142975',
        idCategory: 'cate_1_1',
        img: 'https://salt.tikicdn.com/cache/200x200/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg',
        thumbnail: ['https://salt.tikicdn.com/cache/64x64/ts/product/54/0d/0d/391f8ffc33dd8e63dc7d339451f11eb7.jpg',
          'https://salt.tikicdn.com/cache/64x64/ts/product/74/6b/2e/4352b235cf2e5b58ec760e4f364228bb.jpg'
        ],
        title: 'Điện Thoại Coolpad N3 - Hàng Chính Hãng',
        finalPrice: '1190000',
        priceRegular: '1790000',
        sale: '-34'
      }
      )
    }
  }
}
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000;
}
.product-item .card-main p {
  font-weight: 600;
}
</style>

