import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const imgUrl = "https://image.tmdb.org/t/p/w500";

const MovieOverview = () => {
  // getting the id
  const movId = useParams();

  // Setting state based on results
  const [movies, setMovies] = useState({});

  // fetching actual data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movId.id}?api_key=ecda24b37a3a59d45f51eadf58b46456`
      );
      const moviez = await response.json();

      setMovies(moviez);
    };
    fetchData();
  }, []);

  const d = movies.release_date;

  return (
    <div className="px-4 pt-0 flex flex-col justify-center items-center md:block gap-4 pb-5">
      {Object.keys(movies).length > 0 && movies.success !== false ? (
        <div className="flex flex-col justify-center items-center text-center md:block md:text-left">
          <div className="relative">
            <img
              src={imgUrl + movies.backdrop_path}
              alt={movies.title}
              className="mt-20 w-full md:mt-2 rounded-lg h-[400px] object-cover shadow-md mb-2"
            />
          </div>

          {/* content */}
          <div className="w-[90%] md:w-[90%]">
            {/* name, date, duration */}
            <div
              className="text-rose text-2xl font-[700] mb-2"
              data-testid="movie-title"
            >
              {movies.title}
            </div>

            {/* genres */}
            <div className="mb-2">
              {movies.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="text-[10px] border border-rose text-rose p-1 rounded-xl bg-rose bg-opacity-20 font-displayone m-1 font-light"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <div className="font-display font-title text-[#404040] text-[16px] mb-1">
              <span data-testid="movie-release-date">
                {new Date(d).toUTCString()}
              </span>
              &nbsp;&nbsp;&nbsp;
            </div>
            <span
              className=" text-rose text-opacity-80 font-light"
              data-testid="movie-runtime"
            >
              {movies.runtime} minutes
            </span>

            {/* description */}
            <div
              data-testid="movie-overview"
              className="mt-2 font-[400] font-displayone text-[#404040] text-[14px]"
            >
              {movies.overview}
            </div>

            {/* Director */}
            <p>
              <span></span>
            </p>

            {/* Writers */}
            <p>
              <span></span>
            </p>

            {/* Stars */}
            <p>
              <span></span>
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-[40%]  flex justify-center items-center md:ml-6">
          <h1 className="text-3xl font-display text-rose">
            {movies.status_message}
          </h1>
        </div>
      )}
    </div>
  );
};

export default MovieOverview;
