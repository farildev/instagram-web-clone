import React from 'react';
import SidebarItems from '../components/SidebarItems';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const isVisible = location.pathname === '/login';
  return (
    <aside className={`xl:w-[244px] w-24 ${isVisible ? "hidden" : "flex"} flex-col flex-shrink-0 sticky top-0 left-0  h-screen border-r border-1 border-dark border-opacity-10 p-3`}>
        <SidebarItems/>
    </aside>
  )
}

export default Sidebar