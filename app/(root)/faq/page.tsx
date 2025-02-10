import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import BreadCrumb from "@/components/common/BreadCrumb";

const FAQ = () => {
  const faqs = [
    {
      question: "Eu dictumst cum at sed euismod condimentum?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Magna bibendum est fermentum eros.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Odio muskana hak eris conseekin skeleton?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
    {
      question: "Elit id blandit sabara boi velit gua mara?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.",
    },
  ];

  return (
    <div>
      <BreadCrumb pageTitle="FAQ" />

      <div className="mx-auto max-w-6xl mt-16 px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl lg:text-4xl tracking-tight text-[#1D3178] font-bold mb-6">General Information</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="mt-14 mb-12">
                <h3 className="text-[#1D3178] font-bold text-base">{faq.question}</h3>
                <p className="text-gray-400 leading-7 text-sm mt-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl text-[#1D3178] mt-7 font-bold mb-4">Ask a Question</h2>
          <form className="space-y-10 mt-24">
            <Input
              type="text"
              placeholder="Your Name*"
              className="py-6 lg:text-base focus:border-none focus:outline-none tracking-wide font-semibold w-[85%]"
            />
            <Input
              type="text"
              placeholder="Subject*"
              className="py-6 lg:text-base focus:border-none focus:outline-none tracking-wide font-semibold w-[85%]"
            />
            <Textarea
              placeholder="Type Your Message*"
              className=" h-48 focus:outline-none py-3 lg:text-base focus:border-none tracking-wide font-semibold w-[85%]"
            />
            <Button className="px-11 py-2 rounded-none mt-16 bg-pink-500 hover:bg-pink-600 text-white">
              Send Mail
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
