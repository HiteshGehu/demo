import { Component } from '@angular/core';
import { FCM } from '@awesome-cordova-plugins/fcm/ngx';
import { Platform } from '@ionic/angular';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private fcm: FCM,
    private platform: Platform
  ) {
    this.initializeFCM();
  }

  initializeFCM() {
    const app = initializeApp(environment.firebaseConfig);
    const messaging = getMessaging(app);

    // Request permission for notifications
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');

        // Get FCM token
        getToken(messaging, { vapidKey: 'BH-ICku7RaHXyOff5G_GT5XxEiltiXXbG6HdIT5IyDF8JzjiaRHSPocLulnqCJJB0cjhD_vlt2uRGR9z-cyn9v4' }).then((currentToken) => {
          if (currentToken) {
            console.log('FCM Token:', currentToken);
            // Send the token to your server to send notifications later
          } else {
            console.log('No registration token available.');
          }
        }).catch((err) => {
          console.error('An error occurred while retrieving token.', err);
        });
      } else {
        console.error('Unable to get permission to notify.');
      }
    });

    // Handle foreground notifications
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // Customize notification handling in foreground here
    });
  }

}


