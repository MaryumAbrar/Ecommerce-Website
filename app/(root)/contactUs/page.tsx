import BreadCrumb from "@/components/common/BreadCrumb";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div>
      <BreadCrumb pageTitle="Contact Us" />

      <div className="max-w-6xl mx-auto py-2">
        <div className="px-4 grid md:grid-cols-2 gap-8 my-12">
          {/* Information About Us */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#151875] mb-4">Information About us</h2>
            <p className="text-gray-400 leading-6 text-sm w-[95%]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada
              diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis
              quis bibendum quam.
            </p>
            {/* Color Indicators */}
            <div className="flex gap-3 mt-8">
              <span className="w-6 h-6 bg-[#5625DF] rounded-full"></span>
              <span className="w-6 h-6 bg-[#FF27B7] rounded-full"></span>
              <span className="w-6 h-6 bg-[#37DAF3] rounded-full"></span>
            </div>
          </div>

          {/* Contact Way */}
          <div>
            <h2 className="text-2xl font-bold text-[#151875] mb-4">Contact Way</h2>
            <div className="space-y-12">
              
              <div className="flex gap-8 flex-col sm:flex-row ">

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-[#5726DF] rounded-full"></span>
                <div className="text-sm space-y-1 text-gray-400">
                  <p>Tel: 877-67-88-99</p>
                  <p>Email: shop@store.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-[#FB2E86] rounded-full"></span>
                <div className="text-sm space-y-1 text-gray-400">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              </div>
              
              <div className="flex gap-6 flex-col sm:flex-row ">

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-[#FFB265] rounded-full"></span>
                <div className="text-sm space-y-1 text-gray-400">
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="w-10 h-10 bg-[#1BE982] rounded-full"></span>
                <div className="text-sm space-y-1 text-gray-400">
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div>
              </div>

             
            </div>
          </div>
        </div>

        {/* Get In Touch Form */}
        <div className="mt-40 px-4 grid md:grid-cols-[43%_57%]">
        <div>
          <h2 className="text-3xl md:text-4xl tracking-tight font-bold text-[#151875] mb-4">Get In Touch</h2>
          <p className="text-gray-400 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae
            eget dolor lobortis.
          </p>

          <form className="space-y-8 mt-10">
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full px-4 py-2 border border-gray-300 focus:outline-none "
              />
              <input
                type="email"
                placeholder="Your E-mail"
                className="w-full px-2 py-2 border border-gray-300 focus:outline-none "
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              placeholder="Subject*"
              className="w-full px-2 py-2 border border-gray-300 focus:outline-none "
            />

            {/* Message */}
            <textarea
              placeholder="Type Your Message*"
              className="w-full px-2 py-2 border border-gray-300 focus:outline-none  h-40"
            ></textarea>

            {/* Submit Button */}
            <button className="bg-pink-600 text-white px-10 py-2 hover:bg-pink-700 transition">
              Send Mail
            </button>
          </form>
        </div>

        <Image src={"/images/contact.png"} alt="Contact" width={800} height={800} className="hidden sm:block"  />
        </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
