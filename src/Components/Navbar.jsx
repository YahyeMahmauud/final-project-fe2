import React from "react";
import logo from "../images/Asset 1.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md h-20 flex justify-between items-center p-8 cursor-pointer">
      {/* logo */}
      <div className="ml-[85px]">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[50px]" />
        </Link>
      </div>
      {/* other navs */}

      <div className="flex gap-8  text-blue-500 font-bold">
        <Link to="/">
          <a>Home</a>
        </Link>
        <a>Services</a>
        <a>About</a>
      </div>
      <div className="flex gap-3 font-bold text-blue-500 mr-[70px]">
        <Link to="signup">
          <a>Became a Pro</a>
        </Link>
        <Link to="/login">
          <a>Login</a>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
