//Define a dictionary with model names and their respective prices for 1000 tokens
const model_prices = {
    "gpt-4-0314": {"8k": 0.03, "32k": 0.06},
    "gpt-4-32k-0314": {"8k": 0.06, "32k": 0.12},
    "gpt-3.5-turbo": {"8k": 0.002, "32k": 0.002},
    "text-davinci-003": {"8k": 0.02, "32k": 0.02},
    "text-curie-001": {"8k": 0.002, "32k": 0.002},
    "text-babbage-001": {"8k": 0.0005, "32k": 0.0005},
    "text-ada-001": {"8k": 0.0004, "32k": 0.0004}
}