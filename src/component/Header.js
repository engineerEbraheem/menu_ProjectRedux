import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <Row className="justify-content-center my-2 rowStyle">
      <Col className="text-center colStyle" xs={8}>
        <div className="headDiv ">
          <h1 className="headTitle">قائمة الطعام</h1>
        </div>
      </Col>
    </Row>
  );
};

export default Header;
