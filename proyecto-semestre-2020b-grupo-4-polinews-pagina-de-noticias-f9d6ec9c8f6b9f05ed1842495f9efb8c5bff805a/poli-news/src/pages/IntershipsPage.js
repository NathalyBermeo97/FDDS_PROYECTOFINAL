import React from "react";
import withAuth from "../hocs/withAuth";
import { Col, Image, Row } from "antd";
import FormIntershipsOfer from "../components/FormIntershipsOfer";
import Footer from "../components/Footer";
import CardsInterships from "../components/CardsInterships";

const IntershipsPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">PASANTIAS & VACANTES</h1>
      <hr />
      <CardsInterships />
      <Row justify="center">
        <Col>
          <h1>Ofertar pasantias</h1>
          <FormIntershipsOfer />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default withAuth(IntershipsPage);
