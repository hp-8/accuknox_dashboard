import React from 'react';
import { useSidebar } from '../utils/useSidebar';
import { LuRefreshCw } from "react-icons/lu";
import { HiDotsVertical } from "react-icons/hi";

const Toolbar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow-md border-b border-gray-200">
      <div className="text-lg font-bold text-gray-800">Welcome to our Dashboard</div>

      <div className="flex space-x-4">
        <button
          className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          onClick={toggleSidebar}
        >
          Add Widget
        </button>

        <button onClick={handleRefresh} className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">
          <LuRefreshCw/>
        </button>

        <button  className="bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-md hover:bg-gray-300 transition duration-200">
          <HiDotsVertical/>
        </button>

        <button className="bg-white text-blue-900 font-semibold py-2 px-4 rounded-md border-2 border-blue-900 hover:bg-blue-100 transition duration-200">
          Last 2 days
        </button>
      </div>
    </div>
  );
}

export default Toolbar;