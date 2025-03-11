import "./Button.css";

const Button = ({ id, value, onClick }) => (
  <button id={id} onClick={() => onClick(value)}>
    {value}
  </button>
);

export default Button;