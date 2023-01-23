
/**Before the API processes the prompts, the input is broken down into tokens. These tokens are not cut up exactly where the words start or end - tokens can include trailing spaces and even sub-words. Here are some helpful rules of thumb for understanding tokens in terms of lengths:

1 token ~= 4 chars in English

1 token ~= ¾ words

100 tokens ~= 75 words

Or 

1-2 sentence ~= 30 tokens

1 paragraph ~= 100 tokens

1,500 words ~= 2048 tokens

================================================================
**  
================================================================
This function splits the input text into sentences using regular expressions. Then for each sentence, it tokenizes the sentence using regular expressions and counts the number of tokens, and words by splitting the sentence using regular expressions. The function then keeps a running total of the number of tokens and words and logs the total number of tokens and words at the end.

You can use the following formula to calculate the approximate number of words,
num_words = (num_tokens * 4) / 3

You can use the above formula to calculate the approximate number of words used by the user in their prompts, based on the number of tokens calculated by the above function.

You can also use the following formulas to approximate the number of tokens and words based on the number of characters, sentences, or paragraphs.
num_tokens = num_chars / 4
num_words = num_tokens * 3 / 4
num_tokens = num_sentences * 30
num_tokens = num_paragraphs * 100
num_words = num_tokens * 3 / 4
num_words = num_chars / 4 * 3 / 4

This is a rough approximation and the actual number of tokens and words may vary depending on the text.
*/
export const calculateTokensAndWords = (prompts: string) => {
  let totalTokens = 0;
  let totalWords = 0;

  // Split the prompts into an array of sentences
  const sentences = prompts.split(/[.!?]+/);

  sentences.forEach(sentence => {
    // Tokenize the sentence
    const tokens = sentence.split(/\s+/);

    // Count the number of tokens
    totalTokens += tokens.length;

    // Count the number of words
    totalWords += sentence.split(/\s+/).length;
  });

  console.log("Total number of tokens:", totalTokens);
  console.log("Total number of words:", totalWords);
  // TODO: create a model for the result.
  return {
    tokens: totalTokens,
    words: totalWords
  }
}
