<template>
  <div class="col-lg-12 col-md-12 col-sm-6 col-6 post-item">
    <el-card
      :body-style="{ padding: '0px' }"
      style="margin-bottom: 10px;"
    >
      <div class="card-content row">
        <div class="col-md-4 col-sm-12">
          <a href="#">
            <img
              :src="post.image"
              class="img-responsive rounded"
              style="width: 100%; height: 100%;"
            >
          </a>
        </div>
        <div class="col-md-8 col-sm-12">
          <div class="title">
            <h5><a
                style="font-size: 66%; font-weight: 700;"
                href="#"
              >{{ post.title }}</a></h5>
          </div>
          <div class="time">
            <time style="font-size: 66%;">{{ post.time }}</time>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      default: {
        id: 1,
        title: 'Chuyên gia công sản phẩm Mica theo yêu cầu',
        time: '05/08/2018',
        image: 'https://mica.thainguyenweb.com/wp-content/uploads/2018/06/slideshow3-150x150.jpg'
      }
    }
  }
}
</script>
<style scoped>
.post-item .card-content .img-responsive {
  max-height: 200px;
}
.post-item .card-content {
  padding: 5px;
}
h5 {
  margin: 0px;
}
h5 a {
  color: #0a0a0a;
}
h5 a:hover {
  color: #dd3333;
}
</style>

