import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { NavController } from 'ionic-angular';
import firebase from 'firebase'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage implements OnInit {

  currentUser;
  error;
  authState;
  authChecked = false
  submitted = false;
  credentials: { email?: string, password?: string } = {};

  assetList

  constructor(
    public navCtrl: NavController,
    private ngZone: NgZone) {
  }


  ngOnInit() {
    // subscribe to the auth object to check for the login status
    // of the user, if logged in, save some user information and
    // execute the firebase query...
    // .. otherwise
    // show the login modal page

    firebase.auth().onAuthStateChanged((_currentUser) => {

      this.ngZone.run(() => {
        if (_currentUser) {
          console.log("in auth subscribe", _currentUser)
          this.currentUser = _currentUser;

          this.assetList = this.doShowList();

        } else {
          this.currentUser = null
        }

        this.authChecked = true;
      });

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

  doShowList() {

    console.log("in doShowList");
    try {
      return new Observable(observer => {

        var ref = firebase.database().ref('assets')

        ref.orderByKey().once('value', (snapshot) => {
          var arr = []

          console.log("in doShowList Loop");

          snapshot.forEach((childSnapshot) => {
            var data = childSnapshot.val()
            data['id'] = childSnapshot.key
            arr.push(data);

            console.log(data);
            return false;
          });
          console.log(arr);

          observer.next(arr)
          observer.complete()
        },
          (error) => {
            console.log("ERROR:", error)
            observer.error(error)
          });
      });

    } catch (EE) {
      console.log(EE)
    }
  }


}
