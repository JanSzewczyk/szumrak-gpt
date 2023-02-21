import openai from "./index";

export async function query(prompt: string, model: string) {
  return await openai
    .createCompletion({
      model,
      prompt,
      temperature: 0.7,
      top_p: 1,
      max_tokens: 1000,
      frequency_penalty: 0,
      presence_penalty: 0
    })
    .then((res) => res.data.choices[0].text)
    .catch((error) => {
      return `ChatGPT was unable to find an answer for that! (Error: ${error.message})`;
    });
}

export default query;
