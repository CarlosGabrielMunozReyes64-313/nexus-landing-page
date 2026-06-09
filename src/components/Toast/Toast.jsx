import './Toast.css';
// Notificación tipo toast. Su visibilidad la controla el componente padre
// mediante la prop `show`.
export default function Toast({ show, message }) {
  return <div className={`toast${show ? ' show' : ''}`}>{message}</div>
}
