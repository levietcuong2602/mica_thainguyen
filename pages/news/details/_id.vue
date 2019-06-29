<template>
  <div class="container mt-3">
    <div class="row">
      <div class="col-lg-9 col-md-9 col-sm-6 col-12">
        <div class="post-detail">
          <header class="entry-header">
            <a href="/news">TIN TỨC</a>
            <h3 class="entry-title">Chuyên Gia công sản phẩm MICA theo yêu cầu!</h3>
            <hr class="entry-divider">
            <div class="post-on">
              <span>POSTED ON</span>
              <span><a href="#">05/06/2018</a></span>
              <span>BY</span>
              <span><a href="#">ADMIN</a></span>
            </div>
          </header>
          <div class="entry-main">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia officia id numquam esse voluptatum voluptate quo aliquid earum unde pariatur eveniet, itaque magnam vitae quos reprehenderit porro nemo optio aut?</p>
            <hr>
            <BlogShare />
            <hr>
          </div>
          <footer class="entry-footer">
            <span>This entry was posted in</span>
            <span><a href="#">Tin tức</a></span>
            <span>. Bookmark the</span>
            <span><a href="#">permalink.</a></span>
          </footer>
          <hr>
        </div>
        <div class="post-comment mt-3">
          <h5>Trả lời</h5>
          <p>Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc được đánh dấu *</p>
          <el-form
            ref="form"
            :model="form"
          >
            <el-form-item>
              <label for="comment-field">Bình luận</label>
              <el-input
                type="textarea"
                v-model="form.comment"
                name="comment-field"
                id="comment-field"
                :rows="5"
              ></el-input>
            </el-form-item>
            <div class="row">
              <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                <el-form-item>
                  <label for="name-field">Tên *</label>
                  <el-input
                    name="name-field"
                    id="name-field"
                    v-model="form.name"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                <el-form-item>
                  <label for="email-field">Email *</label>
                  <el-input
                    name="email-field"
                    id="email-field"
                    v-model="form.email"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                <el-form-item>
                  <label for="email-field">Trang web</label>
                  <el-input
                    name="web-field"
                    id="web-field"
                    v-model="form.email"
                  ></el-input>
                </el-form-item>
              </div>
            </div>
            <el-form-item>
              <el-checkbox
                id="save-field"
                name="type"
              ></el-checkbox>
              <label for="save-field">Lưu tên của tôi, email, và trang web trong trình duyệt này cho lần bình luận kế tiếp của tôi.</label>
            </el-form-item>
            <el-form-item>
              <el-button type="danger">PHẢN HỒI</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-6 col-12">
        <Asidebar />
      </div>
    </div>
  </div>
</template>
<script>
import Asidebar from '@/components/MainContent/Sidebar/Asidebar';
import BlogShare from '@/components/MainContent/Sections/BlogShare';

export default {
  name: 'Detail',
  components: {
    Asidebar,
    BlogShare
  },
  data() {
    return {
      form: {
        name: '',
        comment: '',
        email: '',
        web: ''
      }
    }
  }
}
</script>
