import React from "react";
import { Icon } from "@iconify/react";
import logo from "../assets/earth_Guardian_logo.png";

export default function Header() {
  return (
    <div className="w-full flex flex-row items-center shadow-md  justify-between px-10 py-2">
      <div className="">
        <img className="max-w-28 py-2" src={logo} alt="Logo" />
      </div>
      <div className="flex flex-row space-x-10 justify-between">
        <div className="relative mx-4 flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-lg"
          />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pl-3">
            <Icon icon="ic:sharp-search" className="text-gray-500" />
          </div>
        </div>
        <div className="flex items-center">
          <Icon
            icon="mdi:bell-outline"
            className="text-xl w-10 h-10 cursor-pointer"
          />
        </div>
        <div className="flex items-center flex-row space-x-2">
          <div className="flex flex-col items-end">
            <p className="font-bold text-xl text-right font-Montserrat">
              John Doe
            </p>
            <p className="text-sm text-right font-Montserrat">from DRC</p>
          </div>
          <img
            src="https://via.placeholder.com/40"
            alt="Profile"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
}
