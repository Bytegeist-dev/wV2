import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
    <div className="font-poppins text-gray-800 w-full h-[30vh] flex flex-col justify-center p-8   bg-green-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 ">
      <div className="flex flex-col items-center gap-4 ">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold  font-poppins">ByteGeist</h1>
          <p className="text-xl">Bring Sanity To Your Websites.</p>
        </div>

        <div className="flex gap-3">
          <a href="https://github.com/Bytegeist-dev"><FontAwesomeIcon icon={faGithub} className="text-3xl" /></a>
          <a href="https://www.linkedin.com/company/bytegeist"><FontAwesomeIcon icon={faLinkedin} className="text-3xl" /></a>
          
        </div>
      </div>
      
    </div>
    <div className="bg-black text-white p-3">
    <p className="text-center">
      &copy; 2024 ByteGeist. All rights reserved.
    </p>
  </div>
  </>
  );
}
