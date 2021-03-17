import React, { useState, useEffect } from "react";
import { Modal, Form, Input, Button, Checkbox } from "antd";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../lib/Auth";
import Routes from "../constants/Routes";
import withoutAuth from "../hocs/withoutAuth";

const Login = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const history = useHistory();
  const { login, user } = useAuth();

  useEffect(() => {
    if (!!user) {
      history.replace(Routes.HOME);
    }
  }, [user]);

  const onFinish = ({ email, password }) => {
    login(email, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  return (
    <>
      <Modal
        title="Formulario de Registro"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Correo Electronico"
            name="email"
            rules={[
              {
                required: true,
                message: "Porfavor, ingrese su correo electronico!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              {
                required: true,
                message: "Porfavor, ingrese su contraseña!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Recuerdame</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Iniciar Sesion
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default withoutAuth(Login);
