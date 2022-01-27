import { Field } from "formik";
import InputMask from "react-input-mask";
import ErrorMsg from "../components/errorMsg";
import "./style.css";
const InputMasked = ({
  name,
  errors,
  touched,
  label,
  setFieldValue,
  ...rest
}) => {
  return (
    <>
      <div className="mt-3 input-form">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <Field
          className="form-control"

          render={({ field }) => (
            <InputMask
              className="form-control"

              {...rest}
            />
          )}

          // {...rest}
        />
        <ErrorMsg name={name} />
      </div>
    </>
  );
};

export default InputMasked;
