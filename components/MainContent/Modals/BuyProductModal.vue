<template>
  <b-modal
    id="modal-dialog"
    size="md"
    ok-only
    no-stacking
    tabindex='-1'
  >
    <template
      slot="modal-header"
      slot-scope="{ close }"
    >
      <h4 class="modal-title">Thông tin đặt hàng</h4>
      <button
        type="button"
        class="close"
        data-dismiss="modal"
        aria-label="Close"
        @click="close()"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </template>
    <template slot="default">
      <form
        action="post"
        name="orderForm"
      >
        <!-- <input
          type="hidden"
          name="_token"
          value="0oYW5HHzQYjXqqdZUCzxadXhJyHHLJVmXvo2fMeo"
        > <input
          type="hidden"
          name="product_id"
          value="1"
        > -->
        <div class="container">

          <div class="row">
            <label>Họ tên: <span class="note-required">(*)</span></label>
            <input
              name="name"
              type="text"
              class="form-control"
              onkeyup="checkName()"
              placeholder="Họ và tên"
            >
            <p class="error-form name-null"> * Thông tin bắt buộc</p>
          </div>
          <div class="row">
            <label>Email:</label>
            <input
              name="email"
              type="email"
              class="form-control"
              placeholder="yourmail@gmail.com"
            >
          </div>
          <div class="row">
            <label>Số điện thoại: <span class="note-required">(*)</span></label>
            <input
              name="phone"
              type="text"
              class="form-control"
              onkeyup="checkPhone()"
              placeholder="Nhập số điện thoại"
            >
            <p class="error-form phone-null"> * Thông tin bắt buộc</p>
            <p class="error-form phone-error"> * Số điện thoại không đúng định dạng</p>
          </div>
          <div class="row">
            <div class="modal-order-left col-sm-6 col-6">
              <label>Thành phố:</label>
              <select
                id="province"
                name="province_id"
                class="form-control"
              >
                <option value="1">Hồ Chí Minh</option>
                <option value="2">Hà Nội</option>
                <option value="3">Đà Nẵng</option>
                <option value="4">Bình Dương</option>
                <option value="5">Đồng Nai</option>
                <option value="6">Khánh Hòa</option>
                <option value="7">Hải Phòng</option>
                <option value="8">Long An</option>
                <option value="9">Quảng Nam</option>
                <option value="10">Bà Rịa Vũng Tàu</option>
                <option value="11">Đắk Lắk</option>
                <option value="12">Cần Thơ</option>
                <option value="13">Bình Thuận </option>
                <option value="14">Lâm Đồng</option>
                <option value="15">Thừa Thiên Huế</option>
                <option value="16">Kiên Giang</option>
                <option value="17">Bắc Ninh</option>
                <option value="18">Quảng Ninh</option>
                <option value="19">Thanh Hóa</option>
                <option value="20">Nghệ An</option>
                <option value="21">Hải Dương</option>
                <option value="22">Gia Lai</option>
                <option value="23">Bình Phước</option>
                <option value="24">Hưng Yên</option>
                <option value="25">Bình Định</option>
                <option value="26">Tiền Giang</option>
                <option value="27">Thái Bình</option>
                <option value="28">Bắc Giang</option>
                <option value="29">Hòa Bình</option>
                <option value="30">An Giang</option>
                <option value="31">Vĩnh Phúc</option>
                <option value="32">Tây Ninh</option>
                <option value="33">Thái Nguyên</option>
                <option value="34">Lào Cai</option>
                <option value="35">Nam Định</option>
                <option value="36">Quảng Ngãi</option>
                <option value="37">Bến Tre</option>
                <option value="38">Đắk Nông</option>
                <option value="39">Cà Mau</option>
                <option value="40">Vĩnh Long</option>
                <option value="41">Ninh Bình</option>
                <option value="42">Phú Thọ</option>
                <option value="43">Ninh Thuận</option>
                <option value="44">Phú Yên</option>
                <option value="45">Hà Nam</option>
                <option value="46">Hà Tĩnh</option>
                <option value="47">Đồng Tháp</option>
                <option value="48">Sóc Trăng</option>
                <option value="49">Kon Tum</option>
                <option value="50">Quảng Bình</option>
                <option value="51">Quảng Trị</option>
                <option value="52">Trà Vinh</option>
                <option value="53">Hậu Giang</option>
                <option value="54">Sơn La</option>
                <option value="55">Bạc Liêu</option>
                <option value="56">Yên Bái</option>
                <option value="57">Tuyên Quang</option>
                <option value="58">Điện Biên</option>
                <option value="59">Lai Châu</option>
                <option value="60">Lạng Sơn</option>
                <option value="61">Hà Giang</option>
                <option value="62">Bắc Kạn</option>
                <option value="63">Cao Bằng</option>
              </select>
            </div>
            <div class="modal-order-right col-sm-6 col-6">
              <label>Quận/Huyện:</label>
              <select
                id="district"
                name="district_id"
                class="form-control"
              >
                <option value="1">Bình Chánh</option>
                <option value="2">Bình Tân</option>
                <option value="3">Bình Thạnh</option>
                <option value="4">Cần Giờ</option>
                <option value="5">Củ Chi</option>
                <option value="6">Gò Vấp</option>
                <option value="7">Hóc Môn</option>
                <option value="8">Nhà Bè</option>
                <option value="9">Phú Nhuận</option>
                <option value="10">Quận 1</option>
                <option value="11">Quận 10</option>
                <option value="12">Quận 11</option>
                <option value="13">Quận 12</option>
                <option value="14">Quận 2</option>
                <option value="15">Quận 3</option>
                <option value="16">Quận 4</option>
                <option value="17">Quận 5</option>
                <option value="18">Quận 6</option>
                <option value="19">Quận 7</option>
                <option value="20">Quận 8</option>
                <option value="21">Quận 9</option>
                <option value="22">Tân Bình</option>
                <option value="23">Tân Phú</option>
                <option value="24">Thủ Đức</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label>Địa chỉ:</label>
            <input
              type="text"
              name="address"
              class="form-control"
              placeholder="Địa chỉ"
            >
          </div>
          <div class="row">
            <div class="modal-order-left col-sm-6 col-6">
              <label>Số lượng</label>
              <input
                type="number"
                name="qty"
                min="1"
                value="1"
                class="form-control prd_quantity quantity"
              >
            </div>
            <div class="modal-order-right col-sm-6 col-6">
              <label>Loại hình</label>
              <select
                name="type_id"
                class="form-control"
              >
                <option value="0">Cá nhân</option>
                <option value="1">Doanh nghiệp</option>
              </select>
            </div>
          </div>
          <div class="row">
            <label>Nội dung cần tư vấn:</label>
            <textarea
              name="content"
              type="text"
              class="form-control"
              placeholder="Nội dung"
            ></textarea>
          </div>
        </div>
      </form>
    </template>
    <template
      slot="modal-footer"
      slot-scope="{ok, cancel}"
    >
      <button
        type="button"
        class="btn btn-default"
        data-dismiss="modal"
        @click="cancel()"
      >Hủy</button>
      <button
        type="submit"
        value="Submit"
        class="btn btn-success"
        @click="ok()"
      >Xác nhận đặt hàng</button>
    </template>
  </b-modal>
</template>
<script>
export default {
  name: 'BuyProductModal',
  data() {
    return {
      user: {

      }
    }
  }
}
</script>
<style scoped>
label {
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  font-weight: 700;
  font-size: 14px;
}
.note-required {
  color: red;
  font-size: 13px;
  font-weight: 400;
}
.error-form {
  display: none;
  color: red;
  padding-bottom: 5px;
  font-size: 12px;
}

.modal-order-left {
  padding-left: 0px;
}
.modal-order-right {
  padding-right: 0px;
}
</style>
