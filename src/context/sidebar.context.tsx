//sidebar.context.tsx

import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface SidebarContextType {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>
}

// Create the context with a default value
export const SidebarContext = createContext<SidebarContextType >( {} as SidebarContextType);

interface SidebarProviderProps {
  children: ReactNode;
}

// Create a provider component
export const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);


  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
