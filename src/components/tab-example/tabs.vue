<style scoped>
h6{
  padding-left: 6px;
}
</style>

<template>
  <div @delete="flip" id = "strt">
    <v-tabs v-model="tab">
      <v-tab v-for="tb in tbs" v-bind:key="tb.id">
        <h6>{{tb.name}}</h6>
        <h6 @click="dlt(tb.id)">x</h6>
      </v-tab>
      <v-tab @click="newTab">+</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item v-for="tb in tbs" :key="tb.id">
        <v-card flat>
          <v-card-text>
            <div>
              <h1 v-show="shw" v-text="tb.text"></h1>
            </div>
            <div v-show="!shw">
              <h3>Tab Name:</h3>
              <input v-model="tb.name" />
              <input />
              <h3>Tab Text:</h3>
              <v-textarea v-model="tb.text" filled auto-grow></v-textarea>
            </div>
            <br />
            <v-btn @click="flip">Edit</v-btn>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
export default {
  el: 'strt',
  name: "tabs",
  components: {},
  methods: {
    newTab() {
      this.tbs.push({
        name: "New Tab",
        text: "lorem Ipsum",
        //this.tbs.length didn't make a good id because it could potentially be not unique after a deletion
        id: this.cnt++
      });
      console.log(this.cnt)
    },
    flip() {
      this.shw = !this.shw;
    },
    dlt(id) {
      for(var i = 0; i < this.tbs.length; i++){
        //finds a matching ID and then deletes it
        if(this.tbs[i].id == id){
          this.tbs.splice(i, 1);
        }
        
      }
      
    }
  },
  data: () => ({
    //for the tab v-model
    tab: null,
    //toggels view or edit mode
    shw: true,
    //placeholder for current unique id
    cnt: 3,
    //starting data
    tbs: [
      {
        name: "About me",
        text:
          "I am a computer science major who enjoys everything about computers",
        id: 0
      },
      {
        name: "Technical Knowledge",
        text:
          "I feel comfortable with any object oriented language, especially Java, C# and python. I also have experience with JS, Typescript and I have some experience with SQL and no SQL databases",
        id: 1
      },
      {
        name: "GPA",
        text: "3.78",
        id: 2
      }
    ]
  })
};
</script>