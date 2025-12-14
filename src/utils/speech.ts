export const speak = (text: string) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "zh-CN"; // Set ngôn ngữ là Tiếng Trung
    utterance.rate = 0.8; // Tốc độ đọc chậm lại một chút cho người học
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt của bạn không hỗ trợ phát âm.");
  }
};
