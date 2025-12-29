import ContactList from "../contacts/ContactList";

export default function Sidebar({ setChat }) {
  return (
    <aside className="sidebar">
      <h2>WhatsApp</h2>
      <ContactList setChat={setChat} />
    </aside>
  );
}
