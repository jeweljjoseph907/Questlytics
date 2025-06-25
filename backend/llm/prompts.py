def get_question_extraction_prompt(text: str, syllabus: str = "") -> str:
    if syllabus:
        return f"""
You are an academic assistant. Given the syllabus below and the study material, extract the 10 most important questions that are most relevant to the syllabus.

Syllabus:
{syllabus}

Study Material:
{text}

Return the questions as a numbered list.
"""
    else:
        return f"""
You are an academic assistant. From the following material, extract the 10 most important questions that could appear in exams.

Material:
{text}

Return the questions as a numbered list.
"""

def get_answer_generation_prompt(question: str, syllabus: str = "") -> str:
    if syllabus:
        return f"""
You are a subject expert. Based on the following syllabus, give a detailed and syllabus-aligned answer to the question.

Syllabus:
{syllabus}

Question:
{question}
"""
    else:
        return f"""
You are a subject expert. Give a detailed and clear answer to the question below.

Question:
{question}
"""
