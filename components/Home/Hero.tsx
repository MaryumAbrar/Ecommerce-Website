"use client"

import { useState } from "react";
import Slider from "react-slick";
import Slide from "./Slide";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      imageLeft: "/images/lamp.png",
      imageRight: "/images/sofa2.png",
      subtext: "Best Furniture For Your Castle...",
      title:"New Furniture Collection Trends in 2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
      buttonText: "Shop Now",
    },
    {
      imageLeft: null,
      imageRight: "/images/sofa1.png",
      subtext: "Cost Effective",
      title: "Upgrade Your Living Room",
      description:
        "Discover modern furniture that redefines your home.",
      buttonText: "Explore Collection",
    },
    {
      imageLeft: "/images/lamp.png",
      imageRight: "/images/sofa2.png",
      title: "Comfort & Style Combined",
      description: "Experience the best of both worlds with our luxurious beds.",
      buttonText: "Shop Chairs",
    },
  ];

  function SampleNextArrow() {
    return (
      <div
       className="hidden"
      />
    );
  }

  // Settings for react-slick
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true, 
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    customPaging: (i: number) => (
      <div
        className={`w-3 h-3 rotate-45 translate-y-[-60px] cursor-pointer transition-all ${
          i === currentIndex ? "bg-[#FB2E86]" : "border-[#FB2E86] border-2"
        }`}
      />
    ),
  };

  return (
    <div className="relative mb-12">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="select-text">
             <Slide {...slide} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
