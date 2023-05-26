import React from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { title } = useParams();
  return (
    <section className="px-8 my-10">
      <h1 className="text-4xl font-bold text-mono text-white">Search results for "{title}"</h1>
      <div className="grid grid-cols-10 gap-3 mt-4"></div>
    </section>
  );
}

export default Search;
