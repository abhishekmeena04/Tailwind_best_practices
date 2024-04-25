import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const slides = [
  {
    imageUrl: "/v11.mp4 - Made with Clipchamp.mp4",
    title: "Explore Our Gym Today!",
    description: "Explore Our Gym Today!",
  },
  {
    imageUrl: "/images/Untitled video - Made with Clipchamp.mp4",
    title: "Your Gateway to Health and ",
    description: "Your Gateway to Health and Wellness",
  },
];

const Carosal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="w-full md:mt-[100px] h-[100vh] md:h-[90vh] relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 transform `}
      >
        <div className="h-full flex items-center justify-start relative">
          <div className="overlay w-full h-full absolute top-0 left-0 bg-[#242c2ea6] z-10">
            <div className="text-left  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex flex-col w-[100%] items-center justify-center md:justify-start md:items-start text-white absolute  md:ml-[150px]">
              <p className="text-[12px] md:text-[20px] uppercase animateDis"></p>
              <h2 className="text-[35px] text-nowrap md:text-[70px] font-[200] mb-4 transition-transform transform  animateHeading flex gap-[20px] capitalize">
                <div className="text-[#F3D302] font-[700]">
                  <Typewriter
                    options={{
                      strings: ["Fitness Icon", "Fitness Icon"],
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </div>
              </h2>
              <Link href="contractUs">
                <button className="text-[12px] md:text-sm transition-transform transform border-2 font-semibold px-[39px] md:px-[46px] py-2 z-[20px] animatebtm">
                  Book A demo
                </button>
              </Link>
            </div>
          </div>

          <video
            muted
            loop
            autoPlay
            src="/v11.mp4"
            alt=""
            className="object-cover h-[100vh] w-[100vw]"
          />
        </div>
      </div>
    </div>
  );
};

export default Carosal;
