// @ts-nocheck
import React from 'react'
import Lo1 from "../assets/pexels-entero-17900722.jpg"; 
function Comp2() {
  return (
    <div className="relative h-screen isolate px-6 pt-14 lg:px-8">
        
        <div className="mx-auto grid grid-cols-2  py-3 sm:py-4 lg:py-6">
         
          <div className="pl-5 pt-3 ">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-black sm:text-7xl">
            Your Savings Are Here
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-black sm:text-xl/8">
            Get up to $100 back via online or mail in rebate when you purchase and install select sets of 4 Goodyear tires. Plus, get an additional $100 more when you use the Goodyear Credit Card by online or mail-in rebate. Offer expires 12/31/24. Offer Details
            </p>
            <div className="mt-10 flex items-center  gap-x-6">
              <a
                href="#"
                className="rounded-3xl bg-indigo-600 px-3.5 py-2.5 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find Tire
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={Lo1} alt="Lo1" className="h-[400px] w-[350px] shadow-custom object-cover" />
          </div>
        </div>
      </div>
  )
}

export default Comp2