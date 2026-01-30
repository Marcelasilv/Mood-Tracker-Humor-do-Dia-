const moods = {
  happy: { text: "Que bom! Continue assim 😄", color: "#d4f4dd" },
  neutral: { text: "Tudo bem, um passo de cada vez 😐", color: "#f4f4f4" },
  sad: { text: "Vai passar 💙", color: "#dbeafe" },
  angry: { text: "Respira fundo 😡", color: "#fee2e2" }
};

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    const mood = btn.dataset.mood;
    document.body.style.background = moods[mood].color;
    document.getElementById("result").innerText = moods[mood].text;
    localStorage.setItem("mood", mood);
  });
});
