<template>
  <v-app>
    <div class="practice">
      <h3>incomplete Tasks</h3>

      <h3>add a task</h3>
      <v-input type="text" id="in" v-model="message"></v-input>
      <button @click= "addTask()">Add task</button>
      <v-container>
        <v-card v-for="task in incomplete" v-bind:key="task.TODO">
          <p class="display-1 text--primary"></p>
          <h4>{{task.TODO}}</h4>
          <p>done? {{task.Done}}</p>
          <v-btn color = 'success' @click = "flip(task.TODO)">Complete?</v-btn>
        </v-card>
      </v-container>
      <h3>All Tasks</h3>
      <v-container>
        <v-card v-for="task in arri" v-bind:key="task.TODO">
          <p class="display-1 text--primary"></p>
          <h4>{{task.TODO}}</h4>
          <p>done? {{task.Done}}</p>
          <v-btn color="success" @click="flip(task.TODO)">Complete?</v-btn>
          <v-btn color="error" @click="dlt(task.TODO)">Delete?</v-btn>
        </v-card>
      </v-container>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "practice",
  data: () => ({
    message: "Add a task",
    arri: [
      {
        TODO: "Walk the dog",
        Done: false
      },
      {
        TODO: "Exercise",
        Done: true
      },
      {
        TODO: "Go to target",
        Done: false
      }
    ],
    title: "YEet"
  }),
  methods: {
    addTask() {
      this.arri.push({
        TODO: this.message,
        Done: false
      });
    },
    flip(result) {
      this.arri.forEach(element => {
        if (element.TODO == result) {
          element.Done = !element.Done;
        }
      });
    },
    dlt(name) {
      for (var i = 0; i < this.arri.length; i++) {
        if (this.arri[i].TODO == name) {
          this.arri.splice(i, 1);
          return true;
        }
      }
      return false;
    }
  },
  computed: {
    incomplete() {
      return this.arri.filter(temp => !temp.Done);
    }
  }
};
</script>

