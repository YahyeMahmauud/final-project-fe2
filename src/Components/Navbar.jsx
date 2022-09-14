import React from "react";
import logo from "../images/Asset 1.svg";
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { userContext } from "../Utils/userContext";
import axios from "axios";
import jwt_decode from "jwt-decode";
const Navbar = () => {
  const { user, setUser } = useContext(userContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(true);
      const decoded = jwt_decode(token);
      axios
        .get(`http://localhost:8080/specialist/${decoded.data.id}`)
        .then((res) => setImage(res.data.specialist.image));
    }
  });

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
        {!user ? (
          <div className="space-x-8">
            <Link to="signup">
              <a>Became a Pro</a>
            </Link>

            <Link to="/login">
              <a>Login</a>
            </Link>
          </div>
        ) : (
          <Link to="/admin/profile">
            <img
              src={`http://localhost:8080/${image}`}
              alt="profile"
              className="h-14 rounded-full w-14"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
