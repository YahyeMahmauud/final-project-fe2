import React from "react";
// import Shaam from "../images/shaam.webp";
import time from "../images/time.svg";
import online from "../images/Monline.svg";
import relax from "../images/relax.svg";

const Work = () => {
  return (
    <div className="flex flex-col items-center space-y-5 bg-white p-3">
      {/* wroks*/}
      <div>
        <h1 className=" font-bold text-1xl">How We Work </h1>
      </div>
      {/* some text */}

      {/* Workers logos*/}
      <div className="flex w-screen justify-evenly gap-[165px] space-y-2  p-8 items-center">
        {/* part one */}
        <div className=" flex flex-col items-center ">
          <div>
            <img src={time} alt="shaam" />
          </div>
          <div>
            <h1>Set Up a Plan</h1>
          </div>
        </div>
        {/* part two */}
        <div className="flex flex-col items-center  ">
          <div>
            <img src={online} alt="shaam" />
          </div>
          <div>
            <h1>Manage Everything Online</h1>
          </div>
        </div>
        {/* part three */}
        <div className="flex flex-col items-center space-y-2 gap-1">
          <div>
            <img src={relax} alt="shaam" />
          </div>
          <div>
            {" "}
            <h1>Sit Back and Relax</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
