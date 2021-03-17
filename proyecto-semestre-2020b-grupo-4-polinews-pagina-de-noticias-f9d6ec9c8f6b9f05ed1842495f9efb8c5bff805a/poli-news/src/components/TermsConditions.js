import React, { useState } from "react";
import { Input, Button, Upload, Modal } from "antd";
import { DatePicker, Space } from "antd";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";

function TermsConditions() {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal
        title="TERMINOS & CONDICIONES"
        visible={isModalVisible}
        footer={null}
        onCancel={handleCancel}
      >
        <p>
          En el presente documento se establecen los términos y condiciones del
          grupo de desarrolladores “Ander and Company // alias 'Grupo 4'” con
          domicilio en Avenida Good vives and Good life Oe2-110, que serán de
          aplicación al acceso y uso por parte del Usuario de esta página web
          “POLINEWS” Les rogamos lean atentamente el presente Contrato. Al
          acceder, consultar o utilizar el Sitio Web “Polinews”, los Usuarios
          aceptan cumplir los términos y condiciones establecidos en este
          Contrato. En caso de que usted no acepte quedar vinculado por los
          presentes términos y condiciones, no podrá acceder a, ni utilizar, el
          Sitio Web. El grupo de desarrolladores “Ander and Company” se reservan
          el derecho de actualizar el presente Contrato siempre que lo
          consideren oportuno. En consecuencia, recomendamos al Usuario revisar
          periódicamente las modificaciones efectuadas al Contrato. El presente
          Sitio Web está dirigido exclusivamente a personas residentes en Quito.
          Los Usuarios residentes o domiciliados en otro país que deseen acceder
          y utilizar el Sitio Web, lo harán bajo su propio riesgo y
          responsabilidad, por lo que deberán asegurarse de que dichos accesos
          y/o usos cumplen con la legislación aplicable en su país.
        </p>
        <Button onClick={handleCancel}>ACEPTO</Button>
      </Modal>
    </>
  );
}

export default TermsConditions;
