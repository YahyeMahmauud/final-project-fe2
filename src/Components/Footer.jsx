import React from "react";
import logo from "../images/Asset 1.svg";
import facebook from "../images/facebool.svg";
import instgram from "../images/Instagramflip.svg";
import twitter from "../images/Twitterflip.svg";
const Footer = () => {
  return (
    <div className=" bg-blue-300  flex  justify-around h-[150px] p-4">
      <div className="flex flex-col justify-center items-center gap-2 mr-[170px]">
        {/* logo */}
        <div className="">
          <img src={logo} alt="footerImage" className="w-[80px] " />
        </div>
        {/* All right reserved */}

        <div>
          <h2 className="font-bold">2022 Farsamo Hub, All right reserved</h2>
        </div>
      </div>
      {/* Social media icons */}
      <div className="flex flex-col justify-center gap-3 mt-8 ml-[18px]">
        {/* Follow Us */}
        <div>
          <h1 className="font-bold">Follow Us:-</h1>
        </div>
        <div className=" flex gap-1 ">
          <img src={facebook} alt="facebook" className="w-[43px]" />
          <img src={instgram} alt="instgram" className="w-[50px]" />
          <img src={twitter} alt="twitter" className="w-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
