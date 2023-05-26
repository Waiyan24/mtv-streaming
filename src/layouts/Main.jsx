import React from "react";
import { Route, Routes } from "react-router-dom";
import Upcoming from "../pages/Upcoming";
import Popular from "../pages/Popular";
import Nav from "../components/Nav";
import Detail from "../pages/Detail";
import Search from "../pages/Search";

function main() {
  return (
    <section>
      <Nav />
      <Routes>
        <Route index element={<Popular />} />
        <Route element={<Upcoming />} path="/upcoming" />
        <Route element={<Detail />} path="/details/:id" />
        <Route element={<Search />} path="/search/:title" />
      </Routes>
    </section>  
  );
}

export default main;
