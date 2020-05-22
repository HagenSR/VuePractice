<style scoped>
#in {
  background-color: #f2f2f2;
}
</style>

<template>    
 <v-app>
    <div class="practice" id="pract">
      <v-container>
        <h3>add a task</h3>
        <input type="text" id="in" v-model="message" placeholder="add a task" />
        <v-btn @click="addTask()">Add task</v-btn>
      </v-container>
      <h3>incomplete Tasks</h3>
      <v-container>
        <task v-for="task in incomplete" v-bind:key="task.TODO" :tsk="task" @flip="flip"></task>
      </v-container>
      <h3>All Tasks</h3>
      <v-container>
        <task v-for="task in arri" v-bind:key="task.TODO" :tsk="task" @flip="flip">
          <v-btn color="error" @click="dlt(task.TODO)">Delete?</v-btn>
        </task>
      </v-container>
    </div>
 </v-app>
</template>

<script>
import task from "./task.vue";
export default {
  name: "tasks",
  el: "pract",
  components: {
    task
  },

  data: () => ({
    message: "",
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
    ]
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



