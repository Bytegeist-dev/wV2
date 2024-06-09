import React from "react";

export default function OurServices() {
  return (
    <div className="font-poppins w-screen h-auto  object-fill position-center p-4">
      <div className="flex justify-center items-center w-full h-[100vh] fadein">
        <img
          src="./services.svg"
          alt="services"
          className="w-[60vw] h-[60vh]"
        />

        <h2 className="text-5xl font-poppins font-medium w-[50vw] ">
          Elevate Your Online Presence with ByteGeist's Comprehensive Range of
          Digital Solutions
        </h2>
      </div>
      <div className="flex flex-col gap-3 justify-center items-center w-full h-auto">
        <div className="fadein flex justify-center items-center w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <img
            src="./services.svg"
            alt="services"
            className="w-[50vw] h-[50vh]"
          />
          <div className="font-poppins font-medium w-[50vw]">
            <h2 className="text-4xl font-poppins font-medium w-[50vw] ">
              Web Development
            </h2>
            <p className="text-lg w-[40vw]">
              Crafting tailored web solutions that empower businesses to excel
              in the digital realm.
            </p>
          </div>
        </div>
        <div className="fadein flex p-4 justify-center items-center w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <div className="font-poppins font-medium text-center ">
            <h2 className="text-4xl font-poppins font-medium  ">UI UX</h2>
            <p className="text-lg w-[40vw]">
              Designing intuitive and visually stunning user experiences to
              enhance engagement and satisfaction.
            </p>
          </div>
          <img src="./uiux.svg" alt="services" className="w-[50vw] h-[50vh]" />
        </div>
        <div className=" fadein flex p-4 justify-center items-center w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <img src="./seo.svg" alt="services" className="w-[40vw] h-[40vh]" />

          <div className=" font-poppins font-medium text-center ">
            <h2 className="text-4xl font-poppins font-medium  ">
              SEO Optimizations
            </h2>
            <p className="text-lg w-[40vw]">
              Improving your online visibility and driving organic traffic to
              your website through effective SEO strategies.
            </p>
          </div>
        </div>
        <div className="fadein flex p-4 justify-center items-center w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <div className="font-poppins font-medium text-center ">
            <h2 className="text-4xl font-poppins font-medium  ">Branding</h2>
            <p className="text-lg w-[40vw]">
              Creating unique brand identities that resonate with your target
              audience and differentiate your business.
            </p>
          </div>
          <img src="./uiux.svg" alt="services" className="w-[50vw] h-[50vh]" />
        </div>
      </div>
    </div>
  );
}
