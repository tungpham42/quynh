import axios from "axios";

export const speak = async (text: string) => {
  if (!text) return;

  try {
    const response = await axios.get(
      `https://googlespeak.netlify.app/api/tts?text=${text}&lang=ja`
    );

    if (response.data && response.data.audioContent) {
      const audio = new Audio(response.data.audioContent);
    }
    const url = `/.netlify/functions/tts?text=${encodeURIComponent(text)}`;

    // Create a new Audio object and play it
    const audio = new Audio(response.data.audioContent);

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      alert("Không thể phát âm thanh.");
    });
  } catch (error) {
    console.error("Error initializing audio:", error);
  }
};
