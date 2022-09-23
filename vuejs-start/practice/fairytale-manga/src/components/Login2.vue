<template>
  <section class="vh-100" style="background: linear-gradient(210deg,#ffdde1, #ee9ca7,#9A616D);">
    <div class="container" style="padding-top: 3rem;
        padding-bottom: 3rem;
        height: 100%;">
      <div class="row" style="
            display: flex; justify-content: center;  height: 100%;
            align-items: center !important;">
        <div class="col col-xl-10">
          <div class="card" style="border-radius:1rem; background: linear-gradient(210deg,#ffdde1, #F2F3F2,#ffffff);">
            <div class="row g-0">
              <div class="col-md-6 col-lg-5 d-none d-md-block">
                <img src="https://i.pinimg.com/564x/07/2e/5e/072e5ea3323de9dc0b6256058c70ef99.jpg"
                     alt="login form"
                     style="border-radius: 1rem 0 0 1rem; max-width: 100%; height: 100%;"/>
              </div>


              <div class="col-md-6 col-lg-7" style="display: flex; align-items: center;">
                <div class="card-body p-4 p-lg-5" style="color: black; opacity: 1;">
                  <!-- padding: 1.5rem; padding: 3rem -->
                  <form>
                    <div
                      style="padding-bottom: 0.25rem; margin-bottom: 1rem; display: flex;align-items: center;">
                                            <span
                                              style="font-weight: 700 ;margin-bottom:0; font-size: calc(1.375rem + 1.5vw);">Fairytale
                                                Manga</span>
                    </div>
                    <h5
                      style="letter-spacing: 1px; font-weight: 600; padding-bottom: 1rem;margin-bottom: 1rem;">
                      Đăng nhập tài khoản của bạn</h5>
                    <div style="margin-bottom: 1.5rem" class="form-outline">
                      <label class="form-label"
                             style="font-size: 1.25rem; font-style: italic;">*Email</label>
                      <input type="email" class="form-control form-control-lg"
                             placeholder="Nhập vào địa chỉ email"/>

                    </div>

                    <div style="margin-bottom: 1.5rem" class="form-outline">
                      <label class="form-label" for="form2Example17"
                             style="font-size: 1.25rem; font-style: italic;">*Mật khẩu</label>
                      <input type="password" id="form2Example17"
                             class="form-control form-control-lg" placeholder="Nhập vào mật khẩu"/>

                    </div>

                    <div style="padding-top: 0.25rem; margin-bottom: 1.5rem">
                      <button class="btn btn-dark" type="button"
                              style="width: -webkit-fill-available;">Đăng nhập
                      </button>
                    </div>

                    <p style="color: #393f81;" class="mb-5 pb-lg-2">Chưa có tài khoản? <a
                      href="register.html" style="color: #393f81;">Đăng kí tại đây</a></p>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Login2',
  data() {
    return {}
  },
  methods: {}

}
</script>
<style scoped>
.form-control:focus {
  border-color: #9A616D !important;
  box-shadow: none;
}
</style>
