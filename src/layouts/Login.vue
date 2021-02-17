<template>
  <div class="">

    <div class="row">
      <div class="col-md-6 left-container ">
        <div class="q-mt-xl">
          <div class="text-h5 text-center text-white ">EVERYTHING YOU NEED <br/>TO OPERATE YOUR BUSINESS</div>
        </div>
        <div class="row justify-center q-mt-lg" style="margin-top: 20%">
          <img class="left-icon " :src="leftIcon" alt="">
        </div>
        <div class="col self-end">
          <div class="text-h6 text-weight-bolder text-center text-white ">The most advanced email system <br/>
            with smart templates, and entities.
          </div>
        </div>

      </div>
      <div class="col">
        <div class="row q-pa-xl">
          <div class="col-12">
            <img :src="ezAdIcon" alt="" class="right-icon">
          </div>
          <div class="col-12 q-mt-xl">
            <q-form
              @submit="onSubmit"
              @reset="onReset"
              class="q-gutter-md"
            >
              <q-input
                v-model="email"
                color="accent"
                label="Enter Your Email"
                type="email"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <q-input
                color="accent"
                type="password"
                v-model="password"
                label="Enter Your Password"
                :rules="[ val => val && val.length > 0 || 'Please type something']"
              />

              <div>
                <q-btn label="Sign In" type="submit" color="primary"/>
                <q-btn label="Cancel" type="reset" color="primary" flat class="q-ml-sm"/>
              </div>
            </q-form>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>
<script>
import commonServices from "src/services/commonServices";
import constants from "../common/constants";

export default {
  name: "Login",
  data: () => {
    return {
      leftIcon: require("../assets/email_icon_sign_in.png"),
      ezAdIcon: require("../assets/ez-ad-icon.png"),
      email: "admin@gmail.com",
      password: "password",

    }
  },
  mounted() {
  },
  methods: {
    onSubmit() {

      commonServices.showAppLoader(this);
      setTimeout(() => {
        commonServices.hideAppLoader(this);
        this.$router.push(constants.ROUTES.dashboard)
        commonServices.showAppNotification(this);
      }, 5000)
    },

    onReset() {
      this.email = null
      this.password = null
    }
  }

}
</script>

<style lang="scss" scoped>

.left-container {
  background: $primary;
  min-height: 100vh;
  max-height: 100vh;
  overflow: auto;
}

.left-icon {
  width: 180px;
  height: 250px;
}

.right-icon {
  width: 250px;
  height: 79px;
}
</style>
