<template>
  <div>Emails</div>
</template>

<script>
import commonServices from "src/services/commonServices";

export default {
  name: "Emails",
  mounted() {
    commonServices.hideAppLoadingBar(this);
  }
}
</script>

<style scoped>

</style>
