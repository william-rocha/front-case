import { Col, Row } from "react-bootstrap";
import { Field } from "formik";
const Check = ({ label, name, ...rest }) => {
  return (
    <Row className="mt-3 py-2">
      <Col>
        <div className="form-check">
          <Field
            className="form-check-input"
            type="checkbox"
            name={name}
            id={name}
            {...rest}
          />
          <label className="form-check-label" htmlFor={name}>
            {label}
          </label>
        </div>
      </Col>
    </Row>
  );
};

export default Check;
