<template>
  <div class="col-lg-3 col-md-3 col-sm-6 col-6">
    <el-card :body-style="{ padding: '0px' }">
      <img
        src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        class="img-responsive"
      >
      <div style="padding: 14px;">
        <h5>Yummy hamburger</h5>
        <div class="bottom clearfix">
          <time
            class="time"
            style="font-size: 85%;"
          >05/06/2019</time>
        </div>
        <p class="descriptions">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur ratione nostrum accusantium quam. Tenetur natus culpa eos, soluta perspiciatis dolore quas sequi possimus aspernatur provident eum, magni vero! Quo.</p>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'NewsItem'
}
</script>
<style scoped>
.img-responsive {
  width: 100%;
  height: 100%;
}
.descriptions {
  overflow: hidden;
  text-overflow: ellipsis;
  /* -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical; */
  white-space: nowrap;
}
</style>

