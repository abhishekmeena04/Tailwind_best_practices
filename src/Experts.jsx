import React from "react";

const Experts = () => {
  return (
    <div className="max-w-screen-xl my-10 p-4 mx-auto md:grid grid-cols-2">
      <div className="col-span-1 md:w-[80%] text-center">
        <img
          src="https://imgs.search.brave.com/ybjXYIrmlgU5E5XYkLwROmLaePGdKYyQT3HorYu5fAc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNy8wNy8wNi9s/YXB0b3AtMzA4NzU4/NV82NDAuanBn"
          alt=""
          className="inline"
        />
      </div>
      <div className=" col-span-1 flex flex-col justify-center">
        <h1 className="text-[#00df9a] font-bold mt-2">LEARN FROM EXPERTS</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          inventore repellendus expedita accusantium libero obcaecati, dolore
          blanditiis ipsam molestiae suscipit neque vero numquam, veritatis
        </p>
        <button className="w-[30%] bg-black text-white p-3 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Experts;
