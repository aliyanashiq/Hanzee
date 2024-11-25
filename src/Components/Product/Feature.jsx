import React from "react";
import ShopLogo from "../../assets/Logo-transformed.webp";
import { FaArrowLeftLong } from "react-icons/fa6";
// import "animate.css/animate.compat.css"
import { FaArrowRightLong } from "react-icons/fa6";

import "./Button.css";

function Feature() {
  const features = [
    {
      title: "Extensive Tire Selection",
      details: [
        "Sport Tires – For high-performance riding.",
        "Cruiser Tires – Built for long-distance comfort.",
        "Off-Road Tires – Designed for rugged terrains.",
        "Touring Tires – Balanced for long rides and durability.",
      ],
    },
    {
      title: "Expert Tire Fitting Services",
      details: [
        "Precision Installation: Our trained technicians ensure every tire is mounted and balanced to perfection.",
        "On-the-Spot Adjustments: We offer quick fixes to ensure your bike is road-ready in no time.",
      ],
    },
    {
      title: "Tire Maintenance & Repair",
      details: [
        "Tread Wear Check: Ensure optimal grip and safety.",
        "Puncture Repair: Quick and reliable patchwork to extend tire life.",
        "Pressure Optimization: For a smoother, safer ride.",
      ],
    },
    {
      title: "Customization Options",
      details: [
        "Make your bike stand out with personalized tire designs, sizes, and brands tailored to your unique style and needs.",
      ],
    },
    {
      title: "Top Brands at the Best Prices",
      details: [
        "We stock trusted tire brands like Michelin, Bridgestone, Pirelli, and Dunlop, ensuring quality and durability at competitive prices.",
      ],
    },
    {
      title: "Online Shop & Delivery",
      details: [
        "Convenience: Order your favorite tires online and have them delivered right to your door.",
        "Quick Turnaround: Same-day delivery options available for select areas.",
      ],
    },
  ];

  return (
    <div className="h-auto mt-[7rem]">
      <div className="h-[90vh] grid grid-cols-2">
        <div className="p-10">
          <h1 className="text-4xl font-medium">
            Welcome to H&A Tire – Your One-Stop Motorcycle Tire Solution
          </h1>
          <p className="p-2 mt-5 text-xl">
            At H&A Tire, we’re committed to delivering the highest quality
            motorcycle tires and services to keep you safe and in control on
            every ride. Explore our features and see why we’re the trusted
            choice for riders everywhere.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <img
            src={ShopLogo}
            alt="Shop Logo"
            className="logo-animation h-[20rem] w-[20rem] drop-shadow-2xl relative"
          />
        </div>
      </div>
      <div className="relative h-[250vh] bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Our Key Features
        </h1>

        {/* Vertical Line with Circles */}
        <div className="relative ">
          <div className="absolute left-1/2 top-0 h-[230vh] w-1 bg-gray-300 transform -translate-x-1/2"></div>

          {/* Top Circle */}
          <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-gray-700 transform -translate-x-1/2 -translate-y-1/2"></div>

          {/* Bottom Circle */}
          <div className="absolute left-1/2 bottom-[-79rem] w-6 h-6 rounded-full bg-gray-700 transform -translate-x-1/2 translate-y-1/2"></div>
        </div>

        <div className="space-y-2 ">
          {features.map((feature, index) => (
            <div key={index} className="  relative  ">
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-md p-4 bg-white rounded-lg shadow-md relative top-[6rem] ${
                    (index % 2 === 0 ? "text-left" : "text-left",
                    index % 2 === 1 ? "right-[6rem]" : "left-[6rem]")
                  }`}
                >
                  <h2 className="text-xl font-semibold text-gray-700 mb-2">
                    {feature.title}
                  </h2>
                  <ul className="text-gray-600 text-sm list-disc pl-5">
                    {feature.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Add Arrow Below Each Feature (Except Last One) */}
              {index < features.length  && (
                <div className="flex justify-center my-4 relative">
                  <div className="bg-black text-3xl transform rotate-90 h-4 w-4 rounded-full"></div>
                  {index % 2 === 0 ? <span className=" absolute right-[40rem] "><FaArrowLeftLong /></span>: <span className=" absolute left-[40rem] "><FaArrowRightLong /></span>}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feature;
