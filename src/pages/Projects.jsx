import React from "react";

export default function Projects() {
  const projects = [
    {
      image: "./project03.webp",
      title: "Ecommerce Website",
      description:
        "Ecommerce site for Vanchi, built with ReactJS, Tailwind CSS, and Node.js with custom icons and branding.",
    },
    {
      image: "./project2.webp",
      title: "TipMe",
      description:
        "Empower workers by easily tipping them with the TipMe app, built with Supabase, ReactJS, Tailwind CSS, Express, and Node.js.",
    },
    {
      image: "./project03.webp",
      title: "Portfolio Website",
      description:
        "Showcase your skills and projects with elegance on our Developer Portfolio Website, powered by ReactJS, Tailwind CSS, and Node.js.",
    },
    {
      image: "./project2.webp",
      title: "Project Dashboard for Developers",
      description:
        "Streamline your development workflow with our Project Dashboard, leveraging Supabase, ReactJS, Tailwind CSS, Express, Node.js, and MongoDB.",
    },
    {
      image: "./project03.webp",
      title: "Landing Page for Musify",
      description:
        "Explore the world of music with Musify's website, built using ReactJS, Tailwind CSS, and Node.js.",
    },
    {
      image: "./project2.webp",
      title: "Landing Page for Natural Products",
      description:
        "Discover natural products with our visually stunning landing page, crafted using CSS and JavaScript.",
    },
  ];
  return (
    <>
      <h2 className="font-poppins font-bold text-7xl p-4 bg-white border border-black mt-5">Our Projects</h2>
      <div className="flex w-full mt-5 flex-wrap h-auto gap-3 items-center justify-around z-1">
        {projects.map((project) => (
          <div className="h-[35rem] w-1/4 ">
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </>
  );
}

function ProjectCard({ image, title, description }) {
  return (
    <div className="flex flex-col items-center justify-around bg-white w-full h-full border border-gray-800 p-4 fadein rounded-lg shadow-lg group h-auto transition-all ease-in-out duration-500">
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
