import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const menus = [
  { name: "Home", icon: "material-symbols:home", link: "/" },
  { name: "Volunteers", icon: "gridicons:multiple-users", link: "/volunteers" },
  { name: "Info", icon: "material-symbols:info", link: "/" },
  { name: "Settings", icon: "material-symbols:settings", link: "/" },
  { name: "Logout", icon: "material-symbols:logout", link: "/" },
];
function Menu({ menu }) {
  return (
    <Link to={menu.link} className="flex flex-row my-[15px] gap-2">
      <Icon icon={menu.icon} className="w-8 h-8 text-[#1D2130]" />
      <p className="mt-2">{menu.name}</p>
    </Link>
  );
}

export default function SideBar() {
  return (
    <div className="flex flex-col shadow-lg pl-10 pt-10 h-screen w-100">
      {menus.map((menu, index) => (
        <Menu key={index} menu={menu} />
      ))}
    </div>
  );
}
