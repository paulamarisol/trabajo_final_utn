function sendMessage() {
  const input = document.getElementById("msgInput");
  const text = input.value.trim();

  if (text === "") return;

  const msg = document.createElement("div");
  msg.className = "message sent";
  msg.textContent = text;

  document.getElementById("messages").appendChild(msg);
  input.value = "";
}
