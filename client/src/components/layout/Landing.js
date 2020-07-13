import React from "react";
import { Redirect } from "react-router-dom";
import Login from "../auth/Login";
import Alert from "../layout/Alert";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <section className="landing">
      <Alert />
      <Login />
    </section>
  );
};

export default Landing;
