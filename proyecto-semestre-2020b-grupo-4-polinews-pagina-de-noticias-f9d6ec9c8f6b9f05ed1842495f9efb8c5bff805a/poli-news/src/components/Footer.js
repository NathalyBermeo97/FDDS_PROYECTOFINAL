import React from "react";
import { Col, Layout, Row, Image } from "antd";
import { Link } from "react-router-dom";
import buho_1 from "../images/buho_1.png";
import { useAuth } from "../lib/Auth";
import menuItems from "../constants/Items";
import contactItems from "../constants/Contacts";
import menuLogout from "../constants/ItemsLogout";

const Footer = () => {
  const { user } = useAuth();
  const { Footer } = Layout;

  return (
    <Footer className="my-footer">
      <Row>
        <Col span={8}>
          <h2 className="text-footer">
            POLINEWS <hr />
          </h2>
          <Image src={buho_1} width={420} />
        </Col>
        <Col span={8}>
          <h2 className="text-footer">
            SERVICIOS <hr />
          </h2>
          {user
            ? menuItems.map((item) => {
                return (
                  <>
                    <h3>
                      <Link to={item.to} style={{ color: "#ffffff" }}>
                        {item.text}{" "}
                      </Link>
                    </h3>
                  </>
                );
              })
            : menuLogout.map((item) => {
                return (
                  <>
                    <h3>
                      <Link to={item.to} style={{ color: "#ffffff" }}>
                        {item.text}
                      </Link>
                    </h3>
                  </>
                );
              })}
        </Col>
        <Col span={8}>
          <h2 className="text-footer">
            CONTACTOS <hr />
          </h2>
          {contactItems.map((item) => {
            return (
              <>
                <h2>
                  <a
                    className="text-footer"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.icon} {item.text}
                  </a>
                </h2>
              </>
            );
          })}
        </Col>
      </Row>
      <h2 className="text-footer">PoliNews ©2021 All rigth reserved</h2>
    </Footer>
  );
};
export default Footer;
