import React from "react";
import { FaPlayCircle, FaImdb } from "react-icons/fa";
import imdb from "../Images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";

const MovieDetails = () => {
  return (
    <div className="flex flex-col  text-white max-w-[404px] font-asset">
      <h1 className="text-4xl md:text-5xl mb-2">John Wick 3 : Parabellum</h1>

      {/* Ratings */}
      <div className="w-full md:w-1/2 flex flex-row justify-between items-start mb-2">
        <span>
          <img src={imdb} alt="imdb" className="inline relative bottom-0.5" />
          <span className="opacity-75 ml-3">86.0/100</span>
        </span>
        <span>
          <span>🍅</span>
          <span className="opacity-75 ml-3">97%</span>
        </span>
      </div>

      <p className="mb-2">
        John Wick is on the run after killing a member of the international
        assassins' guild, and with a $14 million price tag on his head, he is
        the target of hit men and women everywhere.
      </p>

      <button className=" bg-rose w-[169px] h-9 rounded-md px-4 py-1.5 hover:opacity-60 duration-75">
        <span className="relative bottom-0.5 mr-1 text-[14px]">
          <FaPlayCircle style={{ display: "inline" }} />
        </span>
        WATCH TRAILER
      </button>
    </div>
  );
};

export default MovieDetails;
