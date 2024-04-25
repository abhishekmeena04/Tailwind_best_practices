import { Outlet, Link } from "react-router-dom";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import LocationIcon from "../components/Location";
import { IoLogoWhatsapp } from "react-icons/io";
import WhatsAppButton from "../components/Whatsup";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
const Layout = () => {
  const [menu, setMenu] = useState("menu");
  const dispatch = useDispatch();
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      {/* <nav className="nav text-white  bg-[#111723] w-full z-20 top-0 start-0 border-b h-fit fixed">
        <div className="max-w-screen-xl flex-wrap justify-between items-center mx-auto p-4 relative hidden md:flex">
          <div className="flex gap-[20px]">
            <div className="flex items-center gap-1 text-sm">
              <MdOutlineLocalPhone className="text-[#FAB207]" />
              <a href="tel:+9131383718" target="_top">
                <span className="text-sm">+9131383718</span>
              </a>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <MdEmail className="text-[#FAB207]" />
              <a
                href="mailto:fitnessiconny@gmail.com"
                target="_top"
                className="text-sm"
              >
                fitnessiconny@gmail.com
              </a>
            </div>
            <LocationIcon></LocationIcon>

            <div className="flex items-center gap-1 text-sm">
              <IoLogoWhatsapp className="text-[#FAB207] font-semibold" />

              <p className="text-sm">9827566365</p>
            </div>
          </div>
          <div className="flex gap-4 text-white items-center justify-center md:order-2 md:space-x-0 space-x-3 rtl:space-x-reverse">
            <FaInstagram className="cursor-pointer iconsOpacity" />
            <FaFacebook className="cursor-pointer iconsOpacity" />
            <WhatsAppButton></WhatsAppButton>
          </div>
        </div>

        <div className="bg-white w-full h-[1px] hidden md:block"></div>

        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
          <Link
            to="/"
            className="flex items-center justify-center space-x-3 rtl:space-x-reverse"
          >
            <img
              width={100}
              height={90}
              className="h-16 md:w-[92px] object-cover"
              src="/fitnessicon.png"
              alt="logo"
            />
          </Link>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <nav className="navbar">
              <ul className="font-[400] md:flex flex-col text-lg text-white bg-transparent p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>
                  <Link
                    to="/"
                    onClick={() => setMenu("Home")}
                      menu === "Home" ? "active" : ""
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>
                  <Link
                    to="/about"
                    onClick={() => setMenu("About")}
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      menu === "About" ? "active" : ""
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>
                  <Link
                    to="/Packages"
                    onClick={() => setMenu("Packages")}
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      menu === "Packages" ? "active" : ""
                    }`}
                  >
                    Packages
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-[8px] h-[8px] inline-block bg-[#F3D302] rounded-full border-none"></span>
                  <Link
                    to="/contact"
                    onClick={() => setMenu("Contact")}
                    className={`block py-2 px-3 rounded md:bg-transparent md:p-0 hoverable-text ${
                      menu === "Contact" ? "active" : ""
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            {navbar ? (
              <RxCross2
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px]  md:hidden"
              />
            ) : (
              <RxHamburgerMenu
                onClick={() => setNavbar(!navbar)}
                className="cursor-pointer text-[24px]  md:hidden"
              />
            )}
          </div>
        </div>

        {navbar && (
          <div className="md:hidden bg-[#111723] text-white flex flex-col px-[10px] py-[20px] text-sm gap-3 absolute w-full z-30 animateNav overflow-hidden">
            <div className="flex flex-col h-[40px] px-[30px]">
              <div className="flex gap-1 hover:text-[#FAB207] h-full hover:bg-[#111111] items-center">
                <Link href="/" className="px-[10px]">
                  Home
                </Link>
              </div>
              <div className="w-[100%] h-fit items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
            <div className="flex flex-col h-[40px] px-[30px]">
              <div className="flex gap-1 hover:text-[#FAB207] h-full hover:bg-[#111111] items-center">
                <Link href="/" className="px-[10px]">
                  About
                </Link>
              </div>
              <div className="w-[100%] h-fit items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
            <div className="flex flex-col h-[40px] px-[30px]">
              <div className="flex gap-1 hover:text-[#FAB207] h-full hover:bg-[#111111] items-center">
                <Link href="/" className="px-[10px]">
                  Packages
                </Link>
              </div>
              <div className="w-[100%] h-fit items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
            <div className="flex flex-col h-[40px] px-[30px]">
              <div className="flex gap-1 hover:text-[#FAB207] h-full hover:bg-[#111111] items-center">
                <Link href="/" className="px-[10px]">
                  Contact
                </Link>
              </div>
              <div className="w-[100%] h-fit items-center justify-center">
                <p className="h-[.2px] opacity-[0.5] w-[100%] bg-[#dadada]"></p>
              </div>
            </div>
          </div>
        )}
        <div className="bg-white w-full h-[.5px] hidden md:block"></div>
        <div className="nav-1 mx-auto">
          <div className="marquee whitespace-nowrap overflow-hidden flex items-center">
            <h1 className="text-white font-[500] text-sm">
              Morning: 6am to 11am Evening : 6pm to 11pm
            </h1>
          </div>
        </div>
      </nav> */}

      {/* wscube */}
      {/* <div className="nav-main bg-[#2699fb] p-4">
        <div className="nav max-w-screen-xl py-2 px-4 flex justify-between items-center mx-auto">
          <div className="left text-3xl font-bold">WsCube Tech.</div>
          {navbar ? (
            <RxHamburgerMenu
              onClick={() => setNavbar(!navbar)}
              className="text-white md:hidden block"
              size={25}
            />
          ) : (
            <RxCross2
              size={25}
              onClick={() => setNavbar(!navbar)}
              className="text-white md:hidden block"
            />
          )}
          <ul className="right items-center gap-5 hidden md:flex">
            <li className="flex items-center">
              <Link
                className={`hoverable-text ${menu === "Home" ? "active" : ""}`}
                onClick={() => setMenu("Home")}
              >
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={`hoverable-text ${
                  menu === "Company" ? "active" : ""
                }`}
                onClick={() => setMenu("Company")}
              >
                Company
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={`hoverable-text ${
                  menu === "Resources" ? "active" : ""
                }`}
                onClick={() => setMenu("Resources")}
              >
                Resources
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={`hoverable-text ${menu === "About" ? "active" : ""}`}
                onClick={() => setMenu("About")}
              >
                About
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                className={`hoverable-text ${
                  menu === "Contact" ? "active" : ""
                }`}
                onClick={() => setMenu("Contact")}
              >
                Contact
              </Link>
            </li>
            <button
              className="p-4 bg-red"
              onClick={() => dispatch(addToCart())}
            >
              click
            </button>
          </ul>

          {navbar && (
            <ul className="right items-center md:hidden text-white fixed bg-black left-0 top-[84px] w-full">
              <li className="py-3 px-9">
                <Link
                  className={`hoverable-text ${
                    menu === "Home" ? "active" : ""
                  }`}
                  onClick={() => setMenu("Home")}
                >
                  Home
                </Link>
              </li>
              <li className="py-3 px-9">
                <Link
                  className={`hoverable-text ${
                    menu === "Company" ? "active" : ""
                  }`}
                  onClick={() => setMenu("Company")}
                >
                  Company
                </Link>
              </li>
              <li className="py-3 px-9">
                <Link
                  className={`hoverable-text ${
                    menu === "Resources" ? "active" : ""
                  }`}
                  onClick={() => setMenu("Resources")}
                >
                  Resources
                </Link>
              </li>
              <li className="py-3 px-9">
                <Link
                  className={`hoverable-text ${
                    menu === "About" ? "active" : ""
                  }`}
                  onClick={() => setMenu("About")}
                >
                  About
                </Link>
              </li>
              <li className="py-3 px-9">
                <Link
                  className={`hoverable-text ${
                    menu === "Contact" ? "active" : ""
                  }`}
                  onClick={() => setMenu("Contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div> */}
      {/* <h1 className="h-10 w-full bg-red-900">footer</h1> */}
      <Outlet />
    </>
  );
};

export default Layout;
