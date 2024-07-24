import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";

import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const pageName = location.pathname.replace(/\//g, "");
  return (
    <div div className="flex flex-col fixed">
      <Header />
      <div className="flex flex-row w-screen">
        <div className="w-[15%] ">
          <SideBar />
        </div>
        <div className="w-full h-screen overflow-auto bg-[#def5de]">
          {pageName ? (
            <h3 className="mt-8 ml-20 text-4xl text-[#1D2130] font-Montserrat font-extrabold">
              {pageName}{" "}
            </h3>
          ) : (
            <h3 className="mt-8 ml-20 text-4xl text-[#1D2130] font-Montserrat font-extrabold">
              home
            </h3>
          )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteers" element={<Volunteers />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
