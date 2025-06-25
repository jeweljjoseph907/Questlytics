from llm.config import get_groq_client
from llm.prompts import get_answer_generation_prompt

def generate_answers(questions: list[str], syllabus: str = "") -> list[tuple[str, str]]:
    client = get_groq_client()
    qa_pairs = []

    for q in questions:
        prompt = get_answer_generation_prompt(q, syllabus)
        response = client.ChatCompletion.create(
            model="mixtral-8x7b-32768",
            messages=[
                {"role": "system", "content": "You are a knowledgeable tutor."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5,
            max_tokens=400,
        )
        answer = response['choices'][0]['message']['content'].strip()
        qa_pairs.append((q, answer))

    return qa_pairs
