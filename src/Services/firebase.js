import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDPqOYi9EdoSFMCmGhnUofJn-nSXV1VvOI',
  authDomain: 'healthymood-d762d.firebaseapp.com',
  databaseURL: 'https://healthymood-d762d.firebaseio.com',
  projectId: 'healthymood-d762d',
  storageBucket: 'healthymood-d762d.appspot.com',
  messagingSenderId: '693232145307',
  appId: '1:693232145307:web:53056fdcfa54a058bc873e',
  measurementId: 'G-L5K8DJWLF2'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  'BPXb6KPNCn-ntJbsACuDoOZ_hYUv_phztlnMX1mgJ9fs6hl9Mejt_fHZjPygxPi8IwJd36BOKfMMxyb_nvnNpwI'
);

export { firebase, messaging };
