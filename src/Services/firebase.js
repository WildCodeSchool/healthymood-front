import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyANLln6PrWsj26sOjDOe7LuvmC0V7LgrVk',
  authDomain: 'healthymood-3096d.firebaseapp.com',
  databaseURL: 'https://healthymood-3096d.firebaseio.com',
  projectId: 'healthymood-3096d',
  storageBucket: 'healthymood-3096d.appspot.com',
  messagingSenderId: '247023349688',
  appId: '1:247023349688:web:c0c0b575f6334e8c58694d',
  measurementId: 'G-2HDMN6VXBQ'
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
messaging.usePublicVapidKey(
  // Project Settings => Cloud Messaging => Web Push certificates
  'BK5zXAmqPxi0HzWLKSsvhnuQucr5K3KBaQPTfkJAwGuz32wQM7Y5hWonJLYSRkI568kh_b7HzpQfbQa8KiVQj1k'
);

export { firebase, messaging };
