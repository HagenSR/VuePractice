<template>
  <div>
    <v-card class="mx-auto overflow-hidden" height="400">
      <v-app-bar color="deep-purple" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Vue Practice Website</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
            <router-link to="/tasks">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-roman-numeral-1</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Tasks</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/tabs">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-roman-numeral-2</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Tabs</v-list-item-title>
              </v-list-item>
            </router-link>
            <router-link to="/modal">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-roman-numeral-3</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Modal</v-list-item-title>
              </v-list-item>
            </router-link>
               <router-link to="/visitor">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-roman-numeral-4</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Tabs</v-list-item-title>
            </v-list-item>
               </router-link>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <v-app>
        <router-view></router-view>
      </v-app>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "navigation",

  data: () => ({
    drawer: false,
    group: null
  })
};
</script>