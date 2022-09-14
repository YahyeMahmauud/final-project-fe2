import React from "react";
import worker from "../images/worker.png";
import Services from "../Components/Services.jsx";
import Work from "../Components/Work.jsx";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import Parteners from "../Components/Parteners";
import Footer from "../Components/Footer";

const Home = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/service")
      .then((res) => setService(res.data.services));
  }, []);
  // console.log(service);

  if (!service) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className="h-screen w-screen">
      <div
        className="flex items-center   justify-around   
   bg-[#dedde2] w-screen h-screen
"
      >
        {/* left side some text */}
        <div className="flex flex-col  space-y-8">
          {/* border */}
          <div className="w-[200px] border-blue-500 border-4 "></div>
          {/* qoute */}
          <div>
            <h1 className="font-bold text-5xl ">
              The best friend <br /> of households
            </h1>
          </div>
          {/* description */}
          <div className="w-[300px]">
            <p>
              Professionals have completed over millions of bookings through the
              Handy platform across the Somaliland.
            </p>
          </div>

          {/* button */}
          <div className=" flex gap-16">
            <button
              type="button"
              className=" p-2 border-2 border-blue-500 text-xl font-medium rounded-md  hover:bg-blue-500"
            >
              Book a visit
            </button>

            <button
              type="button "
              className="p-3  bg-blue-500 text-xl font-medium rounded-md hover:bg-white border-2 border-white  "
            >
              How we work
            </button>
          </div>
        </div>

        {/* right side (image) */}

        <div className="flex-end w-[400px]">
          <img src={worker} alt="worker" className="w-300px" />
        </div>
        {/* services */}
      </div>

      <div>
        <div className="flex items-center justify-center p-2 mt-2">
          <h1 className="font-bold text-3xl ">
            Services
            <br />
          </h1>
        </div>
        <div className="flex p-8  items-center  ">
          {service.map((service) => (
            <Services service={service} />
          ))}
        </div>
      </div>
      {/* Parteners */}
      <div>
        <Parteners />
      </div>
      {/* Work */}
      <div>
        <Work />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
