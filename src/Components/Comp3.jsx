// @ts-nocheck
import React, { useState } from "react";

import { BsChevronDoubleRight } from "react-icons/bs";
import Lo1 from "../assets/pexels-george-chambers-413080139-19816887.jpg";
import Lo2 from "../assets/images (9).jpg";
import Lo3 from "../assets/Tire-transformed.webp";
import "../App.css";

function Comp3() {
  const [buttonHovered, setButtonHovered] = useState(false);
  return (
    <div className="h-[80vh] w-full grid grid-cols-2 p-5 relative">
      <div className="side1 p-8">
        {/* Make the h1 look like a button */}
        <h1 className="text-xl w-[20%] font-semibold text-center bg-yellow-400 text-black py-1 px-2 hover:bg-blue-600 cursor-pointer clip-custom-shape">
          New
        </h1>
        <h2 className="mt-4 text-3xl font-bold">
          Assurance <br /> WeatherReady® 2
        </h2>
        <h3 className="text-xl mt-2 text-gray-700">
          Confidence In All Weather Conditions
        </h3>
        <p className="mt-4 text-gray-600">
          Delivering year-round grip with specialized tread technology, enhanced
          wet traction through AquaTred® and Evolving Traction™ Grooves, and
          smooth control with comfort inserts.
        </p>

        {/* Button that changes content on mouse leave */}
        <button
          className="flex items-center justify-center mt-6 bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg  focus:outline-none transition duration-200 ease-in-out"
          onMouseEnter={() => setButtonHovered(true)}
          onMouseLeave={() => setButtonHovered(false)}
        >
          Find Your Fitment
          <BsChevronDoubleRight
            className={`ml-1 transition-transform duration-300 ${
              !buttonHovered ? "animate-slide" : ""
            }`}
          />
        </button>
      </div>
      <div className="side2 grid grid-cols-2 gap-2 relative">
        <img src={Lo1} alt="AWR-2 Side-2" className="w-full h-[70vh] relative left-14 object-cover clip-custom-shape" />
        <img
          src={Lo2}
          alt="AWR-2 Side-2"
          className="w-full h-[70vh] object-cover clip-custom-shap"
        />
      </div>
      <div className="side-image absolute top-[10rem] left-[39rem]">
        <img
         src={Lo3}
          alt="AWR-2 Side-Image"
          className="w-[60%] h-[50vh]  object-cover "
        />
      </div>
    </div>
  );
}

export default Comp3;
