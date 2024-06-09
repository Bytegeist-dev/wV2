import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
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
          <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
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
