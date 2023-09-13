import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";

import Card from "./Card";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const [more, setMore] = useState(10);

  // fetching data for movies
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=ecda24b37a3a59d45f51eadf58b46456`
      );
      const moviez = await response.json();

      setMovies(moviez.results);
    };
    fetchData();
  }, []);

  return (
    <section className="py-9">
      <div className="mx-20 flex flex-col justify-between md:flex-row">
        <h2 className="font-asset font-title text-2xl">Top 10 Movies</h2>

        <span
          className="text-rose hover:cursor-pointer hover:opacity-50 duration-75"
          onClick={() => {
            setMore(more + 1);
          }}
        >
          See More
          <FaChevronRight style={{ display: "inline", marginLeft: "3px" }} />
        </span>
      </div>

      <div className="my-16 mx-20 grid grid-cols-1 md:grid-cols-2 smd:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8 place-items-center ">
        {/* Conditionally rendering cards in any outcome of the fetch */}
        {movies.length < 0 ? (
          <div className="text-xl animate-pulse font-title text-rose">
            We're sorry on our part, couldn't fetch the required Data
          </div>
        ) : (
          movies
            .slice(0, more)
            .map((movie) => <Card key={movie.id} {...movie} />)
        )}
      </div>
    </section>
  );
};

export default MoviesList;
