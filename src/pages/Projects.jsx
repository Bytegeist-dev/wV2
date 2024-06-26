import React from "react";
import { PinContainer } from "../components/HoverCard";


export default function Projects() {
  const projects = [
    {
      image: "./projects/PROJECT3.webp",
      title: "Ecommerce Website",
      link: "",
      description:
        "Ecommerce site for Vanchi, built with ReactJS, Tailwind CSS, and Node.js with custom icons and branding.",
    },
    {
      image: "./projects/PROJECT2.webp",
      title: "TipMe",
      link: "",
      description:
        "Empower workers by easily tipping them with the TipMe app, built with Supabase, ReactJS, Tailwind CSS, Express, and Node.js.",
    },
    {
      image: "./projects/project1.webp",
      title: "Portfolio Website",
      link: "",
      description:
        "Showcase your skills and projects with elegance on our Developer Portfolio Website, powered by ReactJS, Tailwind CSS, and Node.js.",
    },
    {
      image: "./projects/PROJECT5.webp",
      title: "Landing Page for Musify",
      link: "",
      description:
        "Explore the world of music with Musify's website, built using ReactJS, Tailwind CSS, and Node.js.",
    },
    {
      image: "./projects/PROJECT4.webp",
      title: "Landing Page for Natural Products",
      link: "",
      description:
        "Discover natural products with our visually stunning landing page, crafted using CSS and JavaScript.",
    },
    {
      image: "./projects/PROJECT6.webp",
      title: "UI/UX Design for Subscription Tracker App",
      link: "https://dribbble.com/shots/22562235-Subscription-tracker-App-Streamlined-Control-Intuitive", // You can add a link to your Figma design here
      description: "Streamline subscription management with our sleek UI/UX design for the Subscription Tracker app.",
    },
    
    {
      image: "./projects/PROJECT8.webp",
      title: "UI/UX for CodeCraft E-Learning App",
      link: "https://dribbble.com/shots/23434816-CodeCraft-E-Learning-App-for-Coding-Education", // You can add a link to your project here
      description: "Transform coding education with our intuitive UI/UX design for CodeCraft. Perfect for beginners and seasoned learners, our app offers an interactive coding environment for real-time coding, testing, and debugging.",
    },
    
    {
      image: "./projects/PROJECT9.webp",
      title: "UI/UX for Organize App Splash Screen & Login Page",
      link: "https://dribbble.com/shots/22878626-Organize-App-Splash-Screen-Login-page",
      description: "Experience seamless onboarding with our elegant UI/UX design for the Organize App. Our splash screen and login page provide a welcoming and intuitive introduction to the app's features.",
    },
    {
      image: "./projects/PROJECT7.webp",
      title: "UI/UX for Food Scanner App",
      link: "https://dribbble.com/shots/22494916-Food-Scanner-App-Nutrient-Analysis-and-Tracking",
      description: "Revolutionize nutrition tracking with our intuitive UI/UX design for the Food Scanner App. Seamlessly analyze and track nutrients in your food, making informed dietary choices effortlessly.",
    }
    
    
  ];
  return (
    <div className='z-2 font-poppins w-screen h-auto  object-fill position-center p-4'>

      <h2 className="font-poppins font-bold text-7xl p-4 bg-white border border-black mt-5">Our Projects</h2>
      <div className="z-2 flex w-full md:flex-row flex-col mt-5 flex-wrap h-auto items-center  justify-center z-1">
      {projects.map((project, index) => (
        <PinContainer
          key={index}
          title={project.title}
          href={project.link}
          className={"mt-5 transition ease-in-out duration-200 saturate-0 hover:saturate-100"}
        >
          <div className="  flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-900">
              {project.title}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">{project.description}</span>
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            <img src={project.image} alt={project.title} className="w-full h-[50vh]  object-cover " />
          </div>
        </PinContainer>
      ))}
      </div>
    </div>
  );
}

function ProjectCard({ image, title, description }) {
  return (
    <div className="hover:transform hover:perspective-[1000px] hover:-translate-x-1/2 hover:-translate-y-1/2 hover:rotate-x-40 hover:scale-75 flex flex-col items-center justify-around bg-white w-full h-full border border-gray-800 p-4 fadein rounded-lg shadow-lg group h-auto transition-all ease-in-out duration-500">
      <img
        src={image}
        alt={title}
        className="w-full h-[50vh] transition ease-in-out duration-200 object-cover saturate-0 hover:saturate-100"
      />
      <div className="mt-2 flex flex-col items-start justify-between block  transition-all ease-in-out duration-200">
        <p className="font-poppins text-2xl font-semibold">{title}</p>
        <p className="font-poppins text-md ">{description}</p>
      </div>
    </div>
  );
}
