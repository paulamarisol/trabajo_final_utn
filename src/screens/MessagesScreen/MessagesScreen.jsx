import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import MessageInput from "../../components/chat/MessageInput";
import { getMessages, saveMessages } from "../../service/storage";
import Message from "../../components/chat/Message";


export default function MessagesScreen({ chatId, goBack }) {
  const user = useContext(UserContext);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    setMessages(getMessages(chatId));
  }, [chatId]);

  const send = () => {
    if (!text) return;

    const msg = {
      id: crypto.randomUUID(),
      text,
      time: new Date().toLocaleTimeString(),
      status: "✓",
      userId: user.id
    };

    const updated = [...messages, msg];
    setMessages(updated);
    saveMessages(chatId, updated);
    setText("");
  };

  return (
    <div className="messages">
      <button className="back-btn" onClick={goBack}>←</button>

      {messages.map(m => (
        <Message key={m.id} msg={m} mine={m.userId === user.id} />
      ))}

      <MessageInput
        value={text}
        onChange={setText}
        onSend={send}
      />
    </div>
  );
}

