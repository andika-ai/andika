

Create momorepo workspace `npx create-nx-workspace@latest` in the prompt select empty nx project 

Install angular in nx project `npm install -D @nrwl/angular`

Generate angular application run `nx g @nrwl/angular:app andika`

Using the Angular Plugin
Generating an application
It's straightforward to generate an Angular application:


nx g @nrwl/angular:app appName
By default, the application will be generated with:

ESLint as the linter.
Jest as the unit test runner.
Cypress as the E2E test runner.

We can then serve, build, test, lint, and run e2e tests on the application with the following commands:


nx serve appName
nx build appName
nx test appName
nx lint appName
nx e2e appName
Generating a library
Generating an Angular library is very similar to generating an application:


nx g @nrwl/angular:lib libName
By default, the library will be generated with:

ESLint as the linter.
Jest as the unit test runner.
We can then test and lint the library with the following commands:


nx test libName
nx lint libName


Generate an Angular publishable library with Tailwind CSS pre-configured
To generate an Angular publishable library with Tailwind CSS configured by default, you can use the following command:


npx nx g @nrwl/angular:lib my-lib --publishable --importPath=@my-org/my-lib --add-tailwind



Add Tailwind CSS to an existing Angular application, buildable library or publishable library

npx nx g @nrwl/angular:setup-tailwind my-project




1. Navigate to the firebase console and Create project in firebase called **andika**
2. Go to Cloud Firestore, nabvigate to product categories, under build select firestore database and create database. Then select test mode.
3. Go to project settings create your app and select firebase hosting. You should also make sure you installed firebase. You need to also install firebase dependency `npm install firebase` then  firebse tools globally to login in firebase cli   `npm install -g firebase-tools`

Then, initialize Firebase and begin using the SDKs for the products you'd like to use.

```javascript
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2wXmpJ6fmM9cVHud8zrRg3uf282v9t_Q",
  authDomain: "andika-16cf6.firebaseapp.com",
  projectId: "andika-16cf6",
  storageBucket: "andika-16cf6.appspot.com",
  messagingSenderId: "805088813720",
  appId: "1:805088813720:web:e2eae03b631781ce76e6ed",
  measurementId: "G-N0WGT4SFDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

```
4. Run `firebase init` confirm the neccessary prompts.
5. When deploying run firebase deploy. (Functions can be deployed with firebase deploy.)
6. Install express and cors packages from npm 
   

# Running emulators 
java required install java
firebase emulators:start




nx run functions-apis-openai:build

nx run unctions-apis-openai:deploy --gcpProject andika-16cf6


https://firebase.google.com/docs/functions/local-emulator

kill ports 
lsof -P | grep ':8001' | awk '{print $2}' | xargs kill -9


to run emulators ger the key []

[https://firebase.google.com/docs/functions/local-emulator](https://firebase.google.com/docs/functions/local-emulator)
run emulators
run firebase functions:shell


https://firebase.google.com/docs/functions/local-shell

https://medium.com/@moki298/test-your-firebase-cloud-functions-locally-using-cloud-functions-shell-32c821f8a5ce

use npm run func-shell