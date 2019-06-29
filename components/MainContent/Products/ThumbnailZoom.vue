<template>
  <div class="item-gallery">
    <img
      class="pic"
      :src="img"
      alt="Adam"
    >
    <img
      class="picbig"
      :src="img"
      alt="Adam"
    >
  </div>
</template>
<script>
export default {
  name: "ThumbnailZoom",
  props: ["img"]
};
</script>
<style>
.item-gallery .pic {
  width: 100%;
  height: 100%;
  align-items: center;
}
.item-gallery .picbig {
  position: absolute;
  width: 0px;
  -webkit-transition: width 0.3s linear 0s;
  transition: width 0.3s linear 0s;
  z-index: 10;
}
.pic:hover + .picbig {
  width: 200px;
}
</style>
