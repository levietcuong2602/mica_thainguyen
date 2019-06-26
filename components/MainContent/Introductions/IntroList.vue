<template>
  <div class="row">
    <IntroItem />
    <IntroItem />
    <IntroItem />
    <IntroItem />
  </div>
</template>
<script>
import IntroItem from './IntroItem';

export default {
  name: 'IntroList',
  components: {
    IntroItem,
  }
}
</script>
