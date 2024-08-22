import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const menus = [
  { name: "Home", icon: "material-symbols:home", link: "/Admin-dashboard" },
  { name: "Volunteers", icon: "gridicons:multiple-users", link: "/Volunteers" },
  { name: "Donations", icon: "mdi:donation-outline", link: "/Donations" },
  { name: "Info", icon: "material-symbols:info", link: "/" },
  { name: "Settings", icon: "material-symbols:settings", link: "/" },
];

function Menu({ menu }) {
  return (
    <Link
      to={menu.link}
      className="flex flex-row text-[#1D2130] font-Montserrat my-4 gap-2"
    >
      <Icon icon={menu.icon} className="w-8 h-8 text-[#1D2130]" />
      <p className="mt-2">{menu.name}</p>
    </Link>
  );
}

export default function SideBar() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      navigate("/");
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  return (
    <div className="flex flex-col justify-between shadow-lg pl-10 py-10 h-full">
      <div>
      {menus.map((menu, index) => (
        <Menu key={index} menu={menu} />
      ))}
      </div>
      <div
        onClick={handleLogout}
        className="flex flex-row my-[15px] gap-2 cursor-pointer"
      >
        <Icon
          icon="material-symbols:logout"
          className="w-8 h-8 text-[#1D2130]"
        />
        <p className="mt-2 font-Montserrat text-[#1D2130]">Logout</p>
      </div>
    </div>
  );
}
