

import { Col, Row } from "react-bootstrap";
import "./style.css";

const Loading = () => {

  return (
    <Row >
       <Col className="align-loader"> <div className="lds-dual-ring"></div></Col>
    </Row>
  );
};

export default Loading;