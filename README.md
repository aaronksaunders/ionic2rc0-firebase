# ionic2rc0-firebase
Updated 10/18/2017 - this is an basic app that I set up to get firebase working with Ionic RC1.

####Set Firebase3 Configuration Properties
```Javascript

import firebase from 'firebase'

// the firebase config
const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>'
};
```

####Modify `rollup.config.json` to resolve issues with Firebase
```Javascript
  useStrict: false,
```
