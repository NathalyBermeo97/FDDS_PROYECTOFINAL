import React from "react";
import CalendarEverywhere from "../components/CalendarEverywhere";
import Footer from "../components/Footer";
import withAuth from "../hocs/withAuth";

const CalendarPage = () => {
  return (
    <>
      <hr />
      <h1 className="my-title">CALENDARIO</h1>
      <hr />

      <div style={{ margin: "0 10%" }}>
        <CalendarEverywhere />
      </div>
      <Footer />
    </>
  );
};
export default withAuth(CalendarPage);
