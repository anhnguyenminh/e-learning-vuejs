<template>
  <div>
    <section class="vh-100" style="background-color: #9A616D;">
      <div class="container" style="padding-top: 3rem;
        padding-bottom: 3rem;
        height: 100%;">
        <div class="row" style="
            display: flex; justify-content: center;  height: 100%;
            align-items: center !important;">
          <div class="col col-xl-10">
            <div class="card" style="border-radius:1rem;">
              <div class="row g-0">


                <div class="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://64.media.tumblr.com/4077e14df41f7b17e719c3929c1b569e/a6fab51351c98fe6-22/s1280x1920/13ab0be7795e27b68f44f5b1ace0d23c6eef438c.jpg"
                    alt="login form"
                    style="border-radius: 1rem 0 0 1rem; max-width: 100%; height: 100%; "/>
                </div>
                <div class="col-md-6 col-lg-7" style="display: flex; align-items: center;">
                  <div class="card-body p-4 p-lg-5" style="color: black; opacity: 1;">

                    <form>
                      <div style="padding-bottom: 0.25rem; margin-bottom: 1rem; display: flex;align-items: center;">
                                            <span
                                              style="font-weight: 700 ;margin-bottom:0; font-size: calc(1.375rem + 1.5vw);">
                                              Fairytale Manga</span>
                      </div>
                      <h5
                        style="letter-spacing: 1px; font-weight: 600; padding-bottom: 1rem;margin-bottom: 1rem;">
                        Đăng kí tài khoản mới</h5>
                      <div style="margin-bottom: 1.5rem" class="form-outline">
                        <label class="form-label" for="user-email"
                               style="font-size: 1.25rem; font-weight: 500;">Email</label>
                        <input type="email" id="user-email" class="form-control form-control-lg"
                               placeholder="Nhập vào địa chỉ email" required v-model="email" @keyup="emailValidation"/>
                        <span style="color: red">{{ emailError }}</span>
                      </div>

                      <div style="margin-bottom: 1.5rem" class="form-outline">
                        <label class="form-label" for="form2Example17" style="font-size: 1.25rem; font-weight: 500; ">Mật
                          khẩu</label>
                        <input type="password" id="form2Example17" class="form-control form-control-lg"
                               placeholder="Nhập vào mật khẩu" required/>
                        <span style="color: red">{{ passwordError }}</span>

                      </div>

                      <div style="margin-bottom: 1.5rem" class="form-outline">
                        <label class="form-label" for="form2Example18" style="font-size: 1.25rem; font-weight: 500; ">Nhập
                          lại mật
                          khẩu</label>
                        <input type="password" id="form2Example18" class="form-control form-control-lg"
                               placeholder="Nhập lại mật khẩu" required/>
                        <span style="color: red">{{ rePwdError }}</span>

                      </div>

                      <div style="padding-top: 0.25rem; margin-bottom: 1.5rem">
                        <button class="btn btn-dark" type="button"
                                style="width: -webkit-fill-available;">Đăng nhập
                        </button>
                      </div>

                      <p style="color: #393f81;" class="mb-5 pb-lg-2">Đã có tài khoản? <a
                        href="/" style="color: #393f81;">Đăng nhập tại đây</a></p>

                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      email: '',
      emailError: '',
      rePwdError: '',
      passwordError: ''
    }
  },
  methods: {
    emailValidation() {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.emailError = '';
        return (true);
      }
      // alert("You have entered an invalid email address!")
      this.emailError = "You have entered an invalid email address!";
      return (false)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
