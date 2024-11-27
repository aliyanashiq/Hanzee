import { useLocation } from "react-router-dom";

export default function CheckOut() {
  const location = useLocation();
  const { cartItems = [], quantity = {} } = location.state || {};

  // Ensure quantities and cartItems are properly linked
  return (
    <div className="p-6 h-[100vh] mt-12  ">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      
      {cartItems.length > 0 ? (
        <>
          <ul className="space-y-4 ">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {quantity[index] || 1}
                  </p>
                </div>
                <p>${(item.price * (quantity[index] || 1)).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-medium">
              Total: $
              {cartItems
                .reduce(
                  (total, item, index) =>
                    total + item.price * (quantity[index] || 1),
                  0
                )
                .toFixed(2)}
            </p>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
  );
}
