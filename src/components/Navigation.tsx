import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className=" h-[50px] flex justify-between items-center px-5 bg-black text-white ">
      <span className="font-bold">React + TypeSciprt</span>
      <span className=" w-1/6 flex justify-between px-8 ">
        <Link className="hover:text-yellow-300 " to="/">
          Products page{" "}
        </Link>
        <Link className="hover:text-yellow-300 " to="/about">
          About
        </Link>
      </span>
    </nav>
  );
}

export default Navigation;
