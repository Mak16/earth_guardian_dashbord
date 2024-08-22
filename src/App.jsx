import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./ProtectedRoute";
import Home from "./pages/Home";
import Volunteers from "./pages/Volunteers";
import Donations from "./pages/Donations";

function App() {
  const location = useLocation();
  const pageName = location.pathname.replace(/\//g, "");

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/signup";

  return (
    <div className="flex flex-col h-screen">
      {!isAuthPage && <Header />}
      <div
        className={`flex h-[90vh] ${
          !isAuthPage ? "flex-row" : "flex-col"
        } w-full`}
      >
        {!isAuthPage && (
          <div className="w-[15%]">
            <SideBar />
          </div>
        )}
        <div
          className={`w-full overflow-auto bg-[#def5de] ${
            isAuthPage ? "flex justify-center items-center" : ""
          }`}
        >
          {pageName && !isAuthPage && (
            <h3 className="mt-8 ml-20 text-4xl text-[#1D2130] font-Montserrat font-extrabold">
              {pageName}
            </h3>
          )}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/Admin-dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Volunteers"
              element={
                <ProtectedRoute>
                  <Volunteers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/Donations"
              element={
                <ProtectedRoute>
                  <Donations />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h2>Page not found</h2>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
