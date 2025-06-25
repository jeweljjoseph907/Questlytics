import openai
import os

# Groq API Key
GROQ_API_KEY = os.getenv("GROQ_API_KEY", "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")

openai.api_key = GROQ_API_KEY
openai.api_base = "https://api.groq.com/openai/v1"

def get_groq_client():
    return openai
