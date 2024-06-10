import React, { useEffect } from "react";

export default function AboutUs() {
  useEffect(() => {
    const handleScroll = () => {
      const pageTop = window.scrollY;
      const pageBottom = pageTop + window.innerHeight;
      const tags = document.querySelectorAll(".fadein");

      tags.forEach((tag) => {
        if (tag.getBoundingClientRect().top + pageTop < pageBottom) {
          tag.classList.add("visible");
        } else {
          tag.classList.remove("visible");
        }
      });
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check on component mount

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-poppins w-full h-auto flex flex-col gap-4 items-center justify-center  p-4">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-center fadein gap-4">
        <div className="text-5xl md:text-8xl">
          About <br /> Us
        </div>
        <div>
          <p className="text-lg font-poppins text-sub  font-medium w-[80vw] md:w-[50vw]  mt-[6rem]">
            Welcome to ByteGeist, a fresh and dynamic web and app development
            company. We are a team of passionate professionals dedicated to
            transforming your ideas into digital masterpieces. Our diverse team
            brings together a unique blend of skills, experience, and creativity
            to deliver exceptional solutions tailored to your unique business
            needs.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center  items-center mt-8 gap-5 fadein">
        <div className="font-poppins font text-5xl">
          New Beginnings, <br /> Bold Visions
        </div>
        <p className="font-poppins text-lg text-sub text-md font-medium w-[80vw] md:w-[40vw]">
          ByteGeist was founded on the principle that innovative technology can
          drive business success. As a new player in the market, we are
          committed to pushing the boundaries of web and app development. Our
          mission is to partner with businesses of all sizes to create bespoke
          websites and mobile apps that meet and exceed expectations. We are
          driven by a passion for excellence and a commitment to delivering
          cutting-edge solutions.
        </p>
      </div>
      <div className="w-full flex-col gap-8 h-auto">
        <div className="w-full flex  flex-col justify-center items-center gap-4 font-poppins font text-6xl p-9">
          <h2>Why Us?</h2>
          <p className="font-poppins text-lg text-sub text-center text-md font-medium w-[70vw]">
            we strive to set ourselves apart through our commitment to
            innovation, user-centric design, and excellence in every project we
            undertake. Here’s why you should choose us for your web and app
            development needs.
          </p>
        </div>
        <div className=" fadein md:flex-row flex-col  flex w-full gap-4 md:items-end items-center p-4">
          <img
            src="./Innovation-1x.png"
            alt="decorative element"
            className="md:w-[20rem] md:h-[15rem] fadein hidden md:block"
          />
           <img
            src="./Innovation-1x-sm.png"
            alt="decorative element"
            className="md:w-[20rem] md:h-[15rem] fadein block md:hidden"
          />


          <p className="fadein font-poppins text-lg text-sub text-md font-medium w-[80vw] md:w-[30vw]">
            Innovation is at the heart of everything we do. Our team stays ahead
            of the curve by continuously exploring the latest technologies and
            trends in web and app development. We stay ahead of the curve,
            leveraging cutting-edge tools and technologies to create
            future-proof solutions that drive your business forward.
          </p>
        </div>
        <div className="md:flex-row flex-col-reverse gap-3  flex w-full h-full justify-end items-end fadein p-4">
          <p className="fadein  font-poppins text-lg text-sub text-md font-medium w-[80vw] md:w-[40vw]">
            User experience is paramount at ByteGeist. We prioritize
            understanding the needs and behaviors of your target audience to
            create intuitive and engaging digital experiences. Our user-centric
            approach ensures that every website and app we develop is easy to
            navigate, visually appealing, and highly functional.
          </p>
          <img
            src="./usercentric-1x.png"
            alt="decorative element"
            className="md:w-[25rem] md:h-[8rem] fadein w-[15rem] h-[8rem] hidden md:block"
          />
          <img
            src="./usercentric-1x-sm.png"
            alt="decorative element"
            className="md:w-[30rem] md:h-[10rem] fadein w-[15rem] h-[8rem] block md:hidden"
          />
        </div>
        <div className=" flex w-full items-center gap-7  flex-col justify-center fadein p-4 ">
          <img
            src="./excellence-1x.png"
            alt="decorative element"
            className="w-[15rem] h-[10rem] fadein"
          />
          <p className="fadein   font-poppins text-lg text-sub text-md font-medium md:w-[60vw] w-[80vw] text-center">
            Excellence is the standard at ByteGeist. We are dedicated to
            delivering top-quality solutions that meet the highest industry
            standards. Our team of experts brings a meticulous attention to
            detail and a passion for perfection to every project. From the
            initial consultation to the final deployment, we ensure that every
            aspect of your website or app is crafted with precision and care.
          </p>
        </div>
      </div>
    </div>
  );
}
