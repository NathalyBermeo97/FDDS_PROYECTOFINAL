import React, { useState, useEffect } from "react";
import { Card, Row, Col, Button } from "antd";
import { db } from "../firebase";

const CardsCourses = () => {
  const { Meta } = Card;
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
      console.log("Courses", docs);
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <div className="site-card-wrapper">
        <Row justify="center">
          {courses.map((course, index) => {
            return (
              <Col span={8} key={index}>
                <Card
                  title={course.courseName}
                  bordered={false}
                  hoverable
                  className="my-card"
                  style={{
                    width: 350,
                    textAlign: "center",
                    backgroundColor: "#151f33",
                    marginTop: "2%",
                    //color: '#ffffff',
                  }}
                  cover={<img alt="Not Found Image" src={course.photo} />}
                >
                  <Meta
                    title={"Profesor: " + course.name + course.lastName}
                    description={
                      "Empieza:  " +
                      course.date[0].toDate() +
                      "                     " +
                      " Hasta:  " +
                      course.date[1].toDate() +
                      "                     " +
                      course.description
                    }
                    //description={" Hasta " + course.date[1].toDate()}
                    //description={course.description}
                  />
                  <br />
                  <br />
                  <Button> INSCRIBIRSE </Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default CardsCourses;
