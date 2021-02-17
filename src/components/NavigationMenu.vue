<template>
  <div>
    <q-list
      dense
      padding
      :dark="this.$q.dark.isActive"
      class="h-nav wrap"
    >
      <q-item v-for="navItem in topNavItems" :key="navItem.id" clickable v-ripple dense :to="navItem.path"
              exact active-class="text-accent" class="rounded-borders q-mr-md">
        <q-item-section thumbnail>
          <q-icon :name="navItem.icon"/>
        </q-item-section>
        <q-item-section>

          {{ navItem.title }}
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>
export default {
  name: "NavigationMenu",
  data() {
    return {
      topNavItems: [
        {id: "1", title: "Dashboard", path: "dashboard", icon: "home"},
        {id: "2", title: "Emails", path: "emails", icon: "email"},
        {id: "3", title: "Entities", path: "entities", icon: "perm_identity"},
        {id: "4", title: "Calls", path: "calls", icon: "settings_phone"},
        {id: "5", title: "Reminders", path: "reminders", icon: "notification_important"},
        {id: "6", title: "Tags", path: "tags", icon: "military_tech"},
        {id: "7", title: "Settings", path: "settings", icon: "settings"},
      ]
    };
  },
  props: {},
  methods: {
    ClickMe() {
      console.log("I am clicked");
    }
  }
};
</script>

<style scoped>
.h-nav {
  display: flex;
  flex-direction: row;

}
</style>
