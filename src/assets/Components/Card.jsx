import React, { useState } from "react";
import imdb from "../Images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const imgUrl = "https://image.tmdb.org/t/p/w500";

// genres
export const genreNames = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
  878: "Science Fiction",
  10749: "Romance",
};

const Card = ({
  title,
  poster_path,
  release_date,
  vote_average,
  id,
  genre_ids,
}) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <div>
      <div
        className="relative max-w-[250px] max-h-[490px] flex flex-col justify-center card__container font-asset mb-[3rem]"
        data-testid="card"
      >
        <img
          className="max-w-[250px] max-h-[370px]"
          src={imgUrl + poster_path}
          alt={title}
          data-testid="movie-poster"
        />

        {/* content */}
        <div className="card__container-content mt-2 h-[100px]">
          {/* favorite */}
          {!favorite ? (
            <div className="flex justify-center items-center absolute top-2 right-3 w-10 h-10 rounded-full bg-white bg-opacity-40 cursor-pointer">
              <span>
                <FaHeart
                  className="text-white"
                  onClick={() => setFavorite(true)}
                />
              </span>
            </div>
          ) : (
            <div className="flex justify-center items-center absolute top-2 right-3 w-10 h-10 rounded-full bg-white bg-opacity-40 cursor-pointer">
              <span>
                <FaHeart
                  className="text-red-500"
                  onClick={() => setFavorite(false)}
                />
              </span>
            </div>
          )}

          {/* Route to overview */}
          <Link to={`/movies/${id}`}>
            {/* Release Dates */}
            <p
              className="text-date font-title text-subs"
              data-testid="movie-release-date"
            >
              {release_date}
            </p>

            {/* Title */}
            <h2 className="font-title text-title" data-testid="movie-title">
              {title}
            </h2>

            {/* Movie Poster */}
            <div className="w-full flex flex-row justify-between items-start mb-2">
              <span>
                <img
                  src={imdb}
                  alt="imdb"
                  className="inline relative bottom-0"
                />
                {/* Imdb Rating(Not Real data actually) */}
                <span className="opacity-75 ml-3 text-[12px]">
                  {vote_average}/10
                </span>
              </span>
              <span>
                {/* Rotten tomato rating(Not Real) */}
                <span className="text-[18px]">🍅</span>
                <span className="opacity-75 ml-3 text-[12px]">
                  {Math.round((vote_average / 10) * 100)}%
                </span>
              </span>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap text-[12px] font-title text-gray-400">
              {genre_ids.map((genre) => (
                <span
                  key={genre}
                  className="text-[10px] border border-date text-date p-1 rounded-xl bg-date bg-opacity-20 font-asset m-1 font-light"
                >
                  {genreNames[genre]}
                </span>
              ))}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
