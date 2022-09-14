import React, { useState, useEffect } from "react";
import SpecialistCard from "../Components/SpecialistCard";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Specialists() {
  const { id } = useParams();

  const [specialists, setSpecialists] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8080/service/${id}`).then((res) => {
      setSpecialists(res.data.Service.specialists);
    });
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center p-2 mt-2">
        <h1 className="font-bold text-xl ">
          Here are all all the specialists for this service:
          <br />
        </h1>
      </div>
      <div className="flex p-8  items-center  ">
        {specialists.map((value) => (
          <SpecialistCard specialist={value} />
        ))}
      </div>
    </div>
    // <div className="flex p-2  items-center ">
    //   <div>
    //     <h1 className="font-bold text-3xl ">
    //       {`Here are all all the ${service} specialists`}
    //       <br />
    //     </h1>
    //   </div>
    //   {specialists.map((value) => (
    //     <SpecialistCard specialist={value} />
    //   ))}
    // </div>
  );
}
