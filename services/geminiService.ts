import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askOracle = async (question: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Энергия Вселенной сейчас недоступна (API Key missing). Пожалуйста, настройте API_KEY.";
  }

  try {
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
    return "Эфирные помехи нарушили связь. Попробуйте еще раз.";
  }
};

export const generateDailyEnergy = async (): Promise<{ title: string; text: string }> => {
  if (!process.env.API_KEY) {
    return { title: "Карта дня", text: "Слушайте свое сердце." };
  }

  try {
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