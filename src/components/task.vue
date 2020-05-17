<template>
  <v-card>
    <p class="display-1 text--primary"></p>
    <h4>{{tsk.TODO}}</h4>
    <p>done? {{tsk.Done}}</p>
    <v-btn color="success" @click="$emit('flip', tsk.TODO)">Complete?</v-btn>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "task",
  props: {
      tsk : {
          TODO : String,
          Done : Boolean
      }
  },
  data: () => ({})
};
</script>