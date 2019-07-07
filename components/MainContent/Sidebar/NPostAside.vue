<template>
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
</template>
<script>
import { posts } from '@/data/post';

export default {
  name: 'NPostAside',
  data() {
    return {
      posts,
    }
  }
}
</script>
