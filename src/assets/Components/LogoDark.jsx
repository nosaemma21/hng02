import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

const LogoDark = () => {
  return (
    <Link to="/">
      <div className="flex items-center gap-5">
        <img className="inline w-[40px] h-[40px]" src={logo} alt="logo" />
        <p className="inline text-title font-asset text-black font-title">
          MovieBox
        </p>
      </div>
    </Link>
  );
};

export default LogoDark;
