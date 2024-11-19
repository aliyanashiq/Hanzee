"use client";

import { useState, useEffect, useContext } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo-transformed.webp";
// eslint-disable-next-line no-unused-vars
import React from "react";
import { ThemeContext } from "../ContextComponent";
import Cart from "../Components/Product/Cart";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/Product" },
  { name: "Feature", href: "#" },
  { name: "About", href: "#" },
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems,CartDisplay, handleCartToggle } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled ? "bg-black text-white" : "bg-transparent text-gray-900"
      }`}
    >
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Logo"
              src={Logo}
              className="absolute bottom-1 h-16 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-semibold"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div onClick={handleCartToggle} className="hidden lg:flex lg:flex-1 lg:justify-end gap-x-6 relative left-[-25px] cursor-pointer">
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
          <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {cartItems.length}
          </span>
        </div>
        <Link to="/login" className="text-sm font-semibold">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="Logo" src={Logo} className="h-8 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div
                  onClick={handleCartToggle}
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold hover:bg-gray-50 cursor-pointer"
                >
                  <ShoppingCartIcon className="h-5 w-5" aria-hidden="true" />
                  Cart
                </div>
                <Link
                  to="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold hover:bg-gray-50"
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      {CartDisplay && <Cart/>}
    </header>
  );
}
