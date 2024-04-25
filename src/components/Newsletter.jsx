import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#2099fb] p-4">
      <div className="max-w-screen-xl md:flex mx-auto justify-between py-[50px]">
        <div className="mt-2 left">
          <h1 className="text-[20px] md:text-[35px] font-bold text-white">
            Want to learn latest I.T. skills?
          </h1>
          <span className="text-white">
            Sign up to our newslatter and stay up to date.
          </span>
        </div>
        <div clas
        sName="mt-2 right">
          <input
            type="text"
            className="sm:w-full mb-2 rounded mb-2 p-3 mr-2 text-slate-600"
            placeholder="Email"
          />
          <button className="bg-black text-white p-3 rounded">
            Get Started
          </button>
          <br />
          <p className="text-white">
            we are about the protection of your data. Read our <br />{" "}
            <span className="text-black font-light">privacy policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
