import React, { useState, useEffect } from "react";
import { Row, Col, Avatar } from "antd";
import { useAuth } from "../lib/Auth";
import { db } from "../firebase";
import male_student from "../images/male_student.png";
import female_student from "../images/female_student.png";
import female_teacher from "../images/female_teacher.png";
import male_teacher from "../images/male_teacher.png";

import withAuth from "../hocs/withAuth";

const ProfileInfo = () => {
  const { user } = useAuth();
  const [avatar, SetAvatar] = useState("");

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  const fetchAvatar = async () => {
    try {
      const uid = await user.uid;
      const doc = await db.collection("users").doc(uid).get();
      const data = await doc.data();

      if (data.gender == "male") {
        if (data.status == "student") {
          SetAvatar(male_student);
        } else {
          SetAvatar(male_teacher);
        }
      } else {
        if (data.status == "student") {
          SetAvatar(female_student);
        } else {
          SetAvatar(female_teacher);
        }
      }
    } catch (e) {
      console.log("ERROR", e);
    }
  };

  return (
    <>
      <Row justify="center">
        <Col span={12}>
          <Avatar
            src={avatar}
            size={420}
            style={{ border: "2.5px solid #ffbf0f" }}
          />
        </Col>
        <Col span={12}>
          <h1 className="text-title">
            Nombre:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.name}
            </h1>
          </h1>
          <h1 className="text-title">
            Apellido:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.lastname}
            </h1>
          </h1>
          <h1 className="text-title">
            Fecha de nacimiento:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {user.date.toDate().getDate()}
            </h1>
          </h1>
          <h1 className="text-title">
            Correo electrónico:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.email}
            </h1>
          </h1>
          <h1 className="text-title">
            Tipo de Usuario:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.status}
            </h1>
          </h1>
          <h1 className="text-title">
            Telefono:{"  "}
            <h1 className="my-text" style={{ display: "inline-block" }}>
              {" "}
              {user.phone}
            </h1>
          </h1>
        </Col>
      </Row>
    </>
  );
};

export default withAuth(ProfileInfo);
