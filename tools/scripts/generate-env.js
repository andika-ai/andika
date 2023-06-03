const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../../apps/andika-frontend/src/environments/environment.ts');
const templatePath = path.join(__dirname, 'environments', 'environment-template.ts');

// Read the environment template file
const template = fs.readFileSync(templatePath, 'utf8');

// Replace the placeholder values with actual environment-specific values
const envConfig = template
  .replace(/__GOOGLE_CLIENT_ID__/g, process.env.GOOGLE_CLIENT_ID)
  .replace(/__GOOGLE_CLIENT_DOMAIN__/g, process.env.GOOGLE_CLIENT_DOMAIN)
  .replace(/__GOOGLE_CLIENT_REDIRECT_URL__/g, process.env.GOOGLE_CLIENT_REDIRECT_URL)
  .replace(/__FIREBASE_PROJECT_ID__/g, process.env.FIREBASE_PROJECT_ID)
  .replace(/__FIREBASE_APP_ID__/g, process.env.FIREBASE_APP_ID)
  .replace(/__FIREBASE_API_KEY__/g, process.env.FIREBASE_API_KEY)
  .replace(/__FIREBASE_AUTH_DOMAIN__/g, process.env.FIREBASE_AUTH_DOMAIN)
  .replace(/__FIREBASE_MESSAGING_SENDER_ID__/g, process.env.FIREBASE_MESSAGING_SENDER_ID)
  .replace(/__FIREBASE_MEASUREMENT_ID__/g, process.env.FIREBASE_MEASUREMENT_ID)
  .replace(/__NEXIA_API_BASE_URL__/g, process.env.NEXIA_API_BASE_URL);

console.log(process.env)

// Write the environment configuration to the target file
fs.writeFileSync(targetPath, envConfig, 'utf8');

