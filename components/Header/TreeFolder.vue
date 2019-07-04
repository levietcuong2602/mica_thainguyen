<template>
  <li class="folder">
    <ul
      v-show="open"
      v-if="isFolder"
      :class="{'open': open}"
    >
      <TreeItem
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
      >
      </TreeItem>
      <span v-if="isFolder">{{ isFolder ? model.children.length : '' }}</span>
    </ul>
  </li>
</template>
<script>
import TreeItem from './TreeItem';

export default {
  name: 'TreeFolder',
  components: {
    TreeItem
  },
  data: function () {
    return {
      open: false,
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
  }
}
</script>
