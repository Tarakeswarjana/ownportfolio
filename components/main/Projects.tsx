
"use client"
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Project.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projectsdata = [
    {
      pic: "/1.png",
      title: "BuildBeta",
      feature: `
      1. Homeowner can send projects with its real location.
      2. Contractor can bid on this project.
      3. Both parties can chat.
      4. A task desk is available where work can be created and completed.
      5. Payment method integrated with Stripe.
      `
    },
    {
      pic: "/Screenshot (138).png",
      title: "ExamDemo",
      feature: `
      1. Can coose answar .
      2. Dynamic Question.
      3. responsive.
    
      `
    },
    {
      pic: "/thingstodocanva.png",
      title: "Things to Do",
      feature: `
      1. Can book a location .
    2. can gift a tour pakage.
      3. full ecomarse fecelity .
      4.search according city county
    
    
      `
    }
  ];




  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px]  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <Swiper
          navigation
          pagination={{ type: "bullets", clickable: true }}
          autoplay={true}
          loop={true}
          slidesPerView={1}
          modules={[Autoplay, Navigation, Pagination]}
        >

          {
            projectsdata.map((ele, index) => (
              <SwiperSlide key={index}>
                <ProjectCard
                  src={ele.pic} // Corrected from ele.src
                  title={ele.title} // Assuming you have a title property in your project object
                  description={ele.feature}
                />
              </SwiperSlide>
            ))
          }




          {/* <SwiperSlide>
            <ProjectCard
              src="/NextWebsite.png"
              title="Modern Next.js Portfolio"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </SwiperSlide>

          <SwiperSlide>
            <ProjectCard
              src="/CardImage.png"
              title="Interactive Website Cards"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              // src="/SpaceWebsite.png"
              src="/thingstodocanva.png"
              title="Space Themed Website"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
          </SwiperSlide> */}
        </Swiper>

      </div>
    </div>
  );
};

export default Projects;
