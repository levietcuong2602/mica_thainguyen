<template>
  <div class="contact">
    <div class="container">
      <div class="row mt-3">
        <div class="col-md-9 col-sm-6 col-12">
          <p><a href="/">Quay lại trang chủ</a></p>
        </div>
        <div class="col-md-3 col-sm-6 col-12">
          <Asidebar />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Asidebar from '@/components/MainContent/Sidebar/Asidebar';

export default {
  name: 'Contact',
  components: {
    Asidebar
  }
}
</script>
