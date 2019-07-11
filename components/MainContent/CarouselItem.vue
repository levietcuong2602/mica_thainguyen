<template>
  <el-carousel>
    <el-carousel-item
      v-for="image in images"
      :key="image"
    >
      <img
        :src="image"
        alt="image-1"
        style="width: 100%; height: 100%;"
      >
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  data() {
    return {
      images: [
        'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/slideshow1-1.jpg',
        'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/slideshow2.jpg',
        'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/slideshow3.jpg',
      ]
    }
  }
}
</script>
