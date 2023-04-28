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
1. Run `firebase init` confirm the neccessary prompts.
2. When deploying run firebase deploy. (Functions can be deployed with firebase deploy.)
3. Install express and cors packages from npm 
   

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

firebase emulators:start --only functions


# Testing Cloud Functions with firebase Emulator 

__Example__
```bash
grammerCorrection.post().form({'text': 'mi name is philip'})

```

# Stop Emulator 

**Ctrl+ c**



# Running app on different port