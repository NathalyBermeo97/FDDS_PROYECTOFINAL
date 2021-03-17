import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Carousel, Typography, Row, Col, Image } from "antd";

const CarouselEvents = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const snap = await db.collection("events").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setEvents(docs);

      console.log("EVENTOS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <Carousel autoplay>
      {events.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.name}
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
export default CarouselEvents;
