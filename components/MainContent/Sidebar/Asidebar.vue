<template>
  <div>
    <div class="asidebar">
      <div class="title">
        <span>Bài viết mới</span>
      </div>
      <ul class="post-content">
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <hr v-if="post !== posts[0]">
          <a href="#">{{ post.title }}</a>
        </li>
      </ul>
    </div>
    <NProductAside />
    <FeatureBox />
  </div>
</template>
<script>
import FeatureBox from './FeatureBox';
import NProductAside from './NProductAside';

import { posts } from '@/data/post';

export default {
  name: 'Asidebar',
  components: {
    FeatureBox,
    NProductAside
  },
  data() {
    return {
      posts,
    }
  }
}
</script>
