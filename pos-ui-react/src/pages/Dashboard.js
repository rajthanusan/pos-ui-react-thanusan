"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../components/Sidebar";
import TopNavigation from "../components/TopNavigation";
import ProductManagement from "../components/ProductManagement";


function Dashboard() {
  const [currentPage, setCurrentPage] = useState("products");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);
  const closeSidebar = () => setIsMobileOpen(false);

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        isMobileOpen={isMobileOpen}
        closeMobile={closeSidebar}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center justify-between bg-white shadow-md px-4 py-3 sm:hidden">
          <button
            onClick={toggleSidebar}
            className="text-gray-700 text-2xl"
            aria-label="Toggle sidebar"
          >
            <FiMenu />
          </button>
          <h1 className="text-xl font-bold">POS NAME</h1>
          <div style={{ width: 24 }} />
        </div>
        <div className="hidden sm:block">
          <TopNavigation />
        </div>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4">
          <ProductManagement />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
