export default function Message({ msg, mine }) {
  return (
    <div className={`message ${mine ? "sent" : "received"}`}>
      <p>{msg.text}</p>
      <small>{msg.time} {mine && msg.status}</small>
    </div>
  );
}
