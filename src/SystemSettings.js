import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { VscListFlat } from "react-icons/vsc";
import { BiRadioCircleMarked } from "react-icons/bi";

import { Link } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { HiOutlineArrowRight } from "react-icons/hi";
import Currencies from "./components/Settings/SystemSettings/Currencies";
import FontUsedPrinting from "./components/Settings/SystemSettings/FontUsedPrinting";

function SystemSettings() {
  const [Section, setSection] = useState("Currencies");
  function drawer() {
    document.getElementById("drawerBody").classList.remove("hidden");
    document
      .getElementById("drawerBody")
      .classList.add(
        "flex",
        "fixed",
        "h-screen",
        "w-full",
        "bg-transparent",
        "top-0",
        "left-0",
        "lg:hidden",
        "z-10"
      );
  }
  function closeDrawer() {
    document.getElementById("drawerBody").classList.add("hidden");
  }
  return (
    <div className="h-full w-full p-5">
      <div className="w-full flex ">
        <div className="bg-white mr-[-1rem] lg:mr-0 rounded-l-xl ">
          <VscListFlat
            id="drawerbtn"
            className="text-black  text-xl m-2  cursor-pointer w-10 h-20 lg:hidden "
            onClick={() => drawer()}
          />
        </div>
        <Header />
      </div>
      <div className="w-full h-full flex ">
        <SideBar page="Settings" />
        <div className="flex flex-col w-full lg:ml-8 mt-9">
          <h1 className="font-bold text-2xl font-Poppins-Regular ">
            System Settings
          </h1>
          <div className="w-full flex space-x-2 items-center mt-2">
            <BiRadioCircleMarked className="text-2xl text-[#B7C835]" />
            <Link
              to="/Settings"
              className="font-Poppins-Regular text-[#B7C835] underline"
            >
              Setting
            </Link>
            <HiOutlineArrowRight className="text-[#98A2B3]" />
            <p className="text-[#98A2B3] font-Poppins-Regular">
              System Settings
            </p>
          </div>
          <div className="mt-5 flex w-full space-x-5 md:space-x-2 bg-white h-fit p-3 rounded-2xl ">
            <div
              className={`${
                Section === "Currencies" ? "bg-[#0D2135]" : "bg-white"
              }  w-[18%]  flex items-center justify-center  rounded-2xl cursor-pointer py-3 group hover:bg-gray-100`}
              onClick={() => setSection("Currencies")}
            >
              <p
                className={`text-base flex text-center items-center justify-center group-hover:text-black ${
                  Section === "Currencies" ? "text-white" : "text-black"
                } `}
              >
                Currencies
              </p>
            </div>

            <div
              className={`${
                Section === "FontUsedPrinting" ? "bg-[#0D2135]" : "bg-white"
              } w-[18%]  flex items-center text-center  justify-center  rounded-2xl group cursor-pointer py-3  `}
              onClick={() => setSection("FontUsedPrinting")}
            >
              <p
                className={`text-base flex items-center justify-center group-hover:text-black ${
                  Section === "FontUsedPrinting" ? "text-white" : "text-black"
                } `}
              >
                Font used Printing
              </p>
            </div>
          </div>

          <div className="w-full">
            <Currencies type={Section} />
            <FontUsedPrinting type={Section} />
          </div>
        </div>
      </div>

      {/* Drawer */}
      <div id="drawerBody" className=" hidden  ">
        <div
          id="drawer"
          className=" w-full bg-[#0D2135] opacity-80 h-full md:w-1/2"
        >
          <div className="p-4">
            <AiOutlineClose
              className="text-xl text-white cursor-pointer "
              onClick={() => closeDrawer()}
            />
          </div>
          <div className="flex flex-col ml-10 md:ml-20 space-y-1 w-full justify-center  h-4/5 text-white ">
            {/* border-b-2 border-[#847244] */}
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center  text-xl  p-2 md:w-1/2 w-3/4"
            >
              <div className="font-Poppins-Regular text-sm">Home</div>
            </Link>
            <Link
              to="/Patients"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2 "
            >
              <div className="font-Poppins-Regular text-sm">Patients </div>
            </Link>
            <Link
              to="/Analytic"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Analytics</div>
            </Link>
            <Link
              to="/Doctors"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Doctors</div>
            </Link>
            <Link
              to="/Labs"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4   text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Labs </div>
            </Link>
            <Link
              to="/Staff"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Staff</div>
            </Link>
            <Link
              to="/Store"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Store</div>
            </Link>
            <Link
              to="/Reports"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Reports</div>
            </Link>
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Accounting</div>
            </Link>
            <Link
              to="/Suppliers"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Suppliers</div>
            </Link>
            <Link
              to="/Settings"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Setting</div>
            </Link>
            <Link
              to="/"
              className="hover:bg-black rounded-xl cursor-pointer flex justify-center md:w-1/2 w-3/4  text-xl p-2"
            >
              <div className="font-Poppins-Regular text-sm">Logout</div>
            </Link>
          </div>
        </div>
        <div className="hidden sm:block h-full w-full bg-black opacity-40" />
      </div>
    </div>
  );
}

export default SystemSettings;
