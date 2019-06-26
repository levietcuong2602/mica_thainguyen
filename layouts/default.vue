<template>
  <div class="layout">
    <HeaderContent />
    <div class="main">
      <nuxt />
    </div>
    <FooterContent />
  </div>
</template>
<script>
import HeaderContent from '~/components/Header/HeaderContent';
import FooterContent from '~/components/Footer/FooterContent';

export default {
  components: {
    HeaderContent,
    FooterContent
  }
}
</script>
