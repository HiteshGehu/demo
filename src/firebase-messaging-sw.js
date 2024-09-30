importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD-VNGBKhkFxVbtWM7YTPBr3RpQ4sHeGnw",
    authDomain: "delivery-app-a40fe.firebaseapp.com",
    databaseURL: "https://delivery-app-a40fe-default-rtdb.firebaseio.com",
    projectId: "delivery-app-a40fe",
    storageBucket: "delivery-app-a40fe.appspot.com",
    messagingSenderId: "960555729586",
    appId: "1:960555729586:web:8e8e487850070fd55b7fab",
    measurementId: "G-J1Z146XX67"
  });

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/assets/icons/icon-72x72.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
