import React from 'react'
import { BsChevronDoubleRight } from "react-icons/bs";
// @ts-ignore
import Lo1 from "../assets/istockphoto-1486107227-612x612.jpg";
// @ts-ignore
import Lo2 from "../assets/download (9).jpg";
import { FaRegCalendarAlt, FaLock, FaTag } from "react-icons/fa";
function Comp5() {
    
  return (
    
    <div className="h-[90vh] w-full grid grid-cols-2 p-5 relative">
      <div className="side1 px-4">
        {/* Make the h2 look like a button */}
        <h2 className=" text-xl font-bold  py-3 rounded-md inline-block">
          Why buy Goodyear?
        </h2>
        <h3 className="text-5xl font-thin mt-2 text-gray-700">
          Focus on the good times, we’ll handle the rest.
        </h3>

        {/* Guarantee List */}
        <ul className="mt-6 space-y-4 text-lg">
          <li className="flex items-center space-x-4 p-3  border-gray-300 rounded-md  ">
            <FaTag className="text-yellow-400 text-2xl" />
            <span className="font-semibold text-gray-800">Price Match Guarantee</span>
          </li>
          <li className="flex items-center space-x-4 p-3  border-gray-300 rounded-md  ">
            <FaRegCalendarAlt className="text-yellow-400 text-2xl" />
            <span className="font-semibold text-gray-800">60-Day Satisfaction Guarantee</span>
          </li>
          <li className="flex items-center space-x-4 p-3  border-gray-300 rounded-md  ">
            <FaLock className="text-yellow-400 text-2xl" />
            <span className="font-semibold text-gray-800">Online Purchase Guarantee</span>
          </li>
        </ul>
      </div>
      <div className="side2 grid grid-cols-2 gap-2 relative">
        <img src={Lo1} alt="AWR-2 Side-2" className="w-full h-[80vh] relative left-14 object-cover clip-custom-shape" />
        <img
          src={Lo2}
          alt="AWR-2 Side-2"
          className="w-full h-[80vh] object-cover clip-custom-shap"
        />
      </div>
      
    </div>
  )
}

export default Comp5