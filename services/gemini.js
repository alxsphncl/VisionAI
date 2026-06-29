const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

export async function analyzeImage(imageBase64) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: "Analyze this image and describe what you see.",
                },

                {
                  inline_data: {
                    mime_type: "image/jpeg",
                    data: imageBase64,
                  },
                },
              ],
            },
          ],
        }),
      },
    );

    const data = await response.json();

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log("Gemini Error:", error);

    return "Something went wrong.";
  }
}
