// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    apiBaseUrl:'http://localhost:8080',
    firebaseConfig : {
      apiKey: "AIzaSyDKAW31dRIM5nuxTCY7T7ar8ovUR1yHZgI",
      authDomain: "login-de-porfolio.firebaseapp.com",
      projectId: "login-de-porfolio",
      storageBucket: "login-de-porfolio.appspot.com",
      messagingSenderId: "686804121441",
      appId: "1:686804121441:web:ff30ab0f747b91d9727720",
      measurementId: "G-14TBC2NGWN"
    }
  };

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  
  /*
   * For easier debugging in development mode, you can import the following file
   * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
   *
   * This import should be commented out in production mode because it will have a negative impact
   * on performance if an error is thrown.
   */
  // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.