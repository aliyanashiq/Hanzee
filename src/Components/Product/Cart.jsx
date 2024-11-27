import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../../ContextComponent";
import { useNavigate } from "react-router-dom";
import "./About.css";

export default function Cart() {
  const { cartItems, removeFromCart, handleCloseCartToggle } =
    useContext(ThemeContext);
  const navigate = useNavigate();

  // Use a state to track quantity changes for each product
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, product, index) => {
      acc[index] = 1; // Default to 1 quantity
      return acc;
    }, {})
  );

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [index]: Math.max(newQuantity, 1), // Ensure the quantity is at least 1
    }));
  };

  // Total price calculation
  const calculateTotal = () => {
    return cartItems
      .reduce(
        (total, item, index) => total + item.price * (quantities[index] || 1),
        0
      )
      .toFixed(2);
  };

  // Handle Checkout
  const handleCheckout = () => {
    const total = calculateTotal();

    // Create a simplified version of cart items (only serializable data)
    const serializedCartItems = cartItems.map((item, index) => ({
      
      name: item.name,
      price: item.price,
      quantity: quantities[index] || 1,
    }));

    // Pass only serializable data to the state
    navigate("/CheckOut", {
      state: { cartItems: serializedCartItems, total },
    });
  };

  return (
    <Dialog open={true} onClose={handleCloseCartToggle} className="relative z-30">
      {/* Modal Overlay */}
      <div className="fixed inset-0 bg-gray-500/75 z-30" aria-hidden="true" />

      {/* Modal Content */}
      <div className="fixed inset-y-0 right-0 z-40 w-[28rem] bg-white shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button onClick={handleCloseCartToggle}>
              <XMarkIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <ul
            role="list"
            className="custom-scrollbar -my-6 divide-y h-[25rem] overflow-y-scroll divide-gray-200 mt-4"
          >
            {cartItems.length > 0 ? (
              cartItems.map((product, index) => (
                <li key={index} className="flex py-6">
                  {/* Product Image */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={product.href}>{product.name}</a>
                        </h3>
                        <p className="ml-4">
                          $ {(product.price * (quantities[index] || 1)).toFixed(2)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        Brand: {product.brand}
                      </p>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(index, quantities[index] - 1)
                          }
                          disabled={quantities[index] <= 1} // Disable decrease if quantity is 1
                          className="h-8 w-8 flex justify-center items-center rounded border border-gray-300 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                        >
                          -
                        </button>
                        <p className="text-gray-500">{quantities[index]}</p>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(index, quantities[index] + 1)
                          }
                          className="h-8 w-8 flex justify-center items-center rounded border border-gray-300 text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeFromCart(index)}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="py-6 text-center text-sm text-gray-500">
                No items in the cart.
              </li>
            )}
          </ul>

          {/* Total Price */}
          <div className="mt-6 flex justify-between">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-medium">${calculateTotal()}</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleCheckout}
            className="mt-4 w-full px-4 py-2 text-center bg-indigo-600 text-white rounded hover:bg-indigo-500"
          >
            Checkout
          </button>
        </div>
      </div>
    </Dialog>
  );
}
