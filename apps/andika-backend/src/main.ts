import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';


// Initialize our project application
admin.initializeApp({
    databaseURL: 'https://andika-16cf6-default-rtdb.firebaseio.com'
});



export * from './fns-open-ai';

// https://firebase.google.com/docs/admin/setup
