import React from "react";
// import service1 from "../images/cleaner.png";
import { Link } from "react-router-dom";

function Services({ service }) {
  // console.log(`http://localhost:8080/${service.image}`);

  return (
    <>
      <div class="flex h-full items-center   px-2 ml-10  w-screen  justify-center ">
        <div class=" overflow-hidden rounded-xl bg-white shadow-md duration-200 hover:scale-105 hover:shadow-xl w-[290px] drop-shadow-2xl	 ">
          <img
            src={`http://localhost:8080/${service.image}`}
            alt="plant"
            class="h-auto w-full"
          />
          <div class="p-5">
            <p class="text-medium mb-5 text-gray-700 font-semibold flex justify-center">
              {service.name}
            </p>
            {/* <p class="text-medium mb-5 text-gray-700">
              Well, aren't you going up to the lake tonight, you've been
              planning it for two weeks.
            </p> */}
            <Link to={`/specialists/${service._id}`}>
              <button class="w-full rounded-md bg-blue-500  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75 cursor-pointer">
                Book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
