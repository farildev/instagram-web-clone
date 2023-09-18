import React from 'react';
import SidebarItems from '../components/SidebarItems';

const Sidebar = () => {
  return (
    <aside className='xl:w-[244px] w-24 flex flex-col flex-shrink-0 sticky top-0 left-0  h-screen border-r border-1 border-dark border-opacity-10 px-3 py-3'>
        <SidebarItems/>
    </aside>
  )
}

export default Sidebar