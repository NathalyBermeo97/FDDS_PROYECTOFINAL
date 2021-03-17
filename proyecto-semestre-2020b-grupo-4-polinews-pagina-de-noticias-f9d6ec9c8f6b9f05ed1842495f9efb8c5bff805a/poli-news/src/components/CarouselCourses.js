import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Carousel, Typography, Row, Col, Image } from "antd";

const CarouselCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const snap = await db.collection("courses").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setCourses(docs);

      console.log("CURSOS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <Carousel autoplay>
      {courses.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.courseName}
                </p>
                <p className="my-text">{item.description}</p>
                <br />
                <p className="my-text">Sílabo</p>
                <p className="my-text">{item.silabo}</p>
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
export default CarouselCourses;
