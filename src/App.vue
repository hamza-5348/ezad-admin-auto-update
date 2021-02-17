<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
.custom-full-height {
  min-height: calc(100vh - 87px) !important;
  max-height: calc(100vh - 87px) !important;
  overflow-y: auto;
}


body.body--dark {
  background: #000000
}
</style>
