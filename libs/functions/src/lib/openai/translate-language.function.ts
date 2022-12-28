// import openai

// # Set your API key
// openai.api_key = "YOUR_API_KEY"

// # Set the model to use
// model_engine = "text-davinci-002"

// # Set the text to translate
// text = "Hello, how are you?"

// # Set the source and target languages
// source_language = "en"
// target_language = "sw"

// # Translate the text
// translation = openai.Completion.create(
//     engine=model_engine,
//     prompt=f"translate to {target_language}: {text}",
//     max_tokens=1024,
//     n=1,
//     stop=None,
//     temperature=0.7,
// )

// # Print the translation
// print(translation.choices[0].text)