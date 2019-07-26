import { Component } from '@angular/core';
import * as firebase from "firebase";
import {environment} from "../environments/environment";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'albook';

  constructor() {
    const config = {
      apiKey: environment.API_KEY,
      authDomain: environment.AUTH_DOMAIN,
      databaseURL: environment.DATABASE_URL,
      projectId: environment.PROJECT_ID,
      storageBucket: '',
      messagingSenderId: environment.MESSAGING_SENDER_ID,
      appId: environment.APP_ID
    };
    firebase.initializeApp(config);
  }
}
