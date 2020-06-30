/* eslint-disable  */
/* eslint-env serviceworker */
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyDPqOYi9EdoSFMCmGhnUofJn-nSXV1VvOI",
  authDomain: "healthymood-d762d.firebaseapp.com",
  databaseURL: "https://healthymood-d762d.firebaseio.com",
  projectId: "healthymood-d762d",
  storageBucket: "healthymood-d762d.appspot.com",
  messagingSenderId: "693232145307",
  appId: "1:693232145307:web:53056fdcfa54a058bc873e",
  measurementId: "G-L5K8DJWLF2",
});

const messaging = firebase.messaging();

// eslint-disable-next-line no-restricted-globals
self.addEventListener("notificationclick", function (event) {
  console.log("clicked on notif", JSON.stringify(event));
});
