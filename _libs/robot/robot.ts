import { GoogleGenAI } from '@google/genai';

const API = process.env.GOOGLE_API;

const ai = new GoogleGenAI({apiKey: API});

export default async function robot() {

  const response = await ai.models.generateContent({
    model: 'gemini-2.0-flash-001',
    contents: 'Why is the sky blue?',
  });

  console.log(response.text);
}
