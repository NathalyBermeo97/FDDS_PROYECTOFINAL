import React from "react";
import { Row, Col } from "antd";
import { createFromIconfontCN, YoutubeOutlined } from "@ant-design/icons";

const SocialMedia = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });

  return (
    <Row justify="center">
      <Col className="socialMedia">
        <h1 className="my-title">NO TE OLVIDES DE SEGUIRNOS !!!</h1>
        <hr />
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconFont
            type="icon-facebook"
            style={{
              fontSize: "80px",
              marginRight: "20%",
              display: "inline-block",
            }}
          />
        </a>
        <a
          href="https://twitter.com/home?lang=es"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconFont
            type="icon-twitter"
            style={{
              fontSize: "80px",
              marginRight: "20%",
              display: "inline-block",
            }}
          />
        </a>
        <a
          href="https://www.youtube.com/watch?v=sAXBT_A0xGY"
          target="_blank"
          rel="noreferrer noopener"
        >
          <YoutubeOutlined
            style={{ fontSize: "90px", display: "inline-block" }}
          />
        </a>
        <hr />
      </Col>
    </Row>
  );
};
export default SocialMedia;
