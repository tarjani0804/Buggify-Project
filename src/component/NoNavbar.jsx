import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../component/image/Buggify2.png";

function NoNavbar() {
  const navigate = useNavigate();

  const gotoHome = () => {
    navigate("/");
  };
  const styles = {
    cursor: "pointer",
    backgroundColor: "#0b0b0b",
  };
  return (
    <>
      <div onClick={gotoHome} style={styles}>
        <img src={Logo} className="logo1"></img>
      </div>
    </>
  );
}

export default NoNavbar;
