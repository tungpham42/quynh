export const speak = (text: string) => {
  if (!text) return;

  try {
    const url = `/.netlify/functions/tts?text=${encodeURIComponent(text)}`;

    // Create a new Audio object and play it
    const audio = new Audio(url);

    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
      alert("Không thể phát âm thanh.");
    });
  } catch (error) {
    console.error("Error initializing audio:", error);
  }
};
