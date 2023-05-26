import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const [searchkey,setSearchKey] = useState("");
  const search = (e)=> {
    e.preventDefault();
  }
  return (
    <nav className="flex item-center justify-between bg-black text-white px-10 py-4">
      <NavLink to={"/"} className="text-5xl font-bold font-mono">MTV</NavLink>
      <div className="flex items-center space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "no-active-text"
          }
          to={"/"}
        >
          Popular
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-text" : "no-active-text"
          }
          to={"/upcoming"}
        >
          Upcoming
        </NavLink>
      </div>
      <form className="flex items-center justify-center">
        <input
          type="text"
          className="text-xl bg-transparent border-b-2 border-b-slate-300 focus:outline-none"
          onChange={(e) => setSearchKey(e.target.value)}
        />
        <button type="submit">
        <MagnifyingGlassIcon className="w-8 h-8" />
        </button>
      </form>
    </nav>
  );
}

export default Nav;
