import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { db } from "../firebase";

const CardsInterships = () => {
  const { Meta } = Card;
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
      console.log("Interships", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {interships.map((intership, index) => {
            return (
              <Col span={8} key={index}>
                <Card
                  title={intership.load}
                  bordered={false}
                  hoverable
                  className="my-card"
                  style={{
                    width: 300,
                    textAlign: "center",
                    backgroundColor: "#151f33",
                    marginTop: "2%",
                    //color: '#ffffff',
                  }}
                  cover={<img alt="Not Found Image" src={intership.photo} />}
                >
                  <Meta
                    title={
                      "Horario      " +
                      intership.duration[0].toDate().getHours() +
                      ":" +
                      intership.duration[0].toDate().getMinutes() +
                      "finaliza" +
                      intership.duration[1].toDate().getHours() +
                      ":" +
                      intership.duration[1].toDate().getMinutes()
                    }
                    description={intership.description}
                  />
                  <Button> Postulate ya! </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CardsInterships;
