<template>
  <div class="row">
    <NewsItem />
    <NewsItem />
    <NewsItem />
    <NewsItem />
  </div>
</template>
<script>
import NewsItem from './NewsItem';

export default {
  name: 'NewsList',
  components: {
    NewsItem
  }
}
</script>
