import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();




// var database;
// var sKey;
// var score;
// var knopka = document.getElementById("game");


// function setup() {
//     console.log("eeee");
//     console.log(knopka);
//     knopka.onclick = (increaseScore);

//     var config = {
//         apiKey: "AIzaSyAamN7SvHISkLO6IewQZ5G_xKIkK2BaelE",
//         authDomain: "mybase-2b7f7.firebaseapp.com",
//         databaseURL: "https://mybase-2b7f7.firebaseio.com",
//         projectId: "mybase-2b7f7",
//         storageBucket: "mybase-2b7f7.appspot.com",
//         messagingSenderId: "268012107089"
//     };
//     firebase.initializeApp(config);
//     database = firebase.database();

//     var ref = database.ref('scores');
//     ref.on('value', gotData);
// }

// function gotData(data) {
//     var scores = data.val();
//     var keys = Object.keys(scores);

//     for (var i = 0; i < keys.length; i++) {
//         sKey = keys[i];
//         console.log(sKey);
//         score = scores[sKey].score;
//     }
// }

// function increaseScore() {
//     score++;
//     var data = {
//         score: score
//     }
//     var ref = database.ref('scores/' + sKey).set(data);
// }
// setup();