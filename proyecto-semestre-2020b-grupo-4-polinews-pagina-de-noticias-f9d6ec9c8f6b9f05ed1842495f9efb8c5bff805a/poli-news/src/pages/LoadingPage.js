import React from "react";
import { Row, Col } from "antd";
import Footer from "../components/Footer";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingPage = () => {
  const styleDiv = {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const styleIcon = {
    fontSize: "420px",
    verticalAlign: "middle",
    display: "inline-block",
  };

  return (
    <>
      <Row type="flex" align="middle">
        <Col span={24} style={styleDiv}>
          <i>
            <h1 className="my-title">Cargando...</h1>
          </i>
          <LoadingOutlined style={styleIcon} />
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default LoadingPage;
