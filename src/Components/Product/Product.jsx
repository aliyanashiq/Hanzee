// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../ContextComponent";
import { FaOpencart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import './Button.css';

function Product() {
  const { Dataset } = useContext(ThemeContext);
  const [selectedCategory, setSelectedCategory] = useState("Cd70");
  const { addToCart } = useContext(ThemeContext);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-[200vh] w-full mt-[5rem]">
      <p className="pl-10 text-2xl">
        <Link to={"/"} className="text-blue-600">
          Home
        </Link>{" "}
        / Tires
      </p>
      <h1 className="pl-10 text-7xl font-thin">Tires</h1>
      <nav className="p-4 my-4 mx-9">
        <div className="flex flex-wrap justify-center space-x-8 md:space-x-6">
          {Object.keys(Dataset).map((category) => (
            <button
              key={category} // Ensure unique key for each category button
              onClick={() => handleCategoryChange(category)}
              className="relative px-4 py-2 font-medium transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 hover:after:w-full after:transition-all after:duration-300"
            >
              {category}
            </button>
          ))}
        </div>
      </nav>

      <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {Dataset[selectedCategory]?.map((product, index) => (
          <div
            key={product.id || index} // Ensure unique key for each product
            className="group relative lg:h-[70vh] bg-white shadow-lg rounded-lg overflow-hidden items-start transition hover:shadow-2xl"
          >
            {/* Product Image */}
            <img
              alt={product.name}
              src={product.image}
              className="lg:w-[30%] w-full h-[10rem] object-cover group-hover:opacity-90 transition duration-300"
            />
            <div className="mt-4 absolute top-0 left-[15rem]">
              <ul className="space-y-2">
                {Object.keys(product.qualityPoints).map((key, idx) => (
                  <li
                    key={`${product.id}-${key}-${idx}`} // Ensure unique key for qualityPoints
                    className="flex items-center space-x-2 bg-gray-200 p-2 w-[20rem] rounded-[5rem]"
                  >
                    <span className="text-blue-500">
                      {product.qualityPoints[key].icon}
                    </span>
                    <span className="text-sm text-gray-600">
                      {product.qualityPoints[key].label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Details */}
            <div className="p-4 lg:w-ful flex flex-col justify-between pt-12">
              {/* Name and Brand */}
              <div className="flex justify-between">
                <h2 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-500">Brand: {product.brand}</p>
              </div>

              {/* Price and Size */}
              <div className="mt-4 flex justify-between">
                <p className="text-sm text-gray-500">Size: {product.size}</p>
                <p className="text-lg font-bold text-gray-800">
                  Price: ${product.price}
                </p>
              </div>

              <p className="text-sm text-gray-600 mt-2 h-12">
                {product.description}
              </p>
              <div className="flex justify-between">
                <button
                  onClick={() => addToCart(product)}
                  className="relative flex h-10 w-36 items-center justify-center overflow-hidden rounded-lg bg-yellow-500 shadow-md transition-transform duration-500 hover:scale-105 active:scale-95"
                >
                  <span className="relative flex left-[-15px] items-center justify-center transition-transform duration-500 group-hover:left-[-05px]">
                    <FaOpencart className="transition-transform duration-500" />
                  </span>
                  <p className="relative z-20 text-sm font-semibold text-black transition-transform duration-500">
                    Add to Cart
                  </p>
                </button>

                <button className="learn-more">
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Learn More</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
