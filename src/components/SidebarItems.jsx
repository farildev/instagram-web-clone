import React from 'react';
import Logo from "../assets/images/instagram-wordmark.svg";
import {Link, NavLink} from "react-router-dom";
import { Icon } from '../utils/icons';
import {useSelector , useDispatch} from "react-redux";
import { setToggle  , setSidebar} from '../stores/site';
import SidebarDropdown from '../components/SidebarDropdown';
import {AiOutlineInstagram} from "react-icons/ai";

const SidebarItems = () => {
  const dispatch = useDispatch();
  const {toggle , sidebar} = useSelector((state) => state.site);
  return (
    <nav className='flex flex-col h-full relative justify-between'>
          <div className='flex xl:items-start xl:justify-start justify-center items-center flex-col'>
            <div className='px-2 py-5 group'>
              <Link to={'/'} className='xl:hidden group-hover:scale-[1.06] hover:bg-gray-300/20 p-3 flex items-center rounded-lg cursor-pointer'>
                <AiOutlineInstagram size={28} />
              </Link>
              
              <Link to={'/'}>
              <img src={Logo} className='w-[110px] hidden items-center xl:flex ' alt="" />
              </Link>
            </div>
            <ul className='text-md font-medium w-full'>
              <NavLink to={'/'} className='p-3 my-2 gap-x-4 hover:scale-[1.06] cursor-pointer flex xl:justify-start justify-center items-center hover:bg-gray-300/20 rounded-lg'>
                <Icon  name="home" size={24}/>
                <span className='hidden xl:flex' to={'/'}>Home</span>
              </NavLink>
              <button onClick={()=>dispatch(setSidebar(!sidebar))} className='p-3 w-full my-2 gap-x-4 hover:scale-[1.06] cursor-pointer flex xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="search" size={24}/>
                <span className='hidden xl:flex'>Search</span>
              </button>
              <NavLink to={'/explore'} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] cursor-pointer xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="explore" size={24}/>
                <span className='hidden xl:flex'>Explore</span>
              </NavLink>
              <NavLink to={'/reels'} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] cursor-pointer xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="reel" size={24}/>
                <span className='hidden xl:flex' >Reels</span>
              </NavLink>
              <NavLink to={'/directs'} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] cursor-pointer xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="message" size={24}/>
                <span className='hidden xl:flex' >Messages</span>
              </NavLink>
              <NavLink  to={'/a'} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] cursor-pointer xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="heart" size={24}/>
                <span className='hidden xl:flex'>Notifications</span>
              </NavLink>
              <button onClick={()=>dispatch(setToggle(!toggle))} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] xl:justify-start justify-center cursor-pointer hover:bg-gray-300/20 rounded-lg w-full'>
                <Icon name="create" size={24}/>
                <span className='hidden xl:flex'>Create</span>
              </button>
              <NavLink to={'/profile'} className='p-3 my-2 flex gap-x-4 hover:scale-[1.06] cursor-pointer xl:justify-start justify-center hover:bg-gray-300/20 rounded-lg'>
                <Icon name="profile" size={24}/>
                <span className='hidden xl:flex'>Profile</span>
              </NavLink>
            </ul>
          </div>
          <div className='w-full absolute bottom-5 cursor-pointer hover:bg-gray-300/20 rounded-lg'>
            <SidebarDropdown/>
          </div>
        </nav>
  )
}

export default SidebarItems