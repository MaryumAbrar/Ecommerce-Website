import BreadCrumb from "@/components/common/BreadCrumb";
import Brands from "@/components/Home/Brands";
import React from "react";

const MyAccount = () => {
  return (
    <div>
      <BreadCrumb pageTitle="My Account" />
      <div className="flex flex-col items-center justify-center bg-gray-50 px-4">
        <div className="bg-white shadow-lg rounded-lg p-12 w-full max-w-xl">
          <h2 className="text-center text-3xl font-bold text-gray-700">Login</h2>
          <p className="text-sm mt-1 tracking-wider text-gray-400 text-center">Please login using account details below</p>
          {/* Form */}
          <form className="space-y-7 mt-10">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none "
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300  focus:outline-none "
            />
            <p className="-mt-16 text-left text-gray-400 hover:underline">
                Forgot your password?
              </p>
           
          
            {/* Sign In Button */}
            <button className="w-full bg-pink-600 text-white py-2 font-bold hover:bg-pink-700 transition">
              Sign In
            </button>

            <p className="text-center text-gray-400 mt-4">
          Don’t have an account?{" "}
          
            Create account
         
        </p>
          </form>
        </div>
      </div>

      <Brands />
    </div>
  );
};

export default MyAccount;
