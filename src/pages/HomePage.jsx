import React from "react";
import Header from "../components/Header";
import Spline from "@splinetool/react-spline";
import PrimaryButton from "../components/PrimaryButton";

export default function HomePage({ projectsRef, contactRef }) {
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="font-poppins w-screen h-[100vh]  object-fill position-center p-4">
      <div className="w-full h-[95vh] relative overflow-hidden">
        {/* <div className="absolute  left-[-25rem] top-[3rem]  flex items-center justify-center w-full h-[80vh]">
          <main className="flex items-center justify-center z-1">
            <div className="w-full h-full spline-canvas">
              <Spline
                scene="https://prod.spline.design/5NAzWKirYd5oNoWD/scene.splinecode"
                className="w-20 h-20"
              />
            </div>
          </main>
        </div> */}
        <div className="z-3 absolute flex items-center pointer-events-none justify-center w-full h-full">
          <div className="text-center flex flex-col items-center justify-center gap-4 pointer-events-none">
            <h1 className="text-4xl font-bold text-gray-800 font-poppins">
              We're Bytegeist.
            </h1>
            <p className="text-lg  pointer-events-none font-medium text-gray-700 font-poppins md:w-[70vw]">
              At ByteGeist, we specialize in building stunning, responsive
              websites and innovative mobile apps that drive business growth and
              online success. From startups to enterprises, we turn your vision
              into digital excellence with our custom web and app development
              services.
            </p>
            <div className="flex gap-2 w-full justify-center">
              <button
                onClick={() => scrollToSection(projectsRef)}
                className="pointer-events-auto px-4 py-2 mt-4 bg-white text-black transition ease-in-out duration-300 border  border-black rounded-md hover:bg-black hover:text-white">
                View Our Portfolio
              </button>
              <div onClick={() => scrollToSection(contactRef)}>
                <PrimaryButton >
                  Get a Free Consulation
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
