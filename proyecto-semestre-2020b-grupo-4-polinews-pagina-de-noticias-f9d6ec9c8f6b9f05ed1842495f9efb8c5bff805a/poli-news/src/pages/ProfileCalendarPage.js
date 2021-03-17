import React from "react";
import Footer from "../components/Footer";
import MenuProfile from "../components/MenuProfile";
import withAuth from "../hocs/withAuth";

const ProfileCalendarPage = () => {
  return (
    <div>
      <MenuProfile />
      <h1>perfil Agenda</h1>
      <Footer />
    </div>
  );
};
export default withAuth(ProfileCalendarPage);
