"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { icons } from "../helper";
import { MdLanguage } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [
    { link: "Overview", path: "/" },
    { link: "Feature", path: "/feature" },
    { link: "About", path: "/about" },
    { link: "Pricing", path: "/pricing" },
  ];

  return (
    <>
      <nav className="bg-white   text-primary fixed top-0 right-0 left-0 max-w-screen-2x1 py-5 md:px-14 px-4">
        <div className="text-lg flex justify-between items-center font-medium max-w-screen-2x1">
          <div className="flex space-x-14  items-center justify-center ">
            <Link
              href="/"
              className="text-2xl flex items-center space-x-10 text-primary font-semibold"
            >
              <Image width={75} height={75} src={icons.logo} alt="Logo" />
              <span className="mx-14">NAME</span>
            </Link>
            <ul className="md:flex space-x-10 hidden">
              {navItems.map((item) => (
                <li key={item.link} className="hover:text-gray-400">
                  <Link href={item.path}>{item.link}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-lg flex justify-between items-center space-x-10 ">
            <div className="md:flex hidden h-10 items-center justify-center">
              <Link href={"/"}>
                <MdLanguage className="mx-2.5" />
              </Link>
              <span className="hover:text-secondary">Language</span>
            </div>
              <button className=" bg-secondary h-10 w-20 items-center justify-center transition-all duration-300 rounded hover:text-white hover:bg-blue-800 mx-auto md:flex hidden">
                <span>Sign In</span>
              </button>
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none focus:text-gray-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <IoClose className="h-7 w-7 text-primary" />
              ) : (
                <FaBars className="h-5 w-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`text-lg space-x-4 bg-secondary mt-24 ${
          isMenuOpen ? "block fixed right-0 left-0 top-0" : "hidden"
        }`}
      >
        <ul className="space-y-6 ml-3 py-5">
          {navItems.map((item) => (
            <li key={item.link} className="hover:text-white">
              <Link href={item.path}>{item.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
