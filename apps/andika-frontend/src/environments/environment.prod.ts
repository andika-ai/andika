// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const FB_PROJECT_ID = '<FIREBASE_PROJECT_ID>';

export const environment = {
    production: false,
    auth: {
        clientId: '805088813720-92a4bja15dmce0hj1g4ru29t7ghgm938.apps.googleusercontent.com',
        clientDomain: 'https://andika-16cf6.web.app/', // e.g., you.auth0.com
        audience: '<AUTH0_API_AUDIENCE>', // e.g., http://localhost:1337/
        redirect: 'http://localhost:4200/dashboard',
        scope: 'openid profile email'
    },
  firebase: {
    projectId: 'andika-16cf6',
    appId: '1:805088813720:web:e2eae03b631781ce76e6ed',
    databaseURL: 'https://andika-16cf6-default-rtdb.firebaseio.com',
    storageBucket: 'andika-16cf6.appspot.com',
    apiKey: 'AIzaSyA2wXmpJ6fmM9cVHud8zrRg3uf282v9t_Q',
    authDomain: 'andika-16cf6.firebaseapp.com',
    messagingSenderId: '805088813720',
    measurementId: 'G-N0WGT4SFDF',
  },
    apiRoot: '<API URL>' // e.g., http://localhost:1337/ (include trailing slash)
};