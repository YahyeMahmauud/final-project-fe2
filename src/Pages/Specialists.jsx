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
  console.log(specialists);

  return (
    <div className="flex p-8  items-center ">
      {specialists.map((value) => (
        <SpecialistCard specialist={value} />
      ))}
    </div>
  );
}
