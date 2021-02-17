<template>
  <q-layout>
    <q-header>
      <q-toolbar class="text-black">
        <q-img
          :src="icon"
          style="max-width: 110px">
        </q-img>
        <span class="full-width row justify-center items-center content-center rounded-borders">
          <NavigationMenu/>
        </span>
        <q-toggle
          class="text-primary-color"
          v-model="isDark"
          @input="updateDarkMode"
          color="accent"
        />
      </q-toolbar>

    </q-header>


    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import NavigationMenu from "components/NavigationMenu";

export default {
  name: 'MainLayout',
  components: {NavigationMenu},
  data() {
    return {
      icon: require("../assets/ez-nav-logo.png"),
      isDark: false
    }
  },
  methods: {
    updateDarkMode(value) {
      this.$q.dark.set(value)
    }
  }
  , mounted() {
  }
}
</script>
<style lang="scss" scoped>

</style>
