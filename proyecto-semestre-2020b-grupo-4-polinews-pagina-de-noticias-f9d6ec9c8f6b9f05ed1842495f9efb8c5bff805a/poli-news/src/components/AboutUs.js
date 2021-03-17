import React from "react";
import { Row, Col, Card } from "antd";
import buho_1 from "../images/buho_1.png";
import ander from "../images/ander.jpg";
import naty from "../images/naty.jpg";
import michael from "../images/michael.jpg";
import jose from "../images/jose.jpg";

const AboutUs = () => {
  const { Meta } = Card;

  return (
    <>
      <Row justify="center">
        <Col span={24}>
          <img src={buho_1} width={720} className="my-img" />
          <h1 className="my-title" style={{ marginTop: "11%" }}>
            EPN
          </h1>
        </Col>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <h1 className="my-title">QUIENES SOMOS ?</h1>
        </Col>
      </Row>
      <Row justify="center" style={{ marginLeft: "5%" }}>
        <Col span={6}>
          <Card
            hoverable
            className="my-card"
            style={{ width: 240 }}
            cover={<img alt="Scrum Master Ander" src={naty} />}
          >
            <Meta title="Nathaly Bermeo " description="Programmer" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            className="my-card"
            style={{ width: 240 }}
            cover={<img alt="Scrum Master Ander" src={michael} />}
          >
            <Meta title="Michael Guanoluisa" description="Programmer" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            className="my-card"
            style={{ width: 240 }}
            cover={<img alt="Scrum Master Ander" src={jose} />}
          >
            <Meta title="Jose Luis Colcha" description="Programmer" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            className="my-card"
            style={{ width: 240 }}
            cover={<img alt="Scrum Master Ander" src={ander} />}
          >
            <Meta title="Anderson Cordova" description="Scrum Master" />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default AboutUs;
