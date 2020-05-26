  var firebase = require("firebase/app");
  require("firebase/firestore");


var firebaseConfig = {
    apiKey: "AIzaSyAqiQEcc-plpzOYlCakbNoRvE509MuNTL0",
    authDomain: "vue-practice-d96b9.firebaseapp.com",
    databaseURL: "https://vue-practice-d96b9.firebaseio.com",
    projectId: "vue-practice-d96b9",
    storageBucket: "vue-practice-d96b9.appspot.com",
    messagingSenderId: "926228148663",
    appId: "1:926228148663:web:f87734bf069eb44f943832",
    measurementId: "G-EG96188RLK"
};

firebase.initializeApp(firebaseConfig);

var dbVisitors = firebase.firestore()



exports.visitors = dbVisitors

