import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

import "../App.css";
// @ts-ignore
import Image12 from "../assets/pexels-venkatganta-17944591.jpg";
// @ts-ignore
import Image13 from "../assets/pexels-george-chambers-413080139-19816887.jpg";
// @ts-ignore
import Image14 from "../assets/pexels-entero-17900722.jpg";
// @ts-ignore
import Image15 from "../assets/pexels-ene-marius-241207761-18394532.jpg";
// @ts-ignore
import Image16 from "../assets/images__6_-removebg-preview.png";
// @ts-ignore
import Image17 from "../assets/images__1_-removebg-preview.png";
// @ts-ignore
import Image18 from "../assets/images__10_-removebg-preview.png";
// @ts-ignore
import Image19 from "../assets/Tire-transformed.webp";
import { useNavigate } from "react-router-dom";

function Comp4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigated=useNavigate();
  const imageData = [
    {
      id: 1,
      mainImage: Image12,
      overlayImage: Image16,
      TextHeading: "COMMUTE & EVERYDAY",
      tyreName: "All-Season Tyre",
    },
    {
      id: 2,
      mainImage: Image13,
      overlayImage: Image17,
      TextHeading: "OFF-ROAD ADVENTURES",
      tyreName: "Mud-Terrain Tyre",
    },
    {
      id: 3,
      mainImage: Image14,
      overlayImage: Image16,
      TextHeading: "HIGHWAY & TOURING",
      tyreName: "Performance Tyre",
    },
    {
      id: 4,
      mainImage: Image15,
      overlayImage: Image19,
      TextHeading: "WINTER & SNOW",
      tyreName: "Winter Tyre",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );
  };

  const Handelshop =()=>{
    navigated('/Product');
  }

  return (
    <div className="flex h-screen w-full p-5 bg-stone-800 text-white">
      <div className="w-1/3 p-5 flex flex-col justify-center relative">
        <p className="text-sm font-semibold">SHOP BY CATEGORY</p>
        <h2 className="text-5xl mt-4">
          Tires for the <br /> places you’ll go.
        </h2>
        <button onClick={Handelshop} className="bg-black text-white w-[30%] mt-10 px-1 py-2 rounded">
          SHOP NOW
        </button>
      </div>

      <div className="w-2/3 relative">
        <div className="slider-container z-10">
          <div
            className="slider flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 50}%)`,
            }}
          >
            {imageData.map((item) => (
              <div key={item.id} className="slide relative">
                <img
                  src={item.mainImage}
                  alt={`Slide ${item.id}`}
                  className="main-image"
                />
                <div className="overlay flex-col justify-center items-center text-center">
                  <img
                    src={item.overlayImage}
                    alt={`Overlay ${item.id}`}
                    className="overlay-image"
                  />
                  <div className="text-overlay">
                    <h2 className="text-heading z-30">{item.TextHeading}</h2>
                    <p className="tyre-name">{item.tyreName}</p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>

          <div className="controls">
            <button
              onClick={handlePrev}
              className="bg-black text-white px-4 py-2 rounded"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="bg-black text-white px-4 py-2 rounded"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="indicator">
            <div
              className="progress-line"
              style={{
                width: `${(currentIndex + 2) * (80 / imageData.length)}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp4;
