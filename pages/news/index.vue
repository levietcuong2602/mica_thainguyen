<template>
  <div class="news mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-6 col-12">
          <Asidebar />
        </div>
        <div class="col-lg-9 col-md-9 col-sm-6 col-12">
          <div class="row">
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
          </div>

          <div class="row float-right">
            <el-pagination
              background
              :pager-count="4"
              layout="prev, pager, next"
              :total="1000"
            >
            </el-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PostItem from '@/components/MainContent/News/PostItem';
import Asidebar from '@/components/MainContent/Sidebar/Asidebar';


export default {
  name: 'News',
  components: {
    PostItem,
    Asidebar
  },
}
</script>
