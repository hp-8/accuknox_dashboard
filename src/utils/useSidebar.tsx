// useSidebar.tsx

import { useContext } from 'react';
import { SidebarContext } from '../context/sidebar.context';

export const useSidebar = () => {
  const {isSidebarOpen, setIsSidebarOpen} = useContext(SidebarContext);
  
  const toggleSidebar =  () => {
    setIsSidebarOpen(prevState => !prevState)
    console.log(isSidebarOpen);  
  }

  return {isSidebarOpen , toggleSidebar};
};