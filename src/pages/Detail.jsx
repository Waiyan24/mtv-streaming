import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PlayIcon } from "@heroicons/react/24/solid";

function Detail() {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMovie();
  }, [id]);

  const getMovie = async () => {
    const res =
      await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=42ebba021315dbd48e57b45c8c50186f&language=en-US
        `);
    const data = await res.json();
    console.log(data, "data");
    setMovie(data);
  };
  return (
    <>
      {movie && (
        <section className="w-full h-screen relative">
          <div className="h-2/3 relative">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              className="object-cover h-full w-full"
            />
            <div className="dv-over"></div>
          </div>
          <div className="detail-container">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt=""
              className="w-52 rounded-md"
            />
            <div className="ms-4 text-white">
              <h1 className="text-4xl font-semibold">{movie.original_title}</h1>
              <p className="text-lg mb-2">
                <span className="text-red-500 font-medium">Release On:</span> {movie.release_date}
              </p>
              <p className="text-lg mb-3">
                <span className="text-red-500 font-medium">Runtime :</span> {movie.runtime}
                mins
              </p>
            
              {movie.genres &&
                movie.genres.map((g) => {
                  return <span key={g.id} className="bg-red-500 px-2 py-2 rounded-md font-bold me-2">{g.name}</span>;
                })}
              <h2 className="text-xl my-3 mb-5">{movie.overview}</h2>
         
              <Link to={movie.homepage} className="font-bold text-lg px-3 py-2 rounded-lg border-2 border-red-500">
              <PlayIcon className="w-6 h-6 text-red-500 inline-block me-2"/>
                Watch Now</Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Detail;
