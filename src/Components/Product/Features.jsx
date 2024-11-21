// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Features() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) {
    return <p>No product selected.</p>;
  }

  return (
    <div className="p-6 h-auto mt-[5rem]">
      <p className="pl-10 text-2xl">
        <Link to={"/"} className="text-blue-600">
          Home
        </Link>{" "}
        /{" "}
        <Link to={"/Product"} className="text-blue-600">
          Tire&apos;s
        </Link>
        /{product.name}
      </p>
      <div className="grid grid-cols-2 p-4 h-[90vh] mt-3 ">
        <div className="flex justify-center">
          <img src={product.image} alt="" className="h-[60vh]" />
        </div>
        <div>
          <p className="text-sm">Goodyear</p>
          <h2 className="text-6xl pb-6 pt-2">{product.name}</h2>
          <div className="rating flex space-x-1">
            <input
              value="5"
              name="rate"
              id="star5"
              type="radio"
              className="hidden peer"
            />
            <label
              title="5 stars"
              htmlFor="star5"
              className="cursor-pointer text-gray-400 hover:text-yellow-500 peer-checked:text-yellow-500 transition"
            >
              ★
            </label>

            <input
              value="4"
              name="rate"
              id="star4"
              type="radio"
              className="hidden peer"
            />
            <label
              title="4 stars"
              htmlFor="star4"
              className="cursor-pointer text-gray-400 hover:text-yellow-500 peer-checked:text-yellow-500 transition"
            >
              ★
            </label>

            <input
              value="3"
              name="rate"
              id="star3"
              type="radio"
              defaultChecked
              className="hidden peer"
            />
            <label
              title="3 stars"
              htmlFor="star3"
              className="cursor-pointer text-gray-400 hover:text-yellow-500 peer-checked:text-yellow-500 transition"
            >
              ★
            </label>

            <input
              value="2"
              name="rate"
              id="star2"
              type="radio"
              className="hidden peer"
            />
            <label
              title="2 stars"
              htmlFor="star2"
              className="cursor-pointer text-gray-400 hover:text-yellow-500 peer-checked:text-yellow-500 transition"
            >
              ★
            </label>

            <input
              value="1"
              name="rate"
              id="star1"
              type="radio"
              className="hidden peer"
            />
            <label
              title="1 star"
              htmlFor="star1"
              className="cursor-pointer text-gray-400 hover:text-yellow-500 peer-checked:text-yellow-500 transition"
            >
              ★
            </label>
            <p>Write a review</p>
          </div>

          <ul className=" grid grid-cols-2 gap-3  w-[20rem] my-3">
            {product.qualityPoints &&
              Object.keys(product.qualityPoints).map((key) => (
                <li
                  className="bg-slate-200 w-[10rem] p-2 text-center rounded shadow-xl "
                  key={key}
                >
                  <span>{product.qualityPoints[key].icon}</span>
                  {product.qualityPoints[key].label}
                </li>
              ))}
          </ul>
          <p className="pt-3 text-lg font-bold">Starting at:</p>
          <p className="p ">
            {" "}
            ${product.price}.00 <sub>rp</sub>
          </p>
          <p className="pt-3 text-base">{product.description}</p>
        </div>
      </div>
      <div className="h-[80vh]">
        <h1 className=" text-5xl font-thin ">Tire Features</h1>
        <div className=" grid grid-cols-3 gap-4 p-5 ">
          {product.tireFeature &&
            Object.keys(product.tireFeature).map((key) => (
              <div key={key} className="shadow-xl p-3">
                <h2 className="text-2xl py-3 font-bold">
                  {product.tireFeature[key].topic}
                </h2>
                <p className="text-base font-thin">
                  {product.tireFeature[key].parag}
                </p>
              </div>
            ))}
        </div>
      </div>
      <div className="h-[70vh]">
        <h1 className=" text-5xl font-thin ">Warranties & Guarantees</h1>
        <div className="grid grid-cols-3 gap-4 p-5">
          {product.WarrantiesGuarantees &&
            Object.keys(product.WarrantiesGuarantees).map((key) => (
              <div key={key} className="shadow-xl p-3">
                <h2 className="text-2xl py-3 font-bold h-[7rem] ">{product.WarrantiesGuarantees[key].topic}</h2>
                <p className="text-base font-thin">{product.WarrantiesGuarantees[key].parag}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="h-[70vh] ">
        <h1 className="text-3xl py-3">Specification</h1>
        <ul className="grid grid-cols-2 p-4 gap-4">
          {product.specification &&
            Object.keys(product.specification).map((key) => (
              <li key={key} className="flex justify-between shadow-xl p-3 ">
                <span className="">
                  <strong>{product.specification[key].topic}:</strong>
                </span>{" "}
                <span>{product.specification[key].parag}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Features;
