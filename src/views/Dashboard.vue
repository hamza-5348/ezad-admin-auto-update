<template>
  <q-page class="">
    <div class="row  q-pa-md">
      <div class="col-sm-6 col-md-3 ">
        <q-card bordered class=" my-card custom-full-height" :dark="this.$q.dark.isActive">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Reminders</div>
              <q-btn outline dense  class="text-primary-color" icon="add"/>

            </div>
          </q-card-section>

          <q-separator :dark="this.$q.dark.isActive" inset/>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-6 col-md-3 ">
        <q-card bordered class=" my-card custom-full-height" :dark="this.$q.dark.isActive">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Follow up Emails</div>
            </div>
          </q-card-section>

          <q-separator :dark="this.$q.dark.isActive" inset/>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-6 col-md-3 ">
        <q-card bordered class=" my-card custom-full-height" :dark="this.$q.dark.isActive">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Emails</div>
              <q-btn outline dense  class="text-primary-color" icon="add"/>

            </div>
          </q-card-section>

          <q-separator :dark="this.$q.dark.isActive" inset/>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
      <div class="col-sm-6 col-md-3 ">
        <q-card bordered class=" my-card custom-full-height" :dark="this.$q.dark.isActive">
          <q-card-section>
            <div class="row justify-between items-center">
              <div class="text-h6">Calls</div>
            </div>
          </q-card-section>

          <q-separator :dark="this.$q.dark.isActive" inset/>

          <q-card-section>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import commonServices from "src/services/commonServices";

export default {
  name: "Dashboard",
  data: () => {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

    }
  },
  mounted() {
    // commonServices.showAppLoadingBar(this);
  },
  beforeMount() {
    // commonServices.hideAppLoadingBar(this);
  }
}
</script>

<style lang="scss" scoped>
.col-md-3 {
  padding: 2px;
}

.col-sm-6 {
  padding: 2px;
}

.text-primary-color {
  color: $accent !important;
}
</style>
