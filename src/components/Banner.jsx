import React from "react";
import { useSelector } from "react-redux";
import { ReactTyped } from "react-typed";

const Banner = () => {
  const k = useSelector((store) => store.cart.k);
  return (
    <div className="bg-[#2699fb] w-full py-[100px]">
      <div className="max-w-screen-xl  py-[58px]  mx-auto text-center font-bold">
        <div className="md:text-3xl text-xl md:p-[24px]">Learn with us</div>
        <h2 className="text-white text-5xl md:text-[80px] md:p-[24px]">
          Grow with us.
        </h2>
        <div className="text-[30px] md:text-[50px] text-white md:p-[24px]">
          Learn
          <ReactTyped
            className="pl-3"
            strings={["Fronrned", "Backend", "Full-Stack"]}
            typeSpeed={100}
            loop={true}
            backSpeed={120}
          />
        </div>
        <button className="bg-black text-white p-3 rounded">Get Started : {k}</button>
      </div>
    </div>
  );
};

export default Banner;
