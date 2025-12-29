import { useState, useEffect } from "react";
import "./App.css";

const contacts = [
  { name: "Diplomatura", image: "https://i.pravatar.cc/100?img=1" },
  { name: "Kevin", image: "https://i.pravatar.cc/100?img=2" },
  { name: "Alejandra", image: "https://i.pravatar.cc/100?img=3" },
  { name: "Vale", image: "https://i.pravatar.cc/100?img=4" },
  { name: "Laura", image: "https://i.pravatar.cc/100?img=5" },
  { name: "Sabrina", image: "https://i.pravatar.cc/100?img=6" },
];

function App() {
  const [messages, setMessages] = useState({
    Diplomatura: [
      { text: "Hola, ¿hiciste el trabajo?", type: "received", time: "14:45", read: true },
      { text: "Sí, ya lo estoy terminando.", type: "sent", time: "14:46", read: true },
    ],
    Kevin: [{ text: "¿Estás?", type: "received", time: "13:20", read: false }],
    Alejandra: [{ text: "¡No sabes a quién vi!", type: "received", time: "12:30", read: false }],
    Vale: [],
    Laura: [],
    Sabrina: [],
  });

  const [chats, setChats] = useState([
    { name: "Diplomatura", unreadCount: 0 },
    { name: "Kevin", unreadCount: 2 },
    { name: "Alejandra", unreadCount: 1 },
    { name: "Vale", unreadCount: 0 },
    { name: "Laura", unreadCount: 0 },
    { name: "Sabrina", unreadCount: 0 },
  ]);

  const [currentContact, setCurrentContact] = useState("Diplomatura");
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(true);
    const timer = setTimeout(() => setIsOnline(false), 8000);
    return () => clearTimeout(timer);
  }, [currentContact]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => ({
      ...prev,
      [currentContact]: [
        ...(prev[currentContact] || []),
        { text: input, type: "sent", time, read: false },
      ],
    }));

    setInput("");
    setTimeout(() => {
      setMessages((prev) => ({
        ...prev,
        [currentContact]: prev[currentContact].map((m) =>
          m.type === "sent" ? { ...m, read: true } : m
        ),
      }));
    }, 1500);
  };


  const selectContact = (name) => {
    setCurrentContact(name);
    setChats((prev) =>
      prev.map((chat) =>
        chat.name === name ? { ...chat, unreadCount: 0 } : chat
      )
    );
  };

  const filteredContacts = contacts.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>

      <aside className="sidebar">
        <h2>Chats</h2>

        <input
          placeholder="Buscar chat..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button className="dark-btn" onClick={() => setDarkMode(!darkMode)}>
          🌙 {darkMode ? "Modo claro" : "Modo oscuro"}
        </button>

        <ul className="chat-list">
          {filteredContacts.map((contact) => {
            const chat = chats.find((c) => c.name === contact.name);
            return (
              <li
                key={contact.name}
                className="chat-item"
                onClick={() => selectContact(contact.name)}
              >
                <img src={contact.image} alt={contact.name} />
                <span>{contact.name}</span>

                {chat?.unreadCount > 0 && (
                  <span className="unread-badge">{chat.unreadCount}</span>
                )}
              </li>
            );
          })}
        </ul>
      </aside>

      <main className="chat">
        <header className="chat-header">
          <div>
            <strong>{currentContact}</strong>
            <div className="chat-status">
              {isOnline ? "En línea" : "Últ. vez hoy"}
            </div>
          </div>
        </header>

        <section className="messages">
          {(messages[currentContact] || []).map((m, i) => (
            <div key={i} className={`message ${m.type}`}>
              <div>{m.text}</div>
              <div className="message-time">
                {m.time}
                {m.type === "sent" && (
                  <span className={`check ${m.read ? "read" : ""}`}> ✔✔</span>
                )}
              </div>
            </div>
          ))}
        </section>

        <footer className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un mensaje..."
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Enviar</button>
        </footer>
      </main>
    </div>
  );
}

export default App;
