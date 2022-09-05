import React from "react";

import TextField from "@mui/material/TextField";
const Booking = () => {
  return (
    <>
      <div class="min-h-screen bg-blue-300 flex justify-center items-center">
        <div class="py-12 px-[200px] bg-white rounded-2xl shadow-xl z-20">
          <div className="flex flex-col items-center">
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              Cleaning
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              book an handyman to enjoy all the services without any delay!
            </p>
          </div>
          <div class=" flex gap-4 items-center">
            <div>
              <input
                type="text"
                placeholder="Name"
                class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {/*  */}
              <input
                type="text"
                placeholder="Phone Number"
                class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Address"
                class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              {/*  */}

              <TextField
                class="block w-full px-4 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                id="datetime-local"
                type="datetime-local"
                defaultValue="2017-05-24T10:30"
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div class="text-center mt-6">
            <button class="py-3 w-64 text-xl text-white bg-black rounded-2xl">
              Appoint
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Booking;
