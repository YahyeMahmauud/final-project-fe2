import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { userContext } from "../Utils/userContext";

const Profile = () => {
  const { id } = useParams();
  const [specialist, setSpecialist] = useState("");
  const { setUser } = useContext(userContext);
  const navigate = useNavigate();
  // const [jobs, setJobs] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/specialist/${id}`)
      .then((res) => setSpecialist(res.data.specialist));
  }, []);

  if (specialist === "") {
    return <h1>loading</h1>;
  }

  const handleOnLogout = async () => {
    localStorage.removeItem("token");
    setUser(false);
    navigate("/login");
  };

  return (
    <div className="">
      <div class="bg-gray-100">
        <div class="w-full text-white bg-main-color"></div>
      </div>

      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2 ">
          <div class="w-full md:w-3/12 md:mx-2">
            <div class="bg-white p-3 border-t-4 border-blue-400">
              <div class="image overflow-hidden">
                <img
                  class="h-[300px] w-full mx-auto"
                  src={`http://localhost:8080/${specialist.image}`}
                  alt=""
                />
              </div>
              <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">
                {specialist.name}
              </h1>

              <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                <li class="flex items-center py-3">
                  <span>Specialty</span>
                  <span class="ml-auto">{specialist.specialty}</span>
                </li>
                <li class="flex items-center py-3">
                  <span>Status</span>
                  <span class="ml-auto">
                    <span class="bg-green-500 py-1 px-2 rounded text-white text-sm">
                      Active
                    </span>
                  </span>
                </li>
                <li class="flex items-center py-3">
                  <button
                    onClick={handleOnLogout}
                    class="bg-red-500 py-1 px-2 mx-auto rounded text-white text-sm"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>

            <div class="my-4"></div>
          </div>

          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    class="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span class="tracking-wide">About</span>
              </div>
              <div class="text-gray-700">
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit, eligendi dolorum sequi illum qui unde
                  aspernatur non deserunt
                </p>
              </div>
              <button class="block w-full text-blue-400 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                Edit my About
              </button>
            </div>

            <div class="my-4"></div>

            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="grid grid-cols-2">
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        class="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span class="tracking-wide">Jobs history</span>
                  </div>
                  <ul class="list-inside space-y-2">
                    {specialist.jobs.map((job) => (
                      <li>
                        <div class="text-teal-600">
                          {`${job.name}, ${job.address}`}
                        </div>
                        <div class="text-gray-500 text-xs">{job.date}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
