import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import firebase from 'firebase'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage  implements OnInit {

  currentUser;
  error;
  authChecked = false
  submitted = false;
  credentials: { email?: string, password?: string } = {};

  constructor(public navCtrl: NavController) {

  }


  ngOnInit() {

    // subscribe to the auth object to check for the login status
    // of the user, if logged in, save some user information and
    // execute the firebase query...
    // .. otherwise
    // show the login modal page

    firebase.auth().onAuthStateChanged((_currentUser) => {

      if (_currentUser) {
        console.log("in auth subscribe", _currentUser)
        this.currentUser = _currentUser;
        console.log(_currentUser);
      } else {
        this.currentUser = null
      }

      this.authChecked = true;

    })
  }

  doLogout() {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
    }, (error) => {
      this.error = error
      console.log(error);
    });
  }

  doLogin(_credentials) {
    this.submitted = true;
    this.error = null

    if (_credentials.valid) {
      firebase.auth().signInWithEmailAndPassword(_credentials.value.email, _credentials.value.password)
        .then((_auth) => {
          console.log(_auth)
        }, (error) => {
          // Handle Errors here.
          this.error = error
          console.log(error);
        });
    }
  }

}
