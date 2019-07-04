<template>
  <li class="file">
    <label
      :class="{'open': open}"
      @click="toggle"
    >
      {{ model.name }}
    </label>
  </li>
</template>
<script>
export default {
  name: 'TreeItem',
  props: {
    model: {
      type: Object,
      default: {
        name: 'Kệ rời mica'
      }
    }
  },
}
</script>
