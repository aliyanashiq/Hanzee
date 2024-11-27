import React from "react";
import imageAbout from "../../assets/izUYSkPMZj_CyrUqS9VFU-transformed.webp";
import backgroundimage from "../../assets/pexels-venkatganta-17944591.jpg";
import "./About.css";
function About() {
  return (
    <div className="h-[100vh] w-full mt-[5rem]">
      <div className=" aboutimage  flex items-center justify-center relative ">
        
          
          <p className="text-2xl text-white max-w-lg  absolute left-[2rem] top-[5rem] ">
            <h1 className="text-4xl py-4">About us </h1>
            We are a team of dedicated professionals passionate about ensuring
            your vehicle's performance. Whether you need new tires, expert
            repairs, or maintenance advice, we’ve got you covered. Our shop is
            equipped with state-of-the-art tools and staffed by experienced
            technicians who care about delivering excellence.
          </p>
          <img
            src={imageAbout}
            alt="About Us"
            className="max-w-sm w-full absolute top-[21rem] left-[54rem] drop-shadow-2xl "
          />
        
      </div>
    </div>
  );
}

export default About;
