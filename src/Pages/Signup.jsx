import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useContext } from "react";
import { userContext } from "../Utils/userContext";
import { toast } from "react-toastify";

const Signup = () => {
  const { setUser } = useContext(userContext);
  const [input, setInput] = useState({});
  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();

  const handleOnSignUp = async () => {
    try {
      const formData = new FormData();
      formData.append("name", input.name);
      formData.append("email", input.email);
      formData.append("password", input.password);
      formData.append("image", input.image);
      formData.append("specialty", input.specialty);

      const res = await axios.post(`${baseUrl}/specialist`, formData);
      setUser(true);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      navigate("/admin/profile");
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
              Create Account
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Create an account to enjoy all the services
            </p>
          </div>
          <div class="space-y-4">
            {/* name */}
            <input
              onChange={(e) => setInput({ ...input, name: e.target.value })}
              type="text"
              placeholder="FullName"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
            />
            {/*  */}
            {/* email */}
            <input
              onChange={(e) => setInput({ ...input, email: e.target.value })}
              type="text"
              id="phone"
              name="phone"
              required
              placeholder="email"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
            />
            {/* skill*/}
            <select
              onChange={(e) =>
                setInput({ ...input, specialty: e.target.value })
              }
              type="text"
              placeholder="Select a service"
              class="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-400 bg-white border border-gray-200 rounded-md "
            >
              <option>Select a service</option>
              <option value={"electrical"}>electrical</option>
              <option value={"plumbing"}>plumping</option>
              <option value={"carpentry"}>carpentry</option>
            </select>
            {/* image */}
            <input
              type="file"
              placeholder="Upload Image"
              className="input w-[400px]"
              onChange={(e) => setInput({ ...input, image: e.target.files[0] })}
            />
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
              onClick={handleOnSignUp}
            >
              Create Account
            </button>
            <p class="mt-4 text-sm">
              Already Have An Account?{" "}
              <Link to="/login">
                <span class="underline cursor-pointer"> Sign In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Signup;
