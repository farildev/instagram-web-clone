import React from 'react';
import ProfileSidebar from '../layouts/ProfileSidebar';
import Feed from '../layouts/Feed';

const Home = () => {
  return (
    <div className='flex justify-center w-full'>
      <Feed/>
      <ProfileSidebar/>
    </div>
  )
}

export default Home