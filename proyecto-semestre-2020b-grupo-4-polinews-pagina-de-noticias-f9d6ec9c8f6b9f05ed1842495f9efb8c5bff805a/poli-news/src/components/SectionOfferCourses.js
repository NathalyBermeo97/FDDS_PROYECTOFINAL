import React from "react";
import { Col, Row, Typography, Image, Button } from "antd";
import computadora from "../images/computadora.jpg";
import FormCoursesOffer from "../components/FormCoursesOffer";

const SeccionOfferCourses = () => {
  const { Title } = Typography;

  return (
    <div className="contacts" style={{ textAlign: "center" }}>
      <Row>
        <Col span={24}>
          <Title level={1}> Deseas impartir un curso?</Title>
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Image src={computadora} width={420} />
        </Col>

        <Col span={8}>
          <h1>Únete a nuestra comunidad</h1>
          <p style={{ textAlign: "top" }}>
            Si deseas impartir un curso puedes hacerlo, contamos con el servicio
            para que puedas publicar tu curso, acontinuación llena nuestro
            formulario de publicación.
          </p>

          <FormCoursesOffer />
        </Col>
      </Row>
    </div>
  );
};
export default SeccionOfferCourses;
