async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  if (!input.value.trim()) return;

  chatBox.innerHTML += `<div class='message user'>${input.value}</div>`;
  const userMsg = input.value;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  const reply = await freeAI(userMsg);

  chatBox.innerHTML += `<div class='message bot'>${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function freeAI(msg) {
  try {
    const res = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-small", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: msg }),
    });

    const data = await res.json();
    return data[0]?.generated_text || "AI Error";
  } catch (e) {
    return "AI not responding";
  }
}
