import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { toast, Bounce } from "react-toastify";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const SignIn = ({ toggle, close }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    toast("Wow you have successfully signed in", {
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
    <div className="dark:bg-slate-800 max-w-[400px] w-[95%] p-6 max-custom-sm:w-[280px] bg-white rounded-lg shadow-lg transform transition duration-300 hover:shadow-2xl mx-auto relative">
      {/* Cancel Button */}
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
      <div className="flex flex-col gap-3 mb-6 dark:text-white">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-600 dark:text-white">
          Sign In
        </h2>
        <p className="text-center text-sm md:text-lg text-gray-600 dark:text-white">
          Stay updated on your{" "}
          <span className="font-semibold text-blue-500">
            professional world
          </span>
        </p>
      </div>

      {/* Form */}
      <form action="#" onSubmit={handleForm}>
        <div className="flex flex-col gap-5">
          <input
            required
            className="w-full outline-none rounded-lg py-3 px-5 border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            type="text"
            placeholder="Username"
            id="username"
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
          Sign In
        </button>
      </form>

      {/* Footer */}
      <p className="mt-4 text-center text-gray-600 dark:text-white text-sm">
        Don't have an account?{" "}
        <a
          onClick={toggle}
          href="#"
          className="text-blue-500 font-semibold hover:underline transition duration-300"
        >
          Sign up here
        </a>
      </p>
    </div>
  );
};

export default SignIn;
