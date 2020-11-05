"use strict";
// Your web app's Firebase configuration

const _firebaseConfig = {
  apiKey: "AIzaSyB_XZDIiicBhPGALFj4ikeZtqk34jQllXk",
  authDomain: "arlab2b.firebaseapp.com",
  databaseURL: "https://arlab2b.firebaseio.com",
  projectId: "arlab2b",
  storageBucket: "arlab2b.appspot.com",
  messagingSenderId: "786345968830",
  appId: "1:786345968830:web:2327bf9f1d27dee8cf8aef"
};

// Initialize Firebase and database references
firebase.initializeApp(_firebaseConfig);
const _db = firebase.firestore();