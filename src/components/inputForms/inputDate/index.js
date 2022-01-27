import React, { useState } from "react";
import { Field } from "formik";
import ErrorMsg from "../components/errorMsg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import "./style.css";
const InputDate = ({
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
            <DatePicker className="form-control" {...rest} />
          )}
        />
        <ErrorMsg name={name} />
      </div>
    </>
  );
};

export default InputDate;
