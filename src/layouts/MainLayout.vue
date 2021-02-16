<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="text-black">
        <q-img
          :src="icon"
          style="max-width: 110px"
          spinner-color="white"
        >
        </q-img>

        <div class="full-width row justify-center items-center content-center rounded-borders" style="overflow-x: auto">
          <NavBarItem v-for="navItem in topNavItems" :key="navItem.id" :title="navItem.title" :route="navItem.path"
                      :icon="navItem.icon"/>
        </div>

        <div class="q-ml-auto">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

import NavBarItem from "components/NavBarItem";

export default {
  name: 'MainLayout',
  components: {NavBarItem},
  data() {
    return {
      icon: require("../assets/ez-nav-logo.png"),
      topNavItems: [
        {id: "1", title: "Dashboard", path: "/dashboard", icon: "home"},
        {id: "2", title: "Emails", path: "/dashboard/emails", icon: "email"},
        {id: "3", title: "Entities", path: "", icon: "perm_identity"},
        {id: "4", title: "Calls", path: "", icon: "settings_phone"},
        {id: "5", title: "Reminders", path: "", icon: "notification_important"},
        {id: "6", title: "Tags", path: "", icon: "military_tech"},
      ]
    }
  }
}
</script>
