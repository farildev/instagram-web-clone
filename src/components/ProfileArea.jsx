import React from 'react';
import { Icon } from '../utils/icons';

const ProfileArea = ({profile}) => {
  return (
    <div className='flex items-center justify-start px-4 gap-x-4 w-full'>
          <img className='w-[44px] h-[44px] rounded-full object-center object-cover' src={profile.image} alt="" />
        <div className='flex  flex-col'>
            <div className='text-sm font-bold flex items-center gap-x-1'>
              {profile.name}
              <Icon name="verified" size={12} />
            </div>
            <div className='text-sm font-medium leading-4 text-gray-600/80  break-words'>{profile.title}</div>
        </div>
        <div>
        <button className='text-xs text-blue-500 font-semibold'>Switch</button>
        </div>
    </div>
  )
}

export default ProfileArea