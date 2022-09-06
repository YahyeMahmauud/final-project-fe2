import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import TextField from "@mui/material/TextField";
const Booking = () => {
  const [input, setInput] = useState({});
  const [item, setItem] = useState({});
  const baseUrl = "http://localhost:8080";
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:8080/service/${id}`).then((res) => {
      setItem(res.data.Service);
    });
    setInput({ ...input, service: item._id });
    // console.log(item);
  }, []);

  const handleOnBooking = async (id) => {
    try {
      const res = await axios.post(`${baseUrl}/booking/${id}`, input);
      toast.success(res.data.message);
      navigate("/");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <>
      <div class="min-h-screen bg-blue-300 flex justify-center items-center">
        <div class="py-12 px-[200px] bg-white rounded-2xl shadow-xl z-20">
          <div className="flex flex-col items-center">
            <h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">
              {item.name}
            </h1>
            <p class="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
              Book a {item.name} specialist to enjoy all the services without
              any delay!
            </p>
          </div>
          <div class=" flex gap-4 items-center">
            <div>
              <input
                onChange={(e) => setInput({ ...input, name: e.target.value })}
                type="text"
                placeholder="Name"
                class="block w-full px-4 py-3 mt-2 text-black placeholder-gray-400 bg-white border border-gray-200 rounded-md "
              />
              {/*  */}
              <input
                onChange={(e) =>
                  setInput({ ...input, phoneNumber: e.target.value })
                }
                type="number"
                placeholder="Phone Number"
                class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
              />
            </div>

            <div>
              <input
                onChange={(e) =>
                  setInput({ ...input, address: e.target.value })
                }
                type="text"
                placeholder="Address"
                class="block w-full px-4 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
              />
              {/*  */}

              <TextField
                onChange={(e) => setInput({ ...input, date: e.target.value })}
                class="block w-full px-4 py-1 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
                id="datetime-local"
                type="datetime-local"
                defaultValue={Date.now()}
                sx={{ width: 250 }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </div>
          </div>
          <div class="text-center mt-6">
            <button
              onClick={() => handleOnBooking(item._id)}
              class="py-3 w-64 text-xl text-white bg-black rounded-2xl"
            >
              Book
            </button>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Booking;
