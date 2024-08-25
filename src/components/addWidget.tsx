import React from 'react';
import { useSidebar } from '../utils/useSidebar';
import { RxCross2 } from 'react-icons/rx';
import WidNavbar from './widNavbar';

const AddWid: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full bg-white text-black transition-transform duration-300 ease-in-out z-30 transform ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ width: '45%' }} 
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-black"
          onClick={toggleSidebar}
          aria-label="Close Sidebar"
        >
          <RxCross2 color='white' size={28} /> 
        </button>

        <h2 className="p-4 text-lg font-bold bg-blue-900 text-white">Add Widget</h2>
         
        {/* Content for add widget goes here */}
        <WidNavbar />
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isSidebarOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />
    </>
  );
};

export default AddWid;
