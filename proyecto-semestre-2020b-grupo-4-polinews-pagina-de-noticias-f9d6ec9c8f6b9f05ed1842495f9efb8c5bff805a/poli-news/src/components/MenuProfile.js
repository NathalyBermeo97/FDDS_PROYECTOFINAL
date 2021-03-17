import React from "react";
import { Menu } from "antd";
import {
  CalendarOutlined,
  NotificationOutlined,
  MenuUnfoldOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import Routes from "../constants/Routes";

const { SubMenu } = Menu;

const MenuProfile = () => {
  return (
    <div>
      <Menu theme={"dark"} style={{ width: 300 }} mode="inline">
        <Menu.Item key="1" icon={<CalendarOutlined />}>
          <Link to={Routes.PROFILE_CALENDAR}>Agenda</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<NotificationOutlined />}>
          <Link to={Routes.PROFILE_NOTE}>Notificaciones</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<MenuUnfoldOutlined />}>
          <Link to={Routes.PROFILE_COURSES}>Mis Cursos</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<SaveOutlined />}>
          <Link to={Routes.PROFILE}>información Personal</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default MenuProfile;
