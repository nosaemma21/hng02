import React from "react";
import MovieDetails from "./MovieDetails";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import "./herobg.css";

const HeroMovie = () => {
  return (
    <div className="flex flex-col justify-around px-20  pb-20 bg-img h-screen">
      <div className="flex flex-col gap-7 justify-between mb-10 md:flex-row ">
        <Logo />
        <SearchBar />
      </div>

      <MovieDetails />
    </div>
  );
};

export default HeroMovie;
