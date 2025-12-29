export default function ChatScreen({ onOpenChat }) {
  return (
    <div style={{ height: "100vh", background: "#e5ddd5" }}>
      
      <div style={{
        padding: "16px",
        background: "#075e54",
        color: "white",
        fontSize: "20px"
      }}>
        WhatsApp
      </div>

      <div
        style={{ padding: "16px", cursor: "pointer" }}
        onClick={() => onOpenChat("chat-1")}
      >
        <strong>Mamá</strong>
        <div>Hola hija</div>
      </div>

      <div
        style={{ padding: "16px", cursor: "pointer" }}
        onClick={() => onOpenChat("chat-2")}
      >
        <strong>Amiga</strong>
        <div>¿Salimos hoy?</div>
      </div>

    </div>
  );
}

