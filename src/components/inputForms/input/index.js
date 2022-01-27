import { Field } from "formik";
import ErrorMsg from "../components/errorMsg";
import "./style.css";
const Input = ({ name, errors, touched, label, ...rest }) => {
  return (
    <>
      <div className="mt-3 input-form">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field name={name} {...rest} className="form-control" id={name} />
        <ErrorMsg name={name} />
      </div>
    </>
  );
};

export default Input;
