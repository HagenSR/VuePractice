<template>
  <v-app>
    <template>
      <v-row justify="center">
        <v-btn color="primary" dark @click.stop="dialog = true">Open Dialog</v-btn>

        <v-dialog v-model="dialog" max-width="290">
          <v-card>
            <v-card-title class="headline"><slot name = "header"></slot></v-card-title>

            <v-card-text><slot></slot></v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
    </template>
  </v-app>
</template>
 
<script>
export default {
  name: "modal",
  props: {},
  created() {
    console.log("Here");
  },
  data: () => ({
    dialog: false,
    activate: true
  })
};
</script>