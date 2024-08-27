import React from 'react';
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { WidgetProvider } from "./context/widget.context";
import { SidebarProvider } from "./context/sidebar.context";
import WidCard from './components/widCard';

function App() {
  return (
    <WidgetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </WidgetProvider>
  );
}

export default App;
