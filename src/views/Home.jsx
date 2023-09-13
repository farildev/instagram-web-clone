import React from 'react';
import ProfileSidebar from '../layouts/ProfileSidebar';
import Feed from '../layouts/Feed';
import Footer from '../layouts/Footer';

const Home = () => {
  return (
    <>  
      <div>
      <div className='flex justify-center w-full'>
      <Feed/>
      <ProfileSidebar/>
      </div>
      <div className='flex items-center justify-center w-full px-[130px]'>
      <Footer/>
      </div>
    </div>
    </>

  )
}

export default Home