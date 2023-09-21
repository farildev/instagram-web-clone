import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../utils/icons';
import {AiOutlinePlus} from "react-icons/ai";

const Profile = () => {
  return (
    <section className='px-5 w-full h-full'>
      <div className='flex flex-1 justify-center items-center'>
        <div className='mr-6 w-[275px] flex items-center justify-center rounded-full'>
          <img className='w-[175px] max-w-full h-[175px] object-cover rounded-full' src="https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGh1bWFufGVufDB8fDB8fHww&w=1000&q=80" alt="" />
        </div>
        <div className='mb-11'>
          <div className='flex items-center gap-x-3'>
            <div className='text-xl font-medium'>
              farilcreative
            </div>
            <div className='flex ml-2 justify-end gap-x-2'>
            <Link className='px-4 h-8 bg-gray-300/60 text-sm font-bold rounded-md flex items-center'>Edit Profile</Link>
            <Link className='px-4 h-8 bg-gray-300/60 text-sm font-bold rounded-md flex items-center'>View Archive</Link>
            <Link className='px-4 h-8 bg-gray-300/60 text-sm font-bold rounded-md flex items-center'>Ad Tools</Link>
            </div>
            <div className='w-10 h-10 p-2'>
              <Icon name="settings" size={24} />
            </div>
          </div>
          <div className='flex flex-1 items-center my-5'>
            <div className='flex items-center gap-x-1 font-medium'>
              <span className='text-lg font-semibold'>8</span>
              posts
            </div>
            <div className='flex items-center ml-10 gap-x-1 font-medium'>
              <span className='text-lg font-semibold'>1.1M</span>
              followers
            </div>
            <div className='flex items-center ml-10 gap-x-1 font-medium'>
              <span className='text-lg font-semibold'>211</span>
              following
            </div>
          </div>
          <div className='flex flex-col'>
              <h3 className='text-sm font-semibold'>Faril Mammadov - Software Developer</h3>
              <span className='text-sm font-medium mt-3 text-gray-500'>Web designer</span>
              <p className='flex flex-col font-medium text-sm'>
              <span>🎥 Digital Content Creator</span>
              <span>💻 Software Developer (React.js & Javascript)</span>
              <span>✒ Senior Graphic Designer & UI/UX designer</span>
              <span>🔍 Tips and tricks about programming</span>
              </p>
          </div>
        </div>
      </div>
      <section className='ml-5 flex justify-start items-center'>
        <div className='py-[10px] flex flex-col gap-y-2 items-center gap-x-5 px-4 ' >
          <span className='bg-gray-300/10 w-[87px] h-[87px] flex items-center justify-center rounded-full cursor-pointer border border-gray-200'>
          <AiOutlinePlus size={44} color='#c7c7c7' />
          </span>
          <span className='text-xs font-semibold'>New</span>
        </div>
      </section> 
      <div className='border-b border-gray-400/30 w-full'></div>
    </section>
  )
}

export default Profile