import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import firebase from 'firebase'

// the firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBb0yc3UWwQPy_dvkcRLThNfQZuNx9jZ-g",
  authDomain: "fir-starterapp.firebaseapp.com",
  databaseURL: "https://fir-starterapp.firebaseio.com",
  storageBucket: "fir-starterapp.appspot.com",
};

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  declarations: [
    MyApp,
    HomePage
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {

  constructor() {
    console.log()
    firebase.initializeApp(firebaseConfig)
  }
}
