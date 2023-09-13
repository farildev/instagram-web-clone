import React from 'react';
import StorySlider from '../components/StorySlider';
import PostBox from '../components/PostBox';
import users from '../data/user';

const Feed = () => {
  return (
    <div className='w-[630px] max-w-full flex flex-col'>
        <StorySlider/>
        <section className='flex flex-col justify-center items-center mt-5'>
          {
            users.map((index,key)=> (
              <PostBox detail={index} key={key} />
            ))
          }
        </section>
    </div>
  )
}

export default Feed