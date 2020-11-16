import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDF-XWQsMv7wDKnaGuoeDJZdHcGB9FZ4-8",
    authDomain: "cacti-50fab.firebaseapp.com",
    databaseURL: "https://cacti-50fab.firebaseio.com",
    projectId: "cacti-50fab",
    storageBucket: "cacti-50fab.appspot.com",
    messagingSenderId: "990369508111",
    appId: "1:990369508111:web:90fa14f6300bc3872e6c7a",
    measurementId: "G-4TGRD0M7HR"
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();