import { ErrorMessage } from "formik";
import "./style.css"
const ErrorMsg = ({ name }) => {
  return <ErrorMessage  name={name} render={(msg) => <div className="error-msg">{msg}</div>} />;
};

export default ErrorMsg;
