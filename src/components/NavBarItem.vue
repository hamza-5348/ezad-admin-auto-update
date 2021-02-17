<template>
  <div class="q-ma-xs">
    <q-btn dense flat rounded color="secondary" :label="title" :icon="icon" exa :to="route">

      <q-tooltip content-class="bg-primary">{{title}}</q-tooltip>

    </q-btn>
  </div>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
