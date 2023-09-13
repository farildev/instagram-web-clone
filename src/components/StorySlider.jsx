import React from 'react';
import users from "../data/user";

const StorySlider = () => {
  return (
    <div className='w-full flex items-center gap-x-5 py-2'>
        {
            users.map((user) => (
                <div key={user.id} className='w-16 flex flex-col items-center'>
                    <div className='w-16 h-16 flex items-center justify-center border-2 rounded-full border-pink-500'>
                        <img className='w-[3.375rem] h-[3.375rem] rounded-full object-cover' src={user.image} alt="" />
                    </div>
                    <div className='line-clamp-1 w-full text-xs font-medium p-2'>
                        {user.name}
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default StorySlider