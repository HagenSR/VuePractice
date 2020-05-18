<template>
<div>
    <v-tabs v-model="tab">
      <v-tab v-for="tb in tbs" v-bind:key="tb.name" v-text="tb.name">
        <a href="#"></a>
      </v-tab>
    <v-tab @click="newTab">+</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="tb in tbs"
        :key="tb.name"
      >
        <v-card flat>
          <v-card-text>{{ tb.text }}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    </div>
</template>

<script>
export default {
  name: "tabs",
  components: {},
  methods: {
    newTab(){
      this.tbs.push({
        name: "New Tab",
        text: "lorem Ipsum"
      })
      console.log("here")
    }
  },
  data: () => ({
    tab: null,
    tbs: [
      {
        name: "About me",
        text: "I am a computer science major who enjoys everything about computers"
      },
      {
        name: "Technical Knowledge",
        text: "I feel comfortable with any object oriented language, especially Java, C# and python. I also have experience with JS and I have some experience with SQL and no SQL databases"
      },
      {
        name: "GPA",
        text: "3.85"
      }
    ]
  })
};
</script>