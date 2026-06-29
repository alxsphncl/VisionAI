const API_KEY = process.env.EXPO_PUBLIC_GEMINI_API_KEY;

console.log("API KEY:", API_KEY?.slice(0, 8));

export async function analyzeImage(imageBase64) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
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
                  text: "Describe this image.",
                },

                {
                  inlineData: {
                    mimeType: "image/jpeg",
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

    console.log("STATUS:", response.status);
    console.log("FULL GEMINI RESPONSE:", data);

    if (data.error) {
      return data.error.message;
    }

    if (!data.candidates) {
      return "No response from Gemini";
    }

    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.log("Gemini Error:", error);

    return "Something went wrong";
  }
}
