import { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const text = event.queryStringParameters?.text;

  if (!text) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing 'text' parameter" }),
    };
  }

  // Construct the Google TTS URL
  // tl=zh targets Chinese
  const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=zh&q=${encodeURIComponent(
    text
  )}`;

  try {
    const response = await fetch(googleTtsUrl);

    if (!response.ok) {
      throw new Error(`Google TTS API responded with ${response.status}`);
    }

    // Get the binary data (ArrayBuffer) from the response
    const arrayBuffer = await response.arrayBuffer();

    // Convert to Buffer to handle binary data in Node.js
    const buffer = Buffer.from(arrayBuffer);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Cache-Control": "public, max-age=86400", // Cache for 24 hours
      },
      // Netlify functions require binary data to be base64 encoded
      body: buffer.toString("base64"),
      isBase64Encoded: true,
    };
  } catch (error) {
    console.error("TTS Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to fetch audio" }),
    };
  }
};
