import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { Row, Col, Image, Carousel, Typography } from "antd";

const CarouselNews = () => {
  const { Title } = Typography;
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const snap = await db.collection("news").get();
      const docs = snap.docs.map((doc, index) => {
        console.log("data", doc.data());
        return { ...doc.data(), key: index };
      });
      console.log(docs);
      setNews(docs);
      //setNews(news.docs);
      console.log("NEWS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <Carousel autoplay>
      {news.map((item) => {
        return (
          <>
            <Row justify="center">
              <Col span={12}>
                <p className="my-text" style={{ color: "#ffbf0f" }}>
                  {item.title}
                </p>
                <p className="my-text">{item.text}</p>
              </Col>
              <Col span={12}>
                <Image src={item.src} />
              </Col>
            </Row>
          </>
        );
      })}
    </Carousel>
  );
};
export default CarouselNews;
