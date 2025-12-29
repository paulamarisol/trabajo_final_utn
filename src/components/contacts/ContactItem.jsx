export default function ContactItem({ name, onClick }) {
  return <div className="contact" onClick={onClick}>{name}</div>;
}
