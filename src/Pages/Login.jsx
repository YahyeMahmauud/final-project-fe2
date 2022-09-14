import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { userContext } from "../Utils/userContext";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser } = useContext(userContext);
  const [input, setInput] = useState({});
  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();

  const handleOnLogin = async () => {
    try {
      const res = await axios.post(`${baseUrl}/specialist/login`, input);
      localStorage.setItem("token", res.data.token);
      setUser(true);
      toast.success(res.data.message);
      navigate(`/admin/profile/${res.data.specialist._id}`);
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <>
      <div class="min-h-screen bg-blue-300 flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Login
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Login to access your account
            </p>
          </div>
          <div class="space-y-4">
            {/* phoneNumber */}
            <input
              onChange={(e) =>
                setInput({ ...input, phoneNumber: e.target.value })
              }
              type="text"
              placeholder="Phone Number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
            />
            {/* skill*/}

            {/* password */}
            <input
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password"
              placeholder="Password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
            />
          </div>
          <div class="text-center mt-6">
            <button
              class="py-3 w-64 text-xl text-white bg-black rounded-2xl"
              onClick={handleOnLogin}
            >
              Login
            </button>
            <p class="mt-4 text-sm">
              Don't Already Have An Account yet?{" "}
              <Link to="/signup">
                <span class="underline cursor-pointer"> Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Login;
