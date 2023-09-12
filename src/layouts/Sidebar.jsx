import React from 'react';
import SidebarItems from '../components/SidebarItems';

const Sidebar = () => {
  return (
    <aside className='w-[244px] h-screen border-r border-1 border-dark border-opacity-10 px-3 py-3'>
        <SidebarItems/>
    </aside>
  )
}

export default Sidebar