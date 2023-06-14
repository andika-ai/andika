const fs = require('fs');
const path = require('path');

const environmentFilePath = path.join(__dirname, '../../libs/app/config/src/lib/environments/environment.ts');

try {
  const data = fs.readFileSync(environmentFilePath, 'utf8');
  if (data.trim().length > 0) {
    throw new Error('Error: The environment file is not empty.');
  } else {
    console.log('The environment file is empty.');
  }
} catch (err) {
  console.error('Error reading the file:', err);
  process.exit(1);
}
