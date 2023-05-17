import * as functions from 'firebase-functions';
import { checkTokens } from './check-tokens';

/**
 * To use the checkTokens function in another Cloud Function, you just need to import it and call it as necessary. Here's an example:
 */
export const anotherCloudFunction = functions.https.onRequest(async (req, res) => {
  const userId = req.body.userId;
  const tokensRequired = 50;

  const tokensAvailable = await checkTokens(userId, tokensRequired);
  if (!tokensAvailable) {
    return res.status(400).send({
      message: 'Insufficient tokens. Please top up your tokens or subscribe to a new plan.'
    });
  }

  // Do other processing here
  // ...

  return res.status(200).send({
    message: 'Successfully processed action. Tokens deducted: 50.'
  });
});

/**
 * In this example, anotherCloudFunction imports the checkTokens function and calls it to check the availability of tokens before processing the action.
 * If the required number of tokens is not available, it returns a 400 Bad Request error and a message.
 */