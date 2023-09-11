import React from 'react';
import Logo from "../assets/images/instagram-wordmark.svg";
import {NavLink} from "react-router-dom";
import { Icon } from '../utils/icons';

const Sidebar = () => {
  return (
    <aside className='w-[244px] h-screen border-r border-1 border-dark border-opacity-10 px-3 py-3'>
        <nav className='flex flex-col h-full relative justify-between'>
          <div>
            <div className='px-3 py-5'>
              <img src={Logo} className='w-[110px]' alt="" />
            </div>
            <ul className='text-md font-semibold'>
              <li className='p-3 my-2 gap-x-4 flex items-center hover:bg-gray-300/20 rounded'>
                <Icon  name="home" size={24}/>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className='p-3 my-2 gap-x-4 flex hover:bg-gray-300/20 rounded'>
                <Icon name="search" size={24}/>
                <NavLink to={''}>Search</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="explore" size={24}/>
                <NavLink  to={'/explore'}>Explore</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="reel" size={24}/>
                <NavLink to={'/reels'}>Reels</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="message" size={24}/>
                <NavLink to={'/directs'}>Messages</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="heart" size={24}/>
                <NavLink to={''}>Notifications</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="create" size={24}/>
                <NavLink to={''}>Create</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded'>
                <Icon name="profile" size={24}/>
                <NavLink to={'/profile'}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className='w-full absolute bottom-5 cursor-pointer hover:bg-gray-300/20 rounded'>
            <button className='text-md p-3 my-1 gap-x-4 font-semibold flex justify-end'>
              <Icon name="hamburger" size={24}/>
              <span>Settings</span>
            </button>
          </div>
        </nav>
    </aside>
  )
}

export default Sidebar