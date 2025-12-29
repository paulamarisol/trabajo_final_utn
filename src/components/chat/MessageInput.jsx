export default function MessageInput({ value, onChange, onSend }) {
  return (
    <div className="input">
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        onKeyDown={e => e.key === "Enter" && onSend()}
        placeholder="Escribe un mensaje"
      />
      <button onClick={onSend}>Enviar</button>
    </div>
  );
}
