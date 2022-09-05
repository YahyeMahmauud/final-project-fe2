import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div class="min-h-screen bg-blue-300 flex justify-center items-center">
        <div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20 ">
          <div>
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Sign in
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Sign in to access your account
            </p>
          </div>
          <div class="space-y-4">
            {/* phone number */}
            <input
              type="text"
              placeholder="Phone Number"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
            {/* skill*/}

            {/* password */}
            <input
              type="password"
              placeholder="Password"
              class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div class="text-center mt-6">
            <button class="py-3 w-64 text-xl text-white bg-black rounded-2xl">
              Sign in
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
