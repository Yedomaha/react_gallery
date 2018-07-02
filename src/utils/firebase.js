import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAamN7SvHISkLO6IewQZ5G_xKIkK2BaelE",
  authDomain: "mybase-2b7f7.firebaseapp.com",
  databaseURL: "https://mybase-2b7f7.firebaseio.com",
  projectId: "mybase-2b7f7",
  storageBucket: "mybase-2b7f7.appspot.com",
  messagingSenderId: "268012107089"
};

const app = firebase.initializeApp(config);
const database = app.database();

export function getData(photoId, setResult) {
  database
    .ref(`/scores/${photoId}`)
    .once("value")
    .then(result => {
      if (result.val()) {
        setResult(result.val());
      }
    });
}

export function submitScore(photoId, like, dislike) {
  const data = {
    like,
    dislike
  };

  database.ref("/scores/" + photoId).set(data);
}
