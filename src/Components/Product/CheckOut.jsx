import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./About.css"

export default function CheckOut() {
  const location = useLocation();
  const { cartItems = [], quantity = {} } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState("");
  const [ContactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    company: "",
    Phone: "",
    Apert: "",
    Card: "",
    NameCard: "",
    Exp: "",
    Cvv: "",
  });

  // Function to handle changes in the contact information form
  const handleContactInfoChange = (e) => {
    setContactInfo({ ...ContactInfo, [e.target.name]: e.target.value });
  };
  
  // Function to handle changes in the payment method selection
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const calculateSalesTax = (subtotal, taxRate = 0.1) => {
    return subtotal * taxRate; // Default tax rate is 10%
  };

  // Function to calculate shipping
  const calculateShipping = (subtotal, freeShippingThreshold = 10000, shippingRate = 10) => {
    return subtotal >= freeShippingThreshold ? 0 : shippingRate; // Free shipping for orders over $100
  };

  const subtotal = cartItems.reduce(
    (total, item, index) => total + item.price * (quantity[index] || 1),
    0
  );

  const salesTax = calculateSalesTax(subtotal);
  const shipping = calculateShipping(subtotal);
  const total = subtotal + salesTax + shipping;
  // Ensure quantities and cartItems are properly linked
  return (
    <div className="p-6 h-[270vh] mt-[5rem] grid gap-4 grid-cols-2 border m-3 rounded-lg">
      <div className="p-4 pr-8">
        <h1 className="text-2xl">Contact Information</h1>
        <form action="">
          <div className="py-3">
            <label
              for="inputname"
              class="block text-gray-800 font-semibold text-sm"
            >
              Email Address
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="inputname"
                value={ContactInfo.email}
                onChange={handleContactInfoChange}
                class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <hr className="my-4" />
          <div className="grid grid-cols-2">
            <div className="py-3">
              <label
                for="inputname"
                className="block text-gray-800 font-semibold text-sm"
              >
                First Name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.firstName}
                  onChange={handleContactInfoChange}
                  className="block w-[16rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="py-3">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                Last Name
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.lastName}
                  onChange={handleContactInfoChange}
                  class="block w-[17rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <label
              for="inputname"
              class="block text-gray-800 font-semibold text-sm"
            >
              Company
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="inputname"
                value={ContactInfo.company}
                onChange={handleContactInfoChange}
                class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="py-3">
            <label
              for="inputname"
              class="block text-gray-800 font-semibold text-sm"
            >
              Address
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="inputname"
                value={ContactInfo.address}
                onChange={handleContactInfoChange}
                class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="py-3">
            <label
              for="inputname"
              class="block text-gray-800 font-semibold text-sm"
            >
              Apartment, suite, etc.
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="inputname"
                value={ContactInfo.apartment}
                onChange={handleContactInfoChange}
                class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="py-3">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                City
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.city}
                  onChange={handleContactInfoChange}
                  class="block w-[16rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="py-3">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                Country
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.country}
                  onChange={handleContactInfoChange}
                  class="block w-[17rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="py-3">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                State / Province
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.state}
                  onChange={handleContactInfoChange}
                  class="block w-[16rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="py-3">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                Postal code
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.postalCode}
                  onChange={handleContactInfoChange}
                  class="block w-[17rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
          </div>
          <div className="py-3">
            <label
              for="inputname"
              class="block text-gray-800 font-semibold text-sm"
            >
              Phone
            </label>
            <div class="mt-2">
              <input
                type="text"
                name="inputname"
                value={ContactInfo.phone}
                onChange={handleContactInfoChange}
                class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
              />
            </div>
          </div>

          <hr />
          <div className="py-3">
            <h1 className="py-2 text-2xl">Payment</h1>
            <div>
              <h2 className="py-2">Select Payment Method</h2>
              <div className="grid grid-cols-3">
                <div className="flex  gap-4 ">
                  <input
                    type="radio"
                    id="creditcard"
                    name="paymentMethod"
                    value="creditcard"
                    checked={paymentMethod === "creditcard"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label for="creditcard">Credit Card</label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label for="paypal">PayPal</label>
                </div>
                <div className="flex gap-4">
                  <input
                    type="radio"
                    id="paypal"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={handlePaymentMethodChange}
                  />
                  <label for="paypal">eTransfer</label>
                </div>
              </div>
            </div>

            <div className="py-2">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                Card number
              </label>
              <div class="mt-2 ">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.Card}
                  onChange={handleContactInfoChange}
                  class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="py-2">
              <label
                for="inputname"
                class="block text-gray-800 font-semibold text-sm"
              >
                Name on card
              </label>
              <div class="mt-2">
                <input
                  type="text"
                  name="inputname"
                  value={ContactInfo.NameCard}
                  onChange={handleContactInfoChange}
                  class="block w-[100%] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                />
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="py-2">
                <label
                  for="inputname"
                  class="block text-gray-800 font-semibold text-sm"
                >
                  Expiration date (MM/YY)e
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    value={ContactInfo.Exp}
                    onChange={handleContactInfoChange}
                    class="block w-[16rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>
              <div className="py-2">
                <label
                  for="inputname"
                  class="block text-gray-800 font-semibold text-sm"
                >
                  CVC
                </label>
                <div class="mt-2">
                  <input
                    type="text"
                    name="inputname"
                    value={ContactInfo.Cvv}
                    onChange={handleContactInfoChange}
                    class="block w-[17rem] rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800"
                  />
                </div>
              </div>
              <button>Confirm Order</button>
            </div>
          </div>
        </form>
      </div>

      <div>
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      {cartItems.length > 0 ? (
        <>
          <ul className="space-y-4 h-[25rem] overflow-y-scroll custom-scrollbar">
            {cartItems.map((item, index) => (
              <li key={index} className="flex h-20 justify-between px-3">
                <div className="flex">
                  <img src={item.image} alt={item.name} className="w-16 h-16" />
                 <span>
                 <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Quantity: {quantity[index] || 1}
                  </p>
                 </span>
                </div>
                <p>${(item.price * (quantity[index] || 1)).toFixed(2)}</p>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <p className="text-lg font-medium flex justify-between">
              <span>Sub Total:</span> <span>${subtotal.toFixed(2)}</span>
            </p>
            <p className="text-lg flex justify-between">
              <span>Sales Tax (10%):</span> <span>${salesTax.toFixed(2)}</span>
            </p>
            <p className="text-lg flex justify-between">
              <span>Shipping:</span> <span>${shipping.toFixed(2)}</span>
            </p>
            <hr className="my-2" />
            <p className="text-xl font-bold flex justify-between">
              <span>Total:</span> <span>${total.toFixed(2)}</span>
            </p>
          </div>
        </>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
    </div>
    </div>
  );
}
