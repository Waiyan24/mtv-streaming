import { PlayIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Card({ movie }) {
  return (
    <Link
      className="rounded-lg overflow-hidden relative"
      to={`/details/${movie.id}`}
    >
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        alt="alt"
        className="w-full object-cover"
      />
      <div className="dv-over"></div>
      <PlayIcon className="player" />
      <div></div>
    </Link>
  );
}

export default Card;
