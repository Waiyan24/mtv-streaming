import React from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";

function Popular() {
  return (
    <>
      <Header />
      <CardContainer
        title={"Popular Now"}
        url={
          "https://api.themoviedb.org/3/movie/popular?api_key=42ebba021315dbd48e57b45c8c50186f&language=en-US"
        }
      />
    </>
  );
}

export default Popular;
