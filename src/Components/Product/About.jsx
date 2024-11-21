const [quantities, setQuantities] = useState(1);

// Function to update quantity


// Total price calculation
const calculateTotal = () => {
  return cartItems
    .reduce(
      (total, item, index) => total + item.price * quantities[index], 0
    )
    .toFixed(2);
};
<div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities++
                          }
                          disabled={quantities[index] <= 1} // Disable decrease if quantity is 1
                          className="h-8 w-8 flex justify-center items-center rounded border border-gray-300 text-gray-500 hover:text-gray-700 disabled:opacity-50"
                        >
                          -
                        </button>
                        <p className="text-gray-500">{quantities}</p>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantities--
                          }
                          className="h-8 w-8 flex justify-center items-center rounded border border-gray-300 text-gray-500 hover:text-gray-700"
                        >
                          +
                        </button>
                      </div>