/* eslint-disable  */
/* eslint-env serviceworker */
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyANLln6PrWsj26sOjDOe7LuvmC0V7LgrVk",
  authDomain: "healthymood-3096d.firebaseapp.com",
  databaseURL: "https://healthymood-3096d.firebaseio.com",
  projectId: "healthymood-3096d",
  storageBucket: "healthymood-3096d.appspot.com",
  messagingSenderId: "247023349688",
  appId: "1:247023349688:web:c0c0b575f6334e8c58694d",
  measurementId: "G-2HDMN6VXBQ",
});

const messaging = firebase.messaging();

// eslint-disable-next-line no-restricted-globals
self.addEventListener("notificationclick", function (event) {
  console.log("clicked on notif", JSON.stringify(event));
});
