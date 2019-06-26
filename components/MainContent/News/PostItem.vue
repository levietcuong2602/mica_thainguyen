<template>
  <div class="col-lg-4 col-md-4 col-sm-6 col-6 mb-3">
    <a
      class="post-content"
      :href="'/news/details/'+id"
    >
      <el-card :body-style="{ padding: '0px' }">
        <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
        >
        <div style="padding: 14px;">
          <h5 class="title">Yummy hamburger</h5>
          <p class="sub-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iste neque atque doloribus excepturi, mollitia et quibusdam accusamus ex. Laborum cum, rem eveniet suscipit dolorem nemo quidem aliquid quibusdam obcaecati?</p>
        </div>
      </el-card>
    </a>
  </div>
</template>
<script>
export default {
  name: 'PostItem',
  props: {
    id: {
      type: String,
      default: '1'
    },
    title: {
      type: String,
      default: 'Yummy hamburger',
    },
    description: {
      type: String,
      default: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. At iste neque atque doloribus excepturi, mollitia et quibusdam accusamus ex. Laborum cum, rem eveniet suscipit dolorem nemo quidem aliquid quibusdam obcaecati?'
    }
  }
}
</script>
<style scoped>
.post-content .image {
  width: 100%;
  height: auto;
}
.post-content {
  text-decoration: none;
}
.post-content .title:hover {
  color: #dd3333;
}
.post-content .title {
  font-size: 95%;
}
.post-content .sub-title {
  overflow: hidden;
  text-overflow: ellipsis;
  /* -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
  white-space: nowrap;
  font-size: 85%;
}
</style>
