<template>
  <div class="footer-content">
    <MainFooter />
    <BottomFooter />
  </div>
</template>
<script>
import BottomFooter from './BottomFooter';
import MainFooter from './MainFooter';

export default {
  name: 'FooterContent',
  components: {
    BottomFooter,
    MainFooter
  }
}
</script>
<style scoped>
.footer-content {
  background-color: #eaeaea;
}
</style>

