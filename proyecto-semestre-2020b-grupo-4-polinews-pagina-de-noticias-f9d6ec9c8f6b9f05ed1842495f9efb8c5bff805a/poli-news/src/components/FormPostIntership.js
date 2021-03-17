import React, { useState } from "react";
import { Form, Input, Button, Cascader, Select, Modal } from "antd";

const FormPostIntership = () => {
  const [form] = Form.useForm();
  const { TextArea } = Input;

  const options = [
    {
      value: "esfot",
      label: "Esfot",
      children: [
        {
          value: "software",
          label: "Desarrollo de software",
        },
        {
          value: "agua",
          label: "Agua y Saneamiento",
        },
        {
          value: "redes",
          label: "Redes y Telecomunicaciones",
        },
        {
          value: "electromecánica",
          label: "Electromecanica",
        },
      ],
    },
    {
      value: "mecanica",
      label: "Ing. Mecánica",
    },
    {
      value: "sistemas",
      label: "Ing. Software",
    },
    {
      value: "petroleos",
      label: "Ing. Geología Petróleos",
    },
    {
      value: "civil",
      label: "Ing. Civil y Ambiental",
    },
    {
      value: "quimica",
      label: "Ing. Química",
    },
  ];

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

  const onFinish = (values) => {
    console.log("Formulario de Inscripcion: ", values);
  };

  function onChange(value) {
    console.log(value);
  }

  // Just show the latest item.
  function displayRender(label) {
    return label[label.length - 1];
  }

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="593">+593</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Postularse
      </Button>
      <Modal
        title={<h1>Postularse a Pasantias </h1>}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <h2>Informacion del contacto:</h2>
        </div>

        <Form
          {...formItemLayout}
          form={form}
          onFinish={onFinish}
          initialValues={{
            prefix: "593",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Nombre"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Apellido"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input allowClear />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Correo institucional" allowClear />
          </Form.Item>

          <Form.Item
            name="direction"
            label="Direccion"
            rules={[{ required: true, message: "direccion requerido!" }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Celular"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="career"
            label="Carrera"
            rules={[
              {
                type: "array",
                required: true,
                message: "Please select your college career!",
              },
            ]}
          >
            <Cascader
              options={options}
              expandTrigger="hover"
              displayRender={displayRender}
              onChange={onChange}
              placeholder="Carrera"
            />
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
export default FormPostIntership;
