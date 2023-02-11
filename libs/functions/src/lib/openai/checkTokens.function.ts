import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();

async function checkTokens(userId: string, tokensRequired: number): Promise<boolean> {
  const userRef = db.collection('users').doc(userId);
  const userSnapshot = await userRef.get();
  const tokenCount = userSnapshot.get('tokenCount');

  if (tokenCount < tokensRequired) {
    return false;
  }

  await userRef.update({
    tokenCount: tokenCount - tokensRequired
  });

  return true;
}

/**
 * In this example, the checkTokens function takes two parameters: userId and tokensRequired.
 * It returns a boolean indicating whether the required number of tokens is available for the user.
 * If the tokens are available, the function deducts the required number of tokens and updates the user's token count in Firestore.
 * The main useTokens function calls checkTokens before processing the action, and returns a 400 Bad Request error and a message if the required number of tokens is not available.
 */
export const useTokens = functions.https.onRequest(async (req, res) => {
  const userId = req.body.userId;
  const action = req.body.action;

  let tokensRequired = 0;
  if (action === 'processOrder') {
    tokensRequired = 50;
  } else if (action === 'generateReport') {
    tokensRequired = 100;
  }

  const tokensAvailable = await checkTokens(userId, tokensRequired);
  if (!tokensAvailable) {
    return res.status(400).send({
      message: 'Insufficient tokens. Please top up your tokens or subscribe to a new plan.'
    });
  }

  return res.status(200).send({
    message: `Successfully processed ${action}. Tokens deducted: ${tokensRequired}.`
  });
});