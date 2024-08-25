import React from 'react';
import Navbar from "../components/navbar";
import { SidebarProvider } from "../context/sidebar.context";
import { useSidebar } from "../utils/useSidebar";
import AddWid from '../components/addWidget';

const Dashboard = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="bg-gray-400 h-screen w-screen">
    <Navbar/>
     <AddWid/>
      <div className="flex flex-row">
        <div className="m-6 font-bold">Welcome to our Dashboard</div>

        <button className="bg-slate-200 w-1/12 mr-4" onClick={toggleSidebar}>
          Add Widget
        </button>

        <button className="bg-slate-200 w-1/12 max-w-12 mr-4">Ref</button>

        <button className="bg-slate-200 w-1/12 max-w-12 mr-4">...</button>

        <button className="bg-slate-200 w-1/12 mr-4 font-semibold text-blue-900 border-blue-900 border-2">
          Last 2 days
        </button>
      </div>
    </div>
  );
};

const DashboardWrapper = () => {
  return (
    <SidebarProvider>
      <Dashboard />
    </SidebarProvider>
  );
};

export default DashboardWrapper;
