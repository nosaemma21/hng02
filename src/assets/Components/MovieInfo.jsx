// Merging sidenav and overview for to display on a page

import React from "react";
import SideNav from "./SideNav";
import MovieOverview from "./MovieOverview";

const MovieInfo = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="z-5">
        <SideNav />
      </div>

      <div className="absolute z-[-1] md:static overflow-auto">
        <MovieOverview />
      </div>
    </div>
  );
};

export default MovieInfo;
