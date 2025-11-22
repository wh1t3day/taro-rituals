import { GoogleGenAI } from "@google/genai";

// Helper to retrieve the API key safely
const getApiKey = () => {
  // This handles the 'process.env.API_KEY' replacement from vite.config.ts
  return process.env.API_KEY; 
};

export const askOracle = async (question: string): Promise<string> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    console.warn("API Key is missing");
    return "Энергия Вселенной сейчас недоступна (API Key не настроен). Пожалуйста, добавьте VITE_API_KEY в настройках Vercel.";
  }

  try {
    // Initialize specifically for this request to ensure fresh config
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `User question: ${question}`,
      config: {
        systemInstruction: `Ты — древний мистический оракул сайта Ezotveril. Твой тон загадочный, но доброжелательный и мудрый.
        Пользователь задает вопрос. Дай ему короткий (максимум 3-4 предложения), метафоричный, но полезный совет.
        Используй эзотерическую терминологию (энергии, потоки, арканы, вибрации), но оставайся понятным.
        В конце обязательно добавь фразу: "Звезды благоволят смелым."`,
        temperature: 0.8,
      }
    });
    return response.text || "Туман скрывает будущее...";
  } catch (error) {
    console.error("Oracle error:", error);
    return "Эфирные помехи нарушили связь. Попробуйте еще раз позже.";
  }
};

export const generateDailyEnergy = async (): Promise<{ title: string; text: string }> => {
  const apiKey = getApiKey();
  if (!apiKey) {
    return { title: "Карта дня", text: "Слушайте свое сердце (API Key не найден)." };
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: "Generate a daily esoteric forecast.",
      config: {
        systemInstruction: `Сгенерируй "Энергию дня" для посетителя эзотерического сайта.
        Верни JSON с полями:
        - title: Короткое мистическое название дня (например, "День Лунной Тени").
        - text: Совет на день (2-3 предложения).`,
        responseMimeType: "application/json"
      }
    });
    
    const text = response.text;
    if (!text) throw new Error("No text returned");
    return JSON.parse(text);
  } catch (error) {
    console.error("Daily energy error:", error);
    return { title: "Тишина Эфира", text: "Сегодня день для внутренней тишины и медитации." };
  }
};