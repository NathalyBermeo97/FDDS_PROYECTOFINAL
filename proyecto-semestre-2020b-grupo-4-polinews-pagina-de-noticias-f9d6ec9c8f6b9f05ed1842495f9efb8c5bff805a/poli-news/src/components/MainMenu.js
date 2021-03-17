import React, { useState, useEffect } from "react";
import { Button, Menu, Avatar } from "antd";
import { Link } from "react-router-dom";
import { useAuth } from "../lib/Auth";
import { db } from "../firebase";
import Routes from "../constants/Routes";
import menuItems from "../constants/Items";
import menuLogout from "../constants/ItemsLogout";
import male_student from "../images/male_student.png";
import female_student from "../images/female_student.png";
import female_teacher from "../images/female_teacher.png";
import male_teacher from "../images/male_teacher.png";

const MainMenu = () => {
  const { user, logout } = useAuth();
  const [avatar, SetAvatar] = useState("");

  useEffect(() => {
    fetchAvatar();
  }, [user]);

  const fetchAvatar = async () => {
    try {
      console.log("USUARIO", user);
      const uid = await user.uid;
      const doc = await db.collection("users").doc(uid).get();
      console.log("REF", doc.data());
      const data = doc.data();
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
    <Menu theme="dark" mode="horizontal" style={{ fontSize: "1.2rem" }}>
      {user
        ? menuItems.map((item, index) => {
            return (
              <>
                <Menu.Item key={index}>
                  <Link to={item.to}>{item.text}</Link>
                </Menu.Item>
              </>
            );
          })
        : menuLogout.map((item, index) => {
            return (
              <>
                <Menu.Item key={index} style={{ float: "right" }}>
                  <Link to={item.to}>{item.text}</Link>
                </Menu.Item>
              </>
            );
          })}
      {user ? (
        <>
          <Menu.Item style={{ float: "right" }}>
            <Link to={Routes.HOME_NO_LOGIN}>
              <Button
                type="link"
                onClick={logout}
                style={{ color: "#a6adb4", fontSize: "1.2rem" }}
              >
                SALIR
              </Button>
            </Link>
          </Menu.Item>
          <Menu.Item style={{ float: "right" }}>
            <Link to={Routes.PROFILE}>
              <Avatar src={avatar} size={60} />
              MI PERFIL
            </Link>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item>
            <Link to={Routes.HOME_NO_LOGIN}>INICIO</Link>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
};

export default MainMenu;
