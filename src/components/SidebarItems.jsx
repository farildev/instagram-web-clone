import React from 'react';
import Logo from "../assets/images/instagram-wordmark.svg";
import {NavLink} from "react-router-dom";
import { Icon } from '../utils/icons';
import {useSelector , useDispatch} from "react-redux";
import { setToggle } from '../stores/site';
import SidebarDropdown from '../components/SidebarDropdown';

const SidebarItems = () => {
  const dispatch = useDispatch();
  const {toggle} = useSelector((state) => state.site);
  console.log(toggle);
  return (
    <nav className='flex flex-col h-full relative justify-between'>
          <div>
            <div className='px-2 py-5'>
              <img src={Logo} className='w-[110px]' alt="" />
            </div>
            <ul className='text-md font-medium'>
              <li className='p-3 my-2 gap-x-4 flex items-center hover:bg-gray-300/20 rounded-lg'>
                <Icon  name="home" size={24}/>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li className='p-3 my-2 gap-x-4 flex hover:bg-gray-300/20 rounded-lg'>
                <Icon name="search" size={24}/>
                <NavLink to={'/c'}>Search</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="explore" size={24}/>
                <NavLink  to={'/explore'}>Explore</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="reel" size={24}/>
                <NavLink to={'/reels'}>Reels</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="message" size={24}/>
                <NavLink to={'/directs'}>Messages</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="heart" size={24}/>
                <NavLink to={'/a'}>Notifications</NavLink>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="create" size={24}/>
                <button onClick={()=>dispatch(setToggle(true))}>Create</button>
              </li>
              <li className='p-3 my-2 flex gap-x-4 hover:bg-gray-300/20 rounded-lg'>
                <Icon name="profile" size={24}/>
                <NavLink to={'/profile'}>Profile</NavLink>
              </li>
            </ul>
          </div>
          <div className='w-full absolute bottom-5 cursor-pointer hover:bg-gray-300/20 rounded-lg'>
            <SidebarDropdown/>
          </div>
        </nav>
  )
}

export default SidebarItems