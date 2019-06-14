<template>
  <div>
    <ContentHeader />
    <nuxt />
  </div>
</template>
<script>
import ContentHeader from '~/components/Header/ContentHeader';

export default {
  components: {
    ContentHeader,
  }
}
</script>
