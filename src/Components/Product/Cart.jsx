// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../../ContextComponent";

export default function Cart() {
  const { cartItems, removeFromCart, handleCloseCartToggle } =
    useContext(ThemeContext);

  return (
    <Dialog
      open={true}
      onClose={handleCloseCartToggle}
      className="relative z-30"
    >
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
          <ul role="list" className="-my-6 divide-y divide-gray-200 mt-4">
            {cartItems.length > 0 ? (
              cartItems.map((product,index) => (
                <li key={index} className="flex py-6">
                  {/* Product Image */}
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
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
                        <p className="ml-4">${product.price}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {product.color}
                      </p>
                    </div>

                    {/* Quantity and Actions */}
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {product.quantity}</p>
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

          <div className="mt-6 flex justify-between">
            <span className="text-lg font-medium">Total:</span>
            <span className="text-lg font-medium">
              $
              {cartItems
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </Dialog>
  );
}
