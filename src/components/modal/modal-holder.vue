<template>
  <v-app>
    <v-container>
      <input placeholder="enter a header" v-model="head" />
      <v-textarea placeholder="Enter a body" v-model="body"></v-textarea>
      <modal>
        <template slot="header">{{head}}</template>
        {{body}}
      </modal>
    </v-container>
  </v-app>
</template>

<script>
import modal from "./modal.vue";
export default {
  name: "modalHolder",
  components: {
    modal
  },
  data: () => ({
    dialog: true,
    head: "",
    body: ""
  })
};
</script>

