import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";
import { HeaderCard } from "./HeaderCard";

export const Header = () => {
  const [relatedMovies, setRelatedMovies] = useState([]);
  useEffect(() => {
      getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const result = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=42ebba021315dbd48e57b45c8c50186f&language=en-US"
    );
    const data = await result.json();
    setRelatedMovies(data.results);
    console.log(data.results);
  };
  return (
    <section className="h-screen w-full">
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          arrows: false,
          interval: 2000,
        }}
      >
        {relatedMovies.map((movie) => {
          return (
            <SplideSlide  key={movie.id}>
              <HeaderCard movie={movie}/>
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Header;
