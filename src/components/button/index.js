import "./style.css";
const Button = ({ children, ...rest }) => {
  return (
    <button className="btn btn-class" {...rest}>
      {children}
    </button>
  );
};

export default Button;
