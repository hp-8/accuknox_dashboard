import Home from "./pages/home";
import Dashboard from "./pages/dashboard";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { SidebarProvider } from "./context/sidebar.context";

function App() {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </SidebarProvider>
  );
}

export default App;
