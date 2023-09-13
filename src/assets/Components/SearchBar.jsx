import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex justify-between w-full md:w-3/4 lg:w-[525px] text-s border-2 rounded-lg focus:border-pink-600 focus:outline-none ">
      <input
        className="inline w-[80%] font-asset border-white bg-transparent text-white placeholder:text-gray-200 px-2 py-1 placeholder:text-1 focus:outline-none"
        type="text"
        placeholder="What do you want to watch?"
      />
      <span className="inline relative top-[8px] right-1">
        <FaSearch style={{ color: "#fff" }} />
      </span>
    </div>
  );
};

export default SearchBar;
