# ionic2rc0-firebase
this is an basic app that I set up to get firebase working with Ionic RC0.
The big issue I had was gettingt he typing to work properly.

####Installing Firebase3 Type Definitions
```
typings install file:node_modules/firebase/firebase.d.ts  --save --global && typings install 
```
what i found was that the typing are in the `firebase` npm module so be sure to install that with your project. If there is a better way please let me know.

**WARNING:** the ones that get installed from npm are incorrect, **do not** do this....
```
npm install @types/firebase --save-dev --save-exact
```
It will install the incorrect version of the type definitions

####Set Firebase3 Configuration Properties
```Javascript
const firebaseConfig = {
  apiKey: '<your-key>',
  authDomain: '<your-project-authdomain>',
  databaseURL: '<your-database-URL>',
  storageBucket: '<your-storage-bucket>'
};
```
