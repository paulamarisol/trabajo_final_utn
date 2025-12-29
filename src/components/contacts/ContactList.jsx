import ContactItem from "./ContactItem";

export default function ContactList({ setChat }) {
  return (
    <>
      <ContactItem name="Diplomatura" onClick={() => setChat("diplomatura")} />
      <ContactItem name="Franco" onClick={() => setChat("franco")} />
    </>
  );
}
