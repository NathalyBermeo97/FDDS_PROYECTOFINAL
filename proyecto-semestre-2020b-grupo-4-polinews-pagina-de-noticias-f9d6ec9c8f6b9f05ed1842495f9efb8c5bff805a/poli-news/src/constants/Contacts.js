import Routes from "./Routes";
import { Link } from "react-router-dom";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

const contactItems = [
  {
    href: "https://web.whatsapp.com/",
    text: "0994942280",
    icon: <PhoneOutlined />,
  },
  {
    href: "http://correo.epn.edu.ec/",
    text: "polinews_oficial@epn.edu.ec",
    icon: <MailOutlined />,
  },
  {
    href: "https://www.google.com.ec/maps",
    text: "Av Good vibes and Good Life Oe2 - 110",
    icon: <EnvironmentOutlined />,
  },
  {
    href: "",
    text: (
      <Link to={Routes.TERMS} style={{ color: "#ffffff" }}>
        {" "}
        Terminos & Condiciones{" "}
      </Link>
    ),
    icon: <FolderOpenOutlined />,
  },
];

export default contactItems;
