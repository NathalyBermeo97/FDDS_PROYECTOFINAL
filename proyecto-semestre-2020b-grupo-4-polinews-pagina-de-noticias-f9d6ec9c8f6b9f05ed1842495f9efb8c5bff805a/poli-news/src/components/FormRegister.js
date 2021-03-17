import React, { useState } from "react";
import { Form, Input, DatePicker, Modal, Select, Checkbox, Button } from "antd";
import { useAuth } from "../lib/Auth";
import withoutAuth from "../hocs/withoutAuth";
import Routes from "../constants/Routes";
import { Link } from "react-router-dom";

const FormRegister = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { register } = useAuth();

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const onFinish = (data) => {
    register(data);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 90,
        }}
      >
        <Option value="593">+593</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [isModalVisible, setIsModalVisible] = useState(true);

  const validateMessages = {
    required: "${label} es obligatorio!",
    types: {
      date: "${label} no es una fecha valida",
      number: "${label} no es un numero valido",
      email: "${label} no es un correo valido",
    },
    number: {
      range: "${label} valores entre ${min} y ${max}",
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
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            prefix: "86",
          }}
          scrollToFirstError
          validateMessages={validateMessages}
        >
          <Form.Item name="name" label="Nombres" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="lastname"
            label="Apellidos"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="date"
            label="Fecha de nacimiento"
            rules={[{ required: true }]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item name="gender" label="Genero" rules={[{ required: true }]}>
            <Select
              showSearch
              style={{ width: 150 }}
              placeholder="Select type"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="male">Masculino</Option>
              <Option value="female">Femenino</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="email"
            label="Correo Electronico"
            rules={[{ type: "email" }, { required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Contraseña"
            rules={[{ required: true }]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirmar Contraseña"
            dependencies={["password"]}
            hasFeedback
            rules={[
              { required: true },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Numero de Telefono"
            rules={[{ required: true }]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
          <Form.Item
            name="status"
            label="Tipo de usuario"
            rules={[{ required: true }]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select type"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="student">Estudiante</Option>
              <Option value="teacher">Profesor</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject("Debe aceptar los terminos y condiciones"),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              He leido y acepto los{" "}
              <Link to={Routes.TERMS}> Terminos & Condiciones </Link>,
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Registrarse
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default withoutAuth(FormRegister);
