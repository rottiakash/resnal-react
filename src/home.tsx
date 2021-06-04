import React from "react";
import "./home.css";
export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
  return (
    <iframe
      title="Home"
      src="http://localhost:5000/"
      style={{ width: "100%", height: "1000px" }}
    ></iframe>
  );
};

export default Home;
