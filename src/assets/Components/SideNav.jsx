import React from "react";
import Logo from "./LogoDark";
import {
  RiCalendar2Line,
  RiHome5Line,
  RiLogoutBoxLine,
  RiTv2Line,
  RiVideoLine,
} from "react-icons/ri";
import { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav = () => {
  const [value, setValue] = useState(false);

  // toggle
  const toggleRef = useRef(null);
  const toggle = () => {
    if (value === false) {
      toggleRef.current.classList.remove("hidden");
      toggleRef.current.classList.add("flex");
      setValue(true);
    }
    if (value === true) {
      toggleRef.current.classList.add("hidden");
      toggleRef.current.classList.remove("flex");
      setValue(false);
    }
  };

  return (
    <div className="h-screen box-content">
      {/* navbar container */}
      <div className="inline-flex md:h-screen justify-center items-center mt-9 w-[226px] md:hidden">
        <Logo />
      </div>

      {/* container */}
      <div className="inline md:hidden">
        <div
          className="ml-3 fixed right-3 top-10 mr-7 flex justify-center items-center w-7 h-7 bg-rose rounded-full text-white cursor-pointer hover:bg-opacity-40 hover:text-rose duration-100"
          onClick={() => {
            toggle();
          }}
        >
          <FaPlus />
        </div>
      </div>

      <div
        className="w-[226px] b h-[80%] md:h-screen  border bg-white border-gray-500 border-opacity-30 rounded-tr-[45px] rounded-br-[45px] hidden md:flex flex-col  text-center py-8"
        ref={toggleRef}
      >
        <div className="hidden md:flex justify-center items-center mt-5 md:mt-7">
          <Logo />
        </div>
        {/* menus */}
        <div className="flex flex-col text-display md:mt-5">
          <Link
            to="/"
            className="h-[40px] px-12 flex justify-around items-center font-display text-gray-500 hover:bg-rose hover:bg-opacity-10 hover:text-rose hover:border-x-4 hover:border-r-rose duration-100"
          >
            <RiHome5Line style={{ display: "inline" }} />
            <span className="w-[80px]">Home</span>
          </Link>
          <a
            href="#"
            className="h-[40px] px-12 flex justify-around items-center font-display text-gray-500 hover:bg-rose hover:bg-opacity-10 hover:text-rose hover:border-x-4 hover:border-r-rose duration-100"
          >
            <RiVideoLine style={{ display: "inline" }} />
            <span className="w-[80px]">Movies</span>
          </a>
          <a
            href="#"
            className="h-[40px] px-12 flex justify-around items-center font-display text-gray-500 hover:bg-rose hover:bg-opacity-10 hover:text-rose hover:border-x-4 hover:border-r-rose duration-100"
          >
            <RiTv2Line style={{ display: "inline" }} />
            <span className="w-[80px]">TV Series</span>
          </a>
          <a
            href="#"
            className="h-[40px] px-12 flex justify-around items-center font-display text-gray-500 hover:bg-rose hover:bg-opacity-10 hover:text-rose hover:border-x-4 hover:border-r-rose duration-100"
          >
            <RiCalendar2Line style={{ display: "inline" }} />
            <span className="w-[80px]">Upcoming</span>
          </a>
        </div>

        {/* gain */}
        <div className="mt-5 border border-rose bg-lightrose bg-opacity-70 rounded-[20px] flex flex-col justify-around items-center text-display box-content px-2 pt-6 pb-2 w-[60%] h-[210px] place-self-center">
          <p className="text-[15px] font-display text-gray-700">
            Play movie quizes and earn free tickets
          </p>
          <p className="text-[12px] font-light text-gray-600">
            50k people are playing now
          </p>
          <a
            href="#"
            className="text-rose bg-rose bg-opacity-20 p-2 rounded-[30px] text-[12px] font-light w-[80%] text-center hover:bg-opacity-100 hover:text-white duration-100"
          >
            Start Playing
          </a>
        </div>

        <span className="">
          <span className="flex justify-around mt-10 px-12 font-display text-gray-600 hover:text-rose duration-100 cursor-pointer ">
            <RiLogoutBoxLine style={{ display: "inline" }} />
            <span className="relative bottom-1 w-[80px]">Log Out</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default SideNav;
