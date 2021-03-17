import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Carousel, Typography, Row, Col, Image } from "antd";

const CarouselInterships = () => {
  const { Title } = Typography;
  const [interships, setInterships] = useState([]);

  useEffect(() => {
    fetchInterships();
  }, []);

  const fetchInterships = async () => {
    try {
      const snap = await db.collection("interships").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setInterships(docs);

      console.log("PASANTIAS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <Carousel autoplay>
      {interships.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.load}
                </p>
                <p className="my-text">{item.description}</p>
              </Col>
              <Col span={12}>
                <Image src={item.photo} />
              </Col>
            </Row>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselInterships;
