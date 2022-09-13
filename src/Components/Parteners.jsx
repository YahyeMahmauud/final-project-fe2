import React from "react";
// import Shaam from "../images/shaam.webp";
import primbank from "../images/primbank.png";
import taakulo from "../images/takulo.png";
import dahab from "../images/Dahab.png";
import somp from "../images/somproperty.png";
import telsom from "../images/telsom.png";
const Parteners = () => {
  return (
    <div className="flex flex-col items-center space-y-5 bg-[#dedde2] p-3">
      {/* Our Parteners */}
      <div>
        <h1 className="font-bold text-3xl ">
          Partners
          <br />
        </h1>
      </div>
      {/* some text */}
      <div>
        <p className="flex items-center justify-center ml-[10px] w-[1000px]">
          farsamo hub works with partners who want to provide their customers,
          tenants, or employees easy access to quality home services at
          affordable prices.
        </p>
      </div>
      {/* parteners logos*/}
      <div className="flex w-screen justify-evenly gap-[165px] space-y-2  p-8">
        {/* part one */}
        <div className="space-y-16 ">
          <div>
            <img src={telsom} alt="shaam" />
          </div>
          <div>
            {" "}
            <img src={primbank} alt="prim" />{" "}
          </div>
        </div>
        {/* part two */}
        <div className="space-y-16">
          <div>
            {" "}
            <img src={taakulo} alt="shaam" />
          </div>
          <div>
            {" "}
            <img src={dahab} alt="shaam" />
          </div>
        </div>
        {/* part three */}
        <div className="space-y-8">
          <div>
            <img src={somp} alt="shaam" />
          </div>
          <div>
            {" "}
            <img src={primbank} alt="shaam" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parteners;
