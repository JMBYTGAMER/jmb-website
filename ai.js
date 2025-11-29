async function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  if (!input.value.trim()) return;

  const userMsg = input.value;

  chatBox.innerHTML += `<div><b>You:</b> ${userMsg}</div>`;
  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  const reply = await freeAI(userMsg);

  chatBox.innerHTML += `<div><b>AI:</b> ${reply}</div>`;
  chatBox.scrollTop = chatBox.scrollHeight;
}

async function freeAI(msg) {
  try {
    const res = await fetch("https://api-inference.huggingface.co/models/tiiuae/falcon-7b-instruct", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ inputs: msg })
    });

    const data = await res.json();
    return data[0]?.generated_text || "AI Error";
  } catch {
    return "AI not responding";
  }
}
