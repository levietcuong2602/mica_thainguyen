<template>
  <div style="width: 100%;">
    <div class="section-header">
      <div class="title">
        <p>{{ title }}</p>
      </div>
      <div class="select-all">
        <p>Xem tất cả <i
            class="icon-arrow-right text-danger"
            style="font-size: 70%"
          ></i></p>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'SectionContent',
  props: {
    title: {
      type: String,
      default: 'Vật tư Mica'
    }
  }
}
</script>
