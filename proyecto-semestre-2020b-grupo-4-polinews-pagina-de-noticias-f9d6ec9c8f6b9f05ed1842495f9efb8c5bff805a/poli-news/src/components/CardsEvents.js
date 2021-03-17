import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { db } from "../firebase";

const CardsEvents = () => {
  const { Meta } = Card;
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
      console.log("EVENTS", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {events.map((event, index) => {
            console.log("Time", event.time);
            return (
              <Col span={8} key={index}>
                <Card
                  title={event.name}
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
                  cover={<img alt="Not Found Image" src={event.photo} />}
                >
                  <Meta
                    title={
                      "Empieza       " +
                      event.time.toDate().getHours() +
                      ":" +
                      event.time.toDate().getMinutes()
                    }
                    description={event.description}
                    action={<Button> ASISTIRE </Button>}
                  />
                  <Button> ASISTIRE </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CardsEvents;
