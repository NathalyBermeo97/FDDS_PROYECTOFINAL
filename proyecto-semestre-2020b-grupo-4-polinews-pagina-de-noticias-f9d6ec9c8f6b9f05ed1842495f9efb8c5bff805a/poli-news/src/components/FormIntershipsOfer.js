import React, { useState } from "react";
import { Form, Input, Button, Upload, Modal } from "antd";
import { DatePicker, Space } from "antd";
import { useAuth } from "../lib/Auth";
import { UploadOutlined } from "@ant-design/icons";

function FormIntershipsOfer() {
  const { Item } = Form;
  const { RangePicker } = DatePicker;
  const { registerFormInterships } = useAuth();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (data) => {
    console.log("Formulario de Ofertar pasantias", data);
    registerFormInterships(data);
  };
  return (
    <div>
      <>
        <Button type="primary" onClick={showModal}>
          Ofertar Pasantias
        </Button>
        <Modal
          title=""
          visible={isModalVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <Form name="Formulario" onFinish={onFinish}>
            <Item
              label="Cargo"
              name="load"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el cargo",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Nombre de la empresa"
              name="company_name"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el nombre de la empresa",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Sueldo"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el sueldo",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              name="duration"
              label="Duracion:"
              rules={[{ required: true }]}
            >
              <RangePicker
                dateRender={(current) => {
                  const style = {};
                  if (current.date() === 1) {
                    style.border = "1px solid #1890ff";
                    style.borderRadius = "50%";
                  }
                  return (
                    <div className="ant-picker-cell-inner" style={style}>
                      {current.date()}
                    </div>
                  );
                }}
              />
            </Item>

            <h3>Infomación de contacto</h3>

            <Item
              label="Nombre del encargado"
              name="manager_name"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el nombre del encargado",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Dirección pasantías"
              name="direction"
              rules={[
                {
                  required: true,
                  message:
                    "Por favor ingrese la dirección donde se realizará la pasantía",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Correo electrónico"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese el correo electrónico",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Teléfono/celular"
              name="phone"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese su teléfono/celular",
                },
              ]}
            >
              <Input />
            </Item>

            <Item
              label="Descripción"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese una descripción",
                },
              ]}
            >
              <Input.TextArea />
            </Item>

            <Item
              label="Requisitos"
              name="requirements"
              rules={[
                {
                  required: true,
                  message: "Por favor ingrese unos requisitos",
                },
              ]}
            >
              <Input.TextArea />
            </Item>
            <Item
              name="photo"
              label="Foto"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Selecciona un archivo .jpg"
            >
              <Upload name="logo" action={null} listType="picture">
                <Button icon={<UploadOutlined />}>Click to upload</Button>
              </Upload>
            </Item>

            <Item>
              <Button type="primary" htmlType="submit">
                Enviar
              </Button>
            </Item>
          </Form>
        </Modal>
      </>
    </div>
  );
}

export default FormIntershipsOfer;
