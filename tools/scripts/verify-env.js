const fs = require('fs');
const path = require('path');

const environmentFilePath = path.join(__dirname, '../../libs/app/config/src/lib/environments/environment.ts');

fs.readFile(environmentFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    process.exit(1);
  }

  if (data.trim().length > 0) {
    console.error('Error: The environment file is not empty.');
    process.exit(1);
  } else {
    console.log('The environment file is empty.');
  }
});
