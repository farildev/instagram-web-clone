import React from 'react';
import ProfileArea from '../components/ProfileArea';
import user from '../data/user';
import { Icon } from '../utils/icons';

const ProfileSidebar = () => {
    const profile = {
        name : "farildev",
        title : "Faril Mammadov - Software Developer",
        image : "https://www.theweeknd.com/files/2021/10/photo_202110_07_BRIANZIFF_THEWEEKND_74-1.jpeg",
    }
  return (
    <aside className='xl:flex lg:hidden md:hidden sm:hidden xs:hidden flex-col w-[383px] pl-16'>
        <ProfileArea profile={profile} />
        <div className='w-full flex items-center justify-between mt-2 p-4'>
            <h4 className='text-gray-600 text-sm font-semibold'>Suggested for you</h4>
            <a className='text-black font-semibold text-xs hover:text-gray-500' href="">See All</a>
        </div>
        <div className='w-full'>
        {
        user.map((index, key) => (
        <div key={key} className='flex items-center justify-start gap-x-3 py-2 px-4 w-full'>
        <div className='w-[44px] h-[44px] bg-white rounded-full'>
            <img className='w-full h-full rounded-full object-cover' src={index.image} alt="" />
        </div>
        <div className='flex flex-1 flex-col'>
            <div className='text-sm font-bold flex items-center gap-x-1'>
              {index.name}
              <Icon name="verified" size={12} />
            </div>
            <div className='text-xs font-medium text-gray-500/80 break-words'>{index.title}</div>
        </div>
        <div>
        <button className='text-xs text-blue-500 font-semibold'>Follow</button>
        </div>
        </div>
            ))
        }
        </div>
        <div className='text-xs text-gray-400/80 font-medium flex flex-wrap gap-2 mt-5 py-2 px-4'>
            <a href="">About</a>
            <a href="">Help</a>
            <a href="">Press</a>
            <a href="">API</a>
            <a href="">Jobs</a>
            <a href="">Privacy</a>
            <a href="">Terms</a>
            <a href="">Locations</a>
            <a href="">Language</a>
            <a href="">Meta Verified</a>
            <div className='mt-2'>
            © 2023 INSTAGRAM FROM META
            </div>
        </div>
    </aside>
  )
}

export default ProfileSidebar