const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      'yellow-300': '#FFDE59', 
      'yellow-600': '#B9A772',  
      'amber-100': '#FEF0CA', 
      'bg-emerald-900 ': '#005246', 
    },
    extend: {},
  },
  plugins: [],
};
