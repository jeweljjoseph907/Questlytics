from llm.config import get_groq_client
from llm.prompts import get_question_extraction_prompt

def extract_questions(text: str, syllabus: str = "") -> list[str]:
    prompt = get_question_extraction_prompt(text, syllabus)

    client = get_groq_client()
    response = client.ChatCompletion.create(
        model="mixtral-8x7b-32768",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.5,
        max_tokens=700,
    )

    content = response['choices'][0]['message']['content']
    questions = [line.strip("1234567890. ") for line in content.strip().split("\n") if line.strip()]
    return questions
