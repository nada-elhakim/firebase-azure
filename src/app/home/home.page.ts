import { Component } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  login() {
    const provider = new firebase.auth.OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'consent'
    });
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        console.log('sign in success', result);
      }).catch((error) => {
        console.log(error);
      });
  }

  logout() {
    firebase.auth()
        .signOut()
        .then(() => console.log('logged out'))
        .catch(console.log);
  }
}
