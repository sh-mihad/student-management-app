import { useState } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100 relative">
      {/* Mobile Topbar */}
      <div className="md:hidden flex items-center justify-between bg-white px-4 py-2 shadow w-full fixed top-0 z-20">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-600 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-lg font-semibold">Student App</h1>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Content Area */}
      <main className="flex-1 p-4 pt-14 md:pt-2 overflow-auto w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;
