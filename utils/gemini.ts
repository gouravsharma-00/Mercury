// Import the GoogleGenerativeAI class
import { GoogleGenerativeAI } from '@google/generative-ai';

// Access your API key (it's crucial to use environment variables for security)
// Make sure you have a .env.local file with GEMINI_API_KEY=YOUR_API_KEY_HERE
const API_KEY = process.env.GOOGLE_API;

if (!API_KEY) {
  console.error("GEMINI_API_KEY is not set in your environment variables.");
}

// Initialize the Generative AI client
const genAI = new GoogleGenerativeAI({ apiKey: API_KEY });

async function Run() {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = "hello";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

export default Run;