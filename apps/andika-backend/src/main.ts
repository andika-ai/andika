import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';


// Initialize our project application
admin.initializeApp();

// // Set up database connection
// const firestoreDb: FirebaseFirestore.Firestore = admin.firestore();
// firestoreDb.settings({ timestampsInSnapshots: true });
// export const db = firestoreDb;

export * from './fns-open-ai';

// https://firebase.google.com/docs/admin/setup

// admin.initializeApp({
// 	credential: admin.credential.cert(
// 		{
// 			privateKey:functions.config()['private'].key.replace(/\\n/g, '\n'),
// 			projectId: functions.config()['project'].id,
// 			clientEmail: functions.config()['clientEmail']
// 		}),
// 	databaseURL: ''// TODO ADD
// })

// const db = admin.firestore()

// export {admin , db}