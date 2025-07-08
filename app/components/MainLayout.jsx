"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { MenuContext } from "@/context/MenuContext";

export const MainLayout = ({ children }) => {
  const { open } = useContext(MenuContext);

  return (
    <div className="bg-gray-100 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start m-4">
        {/* <aside className="bg-white rounded-lg w-60 p-4"> */}
        <aside
          className={`bg-white rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4" : "w-0"
          } lg:w-60 lg:p-4`}
        >
          <ul>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <AiOutlineHome />
              <Link className="ml-2" href="/">
                Home
              </Link>
            </li>
            <li className="flex items-center justify-start hover:bg-green-200 hover:text-green-800 rounded-xl p-2 cursor-pointer">
              <SiHelpscout />
              <Link className="ml-2" href="/about-us">
                About
              </Link>
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <GrProjects />
              <Link className="ml-2 flex-1" href="/">
                Projects
              </Link>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <FaCheck />
              <Link className="ml-2 flex-1" href="/">
                Singule
              </Link>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2 cursor-pointer">
              <FaCheckDouble />
              <Link className="ml-2 flex-1" href="/">
                Projects
              </Link>
              <FaAngleRight />
            </li>
            <li className="flex items-center justify-start hover:bg-orange-200 hover:text-orange-800 rounded-xl p-2 cursor-pointer">
              <FiPhoneCall />
              <Link className="ml-2" href="/contact-us">
                Contact us
              </Link>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};
