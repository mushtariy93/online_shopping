import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { toast, Bounce } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignUp = ({ toggle, close }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    toast("Wow you have successfully signed up", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

    close();
  };

  return (
    <div className="dark:bg-slate-800 w-[400px] max-custom-sm:w-[280px] p-6 bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl mx-auto relative">
      {/* Cancel button */}
      <button
        onClick={close}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-300"
      >
        <MdOutlineCancel
          size={22}
          className="text-gray-600 bg-gray-300 rounded-full"
        />
      </button>

      {/* Header */}
      <div className="flex flex-col gap-3 mb-6">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 dark:text-white">
          Sign Up
        </h2>
        <p className="dark:text-white text-center text-sm md:text-lg text-gray-600">
          Start your{" "}
          <span className="font-semibold text-blue-500">30-day free trial</span>{" "}
          today!
        </p>
      </div>

      {/* Form */}
      <form action="#" onSubmit={handleForm}>
        <div className="flex flex-col gap-5">
          <input
            required
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Full Name"
            id="name"
          />
          <input
            required
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="email"
            placeholder="Email Address"
            id="email"
          />
          <div className="relative">
            <input
              required
              className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id="password"
            />
            {showPassword ? (
              <FaRegEye
                onClick={() => setShowPassword(!showPassword)}
                size={20}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
              />
            ) : (
              <FaRegEyeSlash
                onClick={() => setShowPassword(!showPassword)}
                size={20}
                className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500 hover:text-blue-500"
              />
            )}
          </div>
        </div>
        <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all">
          Sign Up
        </button>
      </form>

      {/* Footer */}
      <p className="mt-4 text-center dark:text-white text-gray-600 text-sm">
        Already have an account?{" "}
        <a
          onClick={() => toggle()}
          href="#"
          className="text-blue-500 font-semibold hover:underline transition duration-300"
        >
          Log in here
        </a>
      </p>
    </div>
  );
};

export default SignUp;
