import React from 'react';
import users from "../data/user";

const ReelBox = () => {
  return (
    users.map((user) => (
        <div className='relative w-[350px] h-[600px] shadow-md bg-dark rounded-xl p-5 text-white font-semibold'>
            <div className='absolute bottom-5 left-5 flex '>
                <img className='w-10 h-10 object-cover rounded-full ' src={user.image} alt="" />
                <span className='ml-2'>{user.name}</span>
            </div>
        </div>
    ))
  )
}

export default ReelBox