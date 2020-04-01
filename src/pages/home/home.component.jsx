import React from "react";

import "./home.styles.scss";

import UsernameForm from "../../components/username-form/username-form.component";

const HomePage = () => (
  <div className="homepage">
    <UsernameForm />
  </div>
);

export default HomePage;
