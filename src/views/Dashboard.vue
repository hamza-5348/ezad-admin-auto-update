<template>
  <div>
    Dashhh
  </div>
</template>

<script>
import commonServices from "src/services/commonServices";

export default {
  name: "Dashboard",
  mounted() {
    commonServices.showAppLoadingBar(this);
  },
  beforeMount() {
    commonServices.hideAppLoadingBar(this);
  }
}
</script>

<style scoped>

</style>
