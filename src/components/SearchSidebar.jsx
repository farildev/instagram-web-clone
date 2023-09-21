import React from 'react';
import {AiOutlineClose, AiFillCloseCircle} from "react-icons/ai";
import users from "../data/user";
import { useSelector } from 'react-redux';

const SearchSidebar = () => {
    const {sidebar} = useSelector((state)=> state.site);
  return (
    <aside className={`w-[400px] border border-gray-400/30 top-0 bg-main h-full transition-all duration-300 z-20 ${sidebar ? "fixed xl:left-[16.5%] left-[8%]" : "hidden -left-0"} `}>
        <div className='h-[130px] p-5  flex flex-col justify-between border-b border-gray-400/50 pb-6'>
            <h1 className='text-2xl font-bold'>Search</h1>
            <div className='flex items-center justify-between bg-input rounded-lg py-2 px-3'>
                <input className='w-full h-full outline-none border-none bg-transparent' type="search" placeholder='Search' />
                <AiFillCloseCircle size={20} className='text-gray-400/50 cursor-pointer' />
            </div>
        </div>
        <div className='mt-5 p-5'>
            <div className='flex items-center justify-between'>
                <h3 className='font-bold text-md'>Recent</h3>
                <button className='text-sky-500 font-bold text-sm'>Clear All</button>
            </div>
            <div className='mt-5 flex flex-col gap-y-4'>
                {users.map((user) => (
                    <div key={user.id} className='flex justify-between items-center'>
                        <div className='flex gap-x-3'>
                            <div className='w-16 h-11 border-2 rounded-full border-pink-500'>
                                <img className='w-full h-full object-cover rounded-full ' src={user.image} alt="" />
                            </div>
                            <div className='line-clamp-1 w-full text-sm font-bold flex flex-col p-2'>
                                <span>{user.name}</span>
                                <span className='text-sm font-medium text-gray-400 '>{user.title}</span>
                            </div>
                        </div>
                        <button className='cursor-pointer'>
                            <AiOutlineClose size={20} className='text-gray-500' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    </aside>
  )
}

export default SearchSidebar