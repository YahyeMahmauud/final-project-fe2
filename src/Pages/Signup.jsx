import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Signup = () => {
  const [input, setInput] = useState({});
  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();

  const handleOnSignUp = async () => {
    try {
      const res = await axios.post(`${baseUrl}/specialist`, input);
      localStorage.setItem("token", res.data.token);
      toast.success(res.data.message);
      navigate("/");
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
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {/*  */}
            {/* phone number */}
            <input
              onChange={(e) =>
                setInput({ ...input, phoneNumber: e.target.value })
              }
              type="number"
              id="phone"
              name="phone"
              required
              placeholder="Phone Number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 appearance-none"
            />
            {/* skill*/}
            <select
              onChange={(e) =>
                setInput({ ...input, specialty: e.target.value })
              }
              type="text"
              placeholder="Select a service"
              class="block w-full px-4 py-2 mt-2 text-gray-400 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            >
              <option>Select a service</option>
              <option value={"electrical"}>electrical</option>
              <option value={"plumbing"}>plumping</option>
              <option value={"carpentry"}>carpentry</option>
            </select>
            {/* password */}
            <input
              onChange={(e) => setInput({ ...input, password: e.target.value })}
              type="password"
              placeholder="Password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
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
