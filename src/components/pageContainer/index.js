import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import AppContext from "../../appContext/Context";
import "./style.css";

const PageContainer = ({ children }) => {
  const { setScrollPositon } = useContext(AppContext);

  const handleHeader = ({ scrollTop }) => {
    scrollTop > "100" ? setScrollPositon("down") : setScrollPositon("up");
  };
  return (
    <section
      id="page-container"
      onScroll={(event) => handleHeader(event.target)}
    >
      <div id="page-content" className="align-content">
        <Row>
          <Col lg={{ span: 6, offset: 3 }}>{children}</Col>
        </Row>
      </div>
    </section>
  );
};

export default PageContainer;
