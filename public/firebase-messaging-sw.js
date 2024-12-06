importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
import {backgound_notification} from '../src/App';
var firebaseConfig ={
    // apiKey: "AIzaSyCx7GDjVeGNdvFINSHvXwq9jkxTLrav_cY",
    // authDomain: "jyotishee-cb7f3.firebaseapp.com",
    // projectId: "jyotishee-cb7f3",
    // storageBucket: "jyotishee-cb7f3.appspot.com",
    // messagingSenderId: "362449511746",
    // appId: "1:362449511746:web:5a740c6da477aba1ded4db",
    // measurementId: "G-DSP40B55H1"
    apiKey: "AIzaSyB_L91xyNbDWHDLbMAF47PtoQrK5NhqMG0",
    authDomain: "manhelper-84cf7.firebaseapp.com",
    projectId: "manhelper-84cf7",
    storageBucket: "manhelper-84cf7.appspot.com",
    messagingSenderId: "456143694226",
    appId: "1:456143694226:web:e6c0febdfb49ea369cb94b",
    measurementId: "G-SW3CSSWH2V"
}


firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  backgound_notification(payload)

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});