import React, { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ThemeContext } from "../ContextComponent";

export default function Login() {
  const {
    HandelCloseLogin,
    isRegistrationOpen,
    toggleRegistration,
    handleRegistrationSubmit,
    handleInputChange,
    formData,
    loginData,
        handleInputChangeLogin,
        handleLoginSubmit,
  } = useContext(ThemeContext);

  return (
    <Dialog open={true} onClose={HandelCloseLogin} className="relative z-30">
      <div
        className="fixed inset-0 bg-black bg-opacity-25"
        aria-hidden="true"
      />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
          <div className="flex justify-end">
            <button
              onClick={HandelCloseLogin}
              className="rounded-full p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {isRegistrationOpen ? (
            <div>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form onSubmit={handleLoginSubmit} className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleInputChangeLogin}
                  required
                  className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={handleInputChangeLogin}
                  required
                  className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
              >
                Sign in
              </button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500">
              Not a member?{" "}
              <button
                onClick={toggleRegistration}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Register now
              </button>
            </p>
          </div>
          ) : (
            <div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900">
                  Create an account
                </h2>
              </div>
              <form
                onSubmit={handleRegistrationSubmit}
                className="mt-6 space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-gray-300 py-2 px-3 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none"
                >
                  Register
                </button>
              </form>
              <p className="mt-6 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <button
                  onClick={toggleRegistration}
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Sign in
                </button>
              </p>
            </div>
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
