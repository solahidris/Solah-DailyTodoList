import React from "react";
import logo from "../images/logo.svg";

const ReactLogo = () => {
  return (
    <img
      src={logo}
      alt="react-logo2"
      className="mb-5 animate-[spin_10s_linear_infinite] flex justify-center w-screen h-20"
    ></img>
  );
};

export default ReactLogo;
