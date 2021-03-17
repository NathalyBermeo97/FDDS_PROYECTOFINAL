import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";
import withoutAuth from "../hocs/withoutAuth";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Lo sentimos no encontramos el sitio, intenta denuevo"
        extra={
          <Button type="link">
            <Link to={Routes.HOME}> Volver al inicio </Link>
          </Button>
        }
      />
      <Footer />
    </>
  );
};
export default withoutAuth(NotFoundPage);
