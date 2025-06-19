"use client";
import {
  FiHome, FiUsers, FiFileText, FiSettings, FiArrowLeft, FiArrowRight,
} from "react-icons/fi";
import { FaHome, FaBoxes, FaHandshake } from "react-icons/fa";
import { BsBoxes } from "react-icons/bs";
import { PiUserCircleGearFill } from "react-icons/pi";
import { GiBoxUnpacking } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { IoMdHelpCircle } from "react-icons/io";

const Sidebar = ({ currentPage, onPageChange, isMobileOpen, closeMobile }) => {
  const topItems = [
    { id: "home", label: "Home", icon: FiHome },
    { id: "sales", label: "Sales", icon: GiBoxUnpacking },
    { id: "products", label: "Products", icon: BsBoxes },
    { id: "utilities", label: "Utilities", icon: PiUserCircleGearFill },
    { id: "stocks", label: "Stocks", icon: FaBoxes },
    { id: "reports", label: "Reports", icon: FiFileText },
    { id: "users", label: "Users", icon: FiUsers },
    { id: "suppliers", label: "Suppliers", icon: FaHandshake },
    { id: "settings", label: "Settings", icon: FiSettings },
  ];

  const bottomItems = [
    { id: "exit", label: "Exit", icon: ImExit, color: "text-red-500" },
    { id: "help", label: "Help", icon: IoMdHelpCircle },
  ];

  return (
    <div
      className={`fixed sm:static top-0 left-0 z-50 h-screen bg-white shadow-lg transition-transform transform
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0
        w-64 sm:w-32 flex flex-col justify-between`}
    >
      <div className="sm:hidden flex justify-end p-2">
        <button onClick={closeMobile} className="text-gray-600 text-xl">
          &times;
        </button>
      </div>

  
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="pt-3 pb-1 px-2">
          <div className="flex justify-center mb-2">
            <button className="w-8 h-4 bg-gray-100 border border-gray-300 rounded-l flex items-center justify-center">
              <FiArrowLeft className="w-3 h-3 text-gray-700" />
            </button>
            <button className="w-8 h-4 bg-gray-100 border border-gray-300 rounded-r flex items-center justify-center">
              <FiArrowRight className="w-3 h-3 text-gray-700" />
            </button>
          </div>
          <div className="text-left mb-3">
            <h1 className="text-black font-bold text-2xl leading-none">POS</h1>
            <h1 className="text-black font-bold text-xl leading-none mt-0">NAME</h1>
          </div>

          <button
            onClick={() => onPageChange("home")}
            className={`w-full flex items-center gap-2 px-3 py-2 rounded-md mb-2
              ${
                currentPage === "home"
                  ? "bg-gradient-to-r from-emerald-400 to-emerald-500 text-white"
                  : "bg-gradient-to-r from-emerald-400 to-emerald-500 text-white"
              }`}
          >
            <FaHome className="w-5 h-5" />
            <span className="text-sm font-medium">Home</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 py-0 no-scrollbar">
          {topItems.slice(1).map(({ id, label, icon: Icon }) => (
            <div key={id} className="w-full">
              <button
                onClick={() => onPageChange(id)}
                className={`w-full flex flex-col items-center py-1 ${
                  currentPage === id ? "text-green-600" : "text-gray-600"
                }`}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-xs mt-0.5">{label}</span>
              </button>
              <div
                className={`w-full h-px mx-auto ${
                  currentPage === id ? "bg-green-500" : "bg-gray-200"
                }`}
                style={{ width: "60%" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Footer*/}
      <div className="px-2 py-2 border-t border-gray-200">
        {bottomItems.map(({ id, label, icon: Icon, color }) => (
          <button
            key={id}
            onClick={() => onPageChange(id)}
            className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-sm ${
              currentPage === id ? "text-green-600" : color || "text-gray-600"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <style jsx>{`
        /* Hide scrollbar */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default Sidebar;
