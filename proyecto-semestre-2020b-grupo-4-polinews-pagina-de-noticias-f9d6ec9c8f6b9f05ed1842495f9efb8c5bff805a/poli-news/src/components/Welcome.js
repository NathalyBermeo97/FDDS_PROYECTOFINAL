import { Row, Col, Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
import buho_2 from "../images/buho_2.png";

const Welcome = () => {
  return (
    <Row justify="center">
      <Col span={24}>
        <img src={buho_2} width={777} className="my-img" />
      </Col>
      <Row justify="center">
        <Col span={24} style={{ textAlign: "center", marginTop: "40px" }}>
          <h1 className="my-title">POLINEWS</h1>
          <p className="my-text">La mejor información en el mejor espacio</p>
          <Button className="my-btn">
            <Link to={Routes.REGISTER}> Registrarse</Link>
          </Button>
        </Col>
      </Row>
    </Row>
  );
};

export default Welcome;
