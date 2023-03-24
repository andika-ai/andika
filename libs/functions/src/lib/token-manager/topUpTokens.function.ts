/**
 * In this example, the function is triggered by an HTTP request and takes two parameters: userId and subscriptionType. Based on the subscriptionType, the function will update the tokenCount of the user in Firestore. If the subscription type is "monthly", the token count will be increased by 500. If the subscription type is "yearly", the token count will be increased by 6000. You can adjust these values to any desired amounts.
 */


/**
 * Handling recurring subscriptions in Stripe is a common use case and Stripe provides a simple way to handle it. The example code I provided in the previous answer already implements a basic form of recurring subscriptions. When a user subscribes to either the monthly or yearly plan, a Stripe subscription is created and the user's token count is updated accordingly.

To handle recurring subscriptions, you need to perform the following steps:

Create a Stripe plan for each subscription type. You can do this in the Stripe dashboard or through the Stripe API.
When a user subscribes, use the stripe.subscriptions.create method to create a new Stripe subscription and associate it with the user's Stripe customer.
Store the subscription ID in Firestore so that you can retrieve it later and perform any necessary operations, such as updating the user's token count or tracking billing information.
Here's an updated version of the code I provided in the previous answer that includes the steps to handle recurring subscriptions:
 */


// import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
// import * as Stripe from 'stripe';
// admin.initializeApp();

// const stripe = new Stripe(functions.config().stripe.secret_key);

// export const subscribeToTokens = functions.https.onRequest(async (req, res) => {
//     const userId = req.body.userId;
//     const subscriptionType = req.body.subscriptionType;
//     const paymentMethodId = req.body.paymentMethodId;
//     const db = admin.firestore();

//     let tokenCount = 0;
//     let amount = 0;
//     let planId = '';
//     if (subscriptionType === 'monthly') {
//         tokenCount = 500;
//         amount = 10;
//         planId = 'plan_monthly';
//     } else if (subscriptionType === 'yearly') {
//         tokenCount = 6000;
//         amount = 100;
//         planId = 'plan_yearly';
//     }

//     // create a stripe customer
//     const customer = await stripe.customers.create({
//         payment_method: paymentMethodId,
//         email: req.body.email
//     });

//     // create a stripe subscription
//     const subscription = await stripe.subscriptions.create({
//         customer: customer.id,
//         items: [
//             {
//                 plan: planId,
//             },
//         ],
//     });

//     // update user information in Firestore
//     const userRef = db.collection('users').doc(userId);
//     const userSnapshot = await userRef.get();
//     const currentTokenCount = userSnapshot.get('tokenCount');
//     await userRef.update({
//         tokenCount: currentTokenCount + tokenCount
//     });

//     // add billing information to Firestore
//     const billingRef = db.collection('billing').doc(userId).collection('invoices').doc(subscription.id);
//     await billingRef.set({
//         subscriptionId: subscription.id,
//         customerId: customer.id,
//         subscriptionType: subscriptionType,
//         amount: amount,
//         status: 'active'
//     });

//     return res.status(200).send({
//         message: `Successfully subscribed to ${subscriptionType} plan. Token count increased by ${tokenCount}.`
//     });
// });

