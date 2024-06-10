import React from "react";

export default function OurServices() {
  return (
    <div className="font-poppins w-screen h-auto flex flex-col justify-center  object-fill position-center p-4">
      <div className="flex flex-col justify-center p-9 items-center w-full text-center ">
        <h1 className="text-4xl font-semibold  ">Our Services</h1>
        <p className="text-xl font-poppins font-medium lg:w-[40vw] sm:w-[80vw]">
          Elevate Your Online Presence with ByteGeist's Comprehensive Range of
          Digital Solutions
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center p-9 w-full">
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-between gap-3 border border-gray-500 w-80 h-110 transition duration-200 ease-in-out hover:-rotate-3 fadein">
          <div className="mb-9 bg-purple-500 rounded-full p-4 w-20 h-20 flex items-center justify-center text-white text-4xl">
            W
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">Web Development</h1>
            <p className="text-sm text-gray-700 font-poppins font-medium">
              ByteGeist offers comprehensive web development services, from
              simple websites to complex web applications. Our customized
              solutions align with your unique business objectives, featuring
              robust security measures and cross-platform compatibility to
              ensure seamless performance across all browsers and devices
            </p>
            <button className="w-1/2 bg-white border border-black text-black text-md font-semibold p-2 rounded-md hover:bg-black hover:text-white">
              Start a project
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-between gap-3 border border-gray-500 w-80 h-110 transition duration-200 ease-in-out hover:-rotate-3 fadein">
          <div className="mb-9 bg-green-500 rounded-full p-4 w-20 h-20 flex items-center justify-center text-white text-4xl">
            U
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">UI/UX</h1>
            <p className="text-sm font-poppins font-medium text-gray-600">
              Prioritizing user-centric design, ByteGeist creates intuitive and
              visually stunning interfaces that facilitate seamless navigation
              and engagement. Our responsive designs blend creativity with
              functionality, ensuring consistent experiences across all devices.
            </p>
            <button className="w-1/2 bg-white border border-black text-black text-md font-semibold p-2 rounded-md hover:bg-black hover:text-white">
              Start a project
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-between gap-3 border border-gray-500 w-80 h-110 transition duration-200 ease-in-out hover:-rotate-3 fadein">
          <div className="mb-9 bg-blue-500 rounded-full p-4 w-20 h-20 flex items-center justify-center text-white text-4xl">
            S
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">SEO Optimization</h1>
            <p className="text-sm font-poppins font-medium">
              ByteGeist enhances your online visibility and drives organic
              traffic with effective SEO strategies and digital marketing. From
              thorough keyword research and quality backlink building to
              engaging content creation and personalized email campaigns, we
              help you connect with your audience and drive conversions.
            </p>
            <button className="w-1/2 bg-white border border-black text-black text-md font-semibold p-2 rounded-md hover:bg-black hover:text-white">
              Start a project
            </button>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-start justify-between gap-3 border border-gray-500 w-80 h-110 transition duration-200 ease-in-out hover:-rotate-3 fadein">
          <div className="mb-9 bg-red-500 rounded-full p-4 w-20 h-20 flex items-center justify-center text-white text-4xl">
            B
          </div>
          <div className="flex flex-col gap-8">
            <h1 className="text-2xl font-semibold">Branding</h1>
            <p className="text-sm font-poppins font-medium text-gray-600">
              ByteGeist develops comprehensive branding strategies to establish
              and strengthen your brand identity. Our services include impactful
              logo design and brand guidelines, ensuring consistency across all
              brand touchpoints and effectively differentiating your business.
            </p>
            <button className="w-1/2 bg-white border border-black text-black text-md font-semibold p-2 rounded-md hover:bg-black hover:text-white">
              Start a project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
