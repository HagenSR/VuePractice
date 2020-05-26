<template>
<v-app>
  <v-container>
    <v-form v-model="set">
      <v-text-field label="Name" :rules="rules" hide-details="auto" v-model="name" required></v-text-field>
      <v-text-field label="State" :rules="rules" hide-details="auto" v-model="state" required></v-text-field>
    </v-form>
      <button @click="setVisitor" :disabled = "set">Submit</button>
    <br />
    <v-card id="crd" v-for="person in people" v-bind:key="person.name" class="mx-auto">
      <v-card-text>
        <h1 v-text="person.name"></h1>
        <h3 v-text="person.state"></h3>
        <h3 v-text="person.date"></h3>
      </v-card-text>
    </v-card>
  </v-container>
</v-app>
</template>

<script>
var db = require("./FirebaseMethods");

export default {
  name: "visitor",
  mounted: function() {
    this.getVisitors();
  },
  methods: {
    submit() {
      console.log("here");
    },
    setVisitor() {
      let docRef = db.visitors.collection("visitors").doc(this.name);

      docRef.set({
        name: this.name,
        state: this.state,
        date: this.date.toDateString()
      });
      this.getVisitors();
    },
    getVisitors() {
      this.people = [];
      db.visitors
        .collection("visitors")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.people.push(doc.data());
          });
          console.log(this.people.toString());
        })
        .catch(err => {
          console.log("Error getting documents", err);
        });
    }
  },
  data: () => ({
    name: "",
    state: "",
    date: new Date(),
    people: [],
    set: false,
    rules: [
      value => !!value || "Required.",
      value => (value && value.length >= 3) || "Min 3 characters"
    ]
  })
};
</script>

<style scoped>
#crd {
  margin-top: 5px;
  width: 30rem;
}
</style>