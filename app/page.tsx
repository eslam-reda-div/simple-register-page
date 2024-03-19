"use client";

import { Suspense, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useStore } from "./store.js";

function Loader() {
  return (
    <div className="transition ease-in-out transition-all fixed top-0 left-0 w-full h-full bg-white flex justify-center items-center">
      <div className="loader transition ease-in-out transition-all  ">
        <div>
          <ul>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
            <li>
              <svg viewBox="0 0 90 120" fill="currentColor">
                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
              </svg>
            </li>
          </ul>
        </div>
        <span>Loading ...</span>
      </div>
    </div>
  );
}

function Page() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [loader, setLoader] = useState<boolean>(true);
  const theme = useStore((state) => state.theme);
  const setTheme = useStore((state) => state.setTheme);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  const save = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      try {
        // toast.success("Account created successfully");
        Swal.fire("Account created successfully", "", "success");

        setLoading(false);
      } catch (error) {
        toast.error("Account creation failed");
        setLoading(false);
      }
    }, 1500);
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <div className={theme}>
      <label className="switch transition ease-in-out transition-all  swap swap-rotate fixed mt-5 ml-5 text-white">
        <input
          type="checkbox"
          className="transition ease-in-out transition-all  theme-controller"
          value="synthwave"
          onClick={() => setTheme()}
        />
        <svg
          className="transition ease-in-out transition-all  swap-off fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>
        <svg
          className="transition ease-in-out transition-all  swap-on fill-current w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
      </label>
      <Toaster />
      <div className="  flex transition ease-in-out delay-150 transition-all	 justify-center content-center items-center bg-gradient-to-r from-cyan-500 dark:from-[#313362] to-blue-500 dark:to-[#181A2E] w-full h-full">
        <div
          data-wow-duration="2s"
          className="my-card transition ease-in-out transition-all  transition ease-in-out transition-all slideInLeft w-full max-w-4xl p-4 bg-white border my-20 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <form
            noValidate
            onSubmit={(e) => save(e)}
            className="transition ease-in-out transition-all  space-y-6"
          >
            <h1 className="transition ease-in-out transition-all  text-4xl text-center font-bold py-5 border-b-2 text-gray-900 dark:text-white">
              <span className="transition ease-in-out transition-all  text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 dark:from-[#6984aa] dark:to-[#2f4c9c]">
                Create Account
              </span>
            </h1>
            <div className="transition ease-in-out transition-all  flex justify-between down">
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your first name
                </label>
                <input
                  className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Inter your first name"
                />
              </div>
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your last name
                </label>
                <input
                  className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Inter your first name"
                />
              </div>
            </div>
            <div>
              <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Your email
              </label>
              <input
                className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
              />
            </div>
            <div className="transition ease-in-out transition-all  flex justify-between down">
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="••••••••"
                />
              </div>
            </div>
            <div>
              <label className="transition ease-in-out transition-all  block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Gender
              </label>
              <div className="transition ease-in-out transition-all  flex justify-between down">
                <div className="transition ease-in-out transition-all   flex items-center w-[49%] ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-1"
                    type="radio"
                    value="Male"
                    name="bordered-radio"
                    className="transition ease-in-out transition-all  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-1"
                    className="transition ease-in-out transition-all  w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Male
                  </label>
                </div>
                <div className="transition ease-in-out transition-all  flex items-center w-[49%] ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-2"
                    type="radio"
                    value="Female"
                    name="bordered-radio"
                    className="transition ease-in-out transition-all  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-2"
                    className="transition ease-in-out transition-all  w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Female
                  </label>
                </div>
              </div>
            </div>

            <div>
              <label className="transition ease-in-out transition-all  block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                Hobbies
              </label>
              <div className="transition ease-in-out transition-all  flex justify-between down">
                <div className="transition ease-in-out transition-all   flex items-center w-[49%] ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-3"
                    type="checkbox"
                    value="Male"
                    name="bordered-radio"
                    className="transition ease-in-out transition-all  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-3"
                    className="transition ease-in-out transition-all  w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Music
                  </label>
                </div>
                <div className="transition ease-in-out transition-all  flex items-center w-[49%] ps-4 border border-gray-200 rounded dark:border-gray-700">
                  <input
                    id="bordered-radio-4"
                    type="checkbox"
                    value="Female"
                    name="bordered-radio"
                    className="transition ease-in-out transition-all  w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="bordered-radio-4"
                    className="transition ease-in-out transition-all  w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    sports
                  </label>
                </div>
              </div>
            </div>

            <div className="transition ease-in-out transition-all  flex justify-between down">
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label
                  htmlFor="countries"
                  className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Source of income
                </label>
                <select className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option value="US">Employed</option>
                  <option value="CA">Freelancer</option>
                  <option value="FR">Bloger</option>
                </select>
              </div>
              <div className="transition ease-in-out transition-all  w-[49%]">
                <label
                  htmlFor="default-range"
                  className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Income
                </label>
                <div className="transition ease-in-out transition-all  flex justify-between">
                  <input
                    id="default-range"
                    type="range"
                    onChange={(e) => setCount(Number(e.target.value))}
                    value={count}
                    className="transition ease-in-out transition-all  w-[80%] mt-4 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <div className="transition ease-in-out transition-all  bg-blue-500 text-white py-1 px-3 rounded">
                    {count}K
                  </div>
                </div>
              </div>
            </div>
            <div className="transition ease-in-out transition-all  flex justify-between">
              <div className="transition ease-in-out transition-all  w-full">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Age
                </label>
                <input
                  type="number"
                  className="transition ease-in-out transition-all  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="25"
                />
              </div>
            </div>
            <div className="transition ease-in-out transition-all  flex justify-between">
              <div className="transition ease-in-out transition-all  w-full">
                <label className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Bio
                </label>
                <textarea
                  className="transition ease-in-out transition-all  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your bio here ..."
                ></textarea>
              </div>
            </div>
            <div className="transition ease-in-out transition-all  flex justify-between">
              <div className="transition ease-in-out transition-all  w-full">
                <label
                  htmlFor="message"
                  className="transition ease-in-out transition-all  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Profile picture
                </label>
                <div className="transition ease-in-out transition-all  flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="transition ease-in-out transition-all  flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div className="transition ease-in-out transition-all  flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        className="transition ease-in-out transition-all  w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p className="transition ease-in-out transition-all  mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="transition ease-in-out transition-all  font-semibold">
                          Click to upload
                        </span>{" "}
                        or drag and drop
                      </p>
                      <p className="transition ease-in-out transition-all  text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="transition ease-in-out transition-all  hidden"
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className="transition ease-in-out transition-all  flex items-start">
              <div className="transition ease-in-out transition-all  flex items-start">
                <div className="transition ease-in-out transition-all  flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="transition ease-in-out transition-all  w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  htmlFor="remember"
                  className="transition ease-in-out transition-all  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Remember me
                </label>
              </div>
            </div>
            <button
              disabled={loading}
              type="submit"
              className="transition ease-in-out transition-all  w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {!loading ? "Create my account" : "Loading ..."}
            </button>

            <div className="transition ease-in-out transition-all  flex text-sm font-medium text-gray-500 dark:text-gray-300">
              <span>
                Have an account?{" "}
                <a
                  href="#"
                  className="transition ease-in-out transition-all  text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login
                </a>
              </span>
              <a
                href="#"
                className="transition ease-in-out transition-all  ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
              >
                Lost Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Page />
      </Suspense>
    </div>
  );
}

export default App;
