import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDeZaypYwfK0iWCbPL--qW5-BE7zgLEr5s",
    authDomain: "replica-1b54d.firebaseapp.com",
    projectId: "replica-1b54d",
    storageBucket: "replica-1b54d.appspot.com",
    messagingSenderId: "164064322154",
    appId: "1:164064322154:web:82232ce818cacb77d06013",
    measurementId: "G-MSPPC8HEHW"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };