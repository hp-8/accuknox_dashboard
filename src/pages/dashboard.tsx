import React, { useEffect, useState } from 'react';
import Navbar from "../components/navbar";
import { SidebarProvider } from "../context/sidebar.context";
import { useSidebar } from "../utils/useSidebar";
import AddWid from '../components/addWidget';
import WidCard from '../components/widCard';
import Toolbar from '../components/toolbar';
import { useWidget } from '../context/widget.context';

const Dashboard = () => {
  const { toggleSidebar } = useSidebar();
  const { categories } = useWidget();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const loadWidgets = async () => {
      // Simulate a delay or async operation
      await new Promise(resolve => setTimeout(resolve, 500)); // Adjust as needed
      setIsLoading(false);
    };

    loadWidgets();
  }, []);

  return (
    <div className="bg-gray-100 h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <div className="relative">
          <AddWid />
        </div>
        <div className="flex flex-col flex-1 p-6 overflow-y-auto">
          <Toolbar />
          <div className="mt-6 flex flex-wrap gap-4">
            {isLoading ? (
              <div className="flex justify-center items-center w-full h-full">
                <p className="text-gray-600 text-lg">Loading widgets...</p>
              </div>
            ) : (
              <WidCard />
            )}
          </div>
        </div>
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