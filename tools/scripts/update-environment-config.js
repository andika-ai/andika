const fs = require('fs');
const path = require('path');

const keysFilePath = path.join(__dirname, '../../keys.json');
const environmentFilePath = path.join(__dirname, '../../apps/andika-frontend/src/environments/environment.ts');

const keysData = fs.readFileSync(keysFilePath, 'utf8');
const keys = JSON.parse(keysData);

const envConfig = JSON.stringify({
  production: Boolean(keys.PRODUCTION),
  auth: {
    clientId: String(keys.GOOGLE_CLIENT_ID),
    clientDomain: String(keys.GOOGLE_CLIENT_DOMAIN),
    redirect: String(keys.GOOGLE_CLIENT_REDIRECT_URL)
  },
  firebaseConfig: {
    projectId: String(keys.FIREBASE_PROJECT_ID),
    appId: String(keys.FIREBASE_APP_ID),
    apiKey: String(keys.FIREBASE_API_KEY),
    authDomain: String(keys.FIREBASE_AUTH_DOMAIN),
    messagingSenderId: String(keys.FIREBASE_MESSAGING_SENDER_ID),
    measurementId: String(keys.FIREBASE_MEASUREMENT_ID)
  },
  apiRoot: String(keys.NEXIA_API_BASE_URL)
}, null, 2);

fs.writeFileSync(environmentFilePath, `export const environment = ${envConfig};`, 'utf8');
