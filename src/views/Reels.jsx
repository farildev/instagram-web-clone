import React from 'react';
import ReelBox from '../components/ReelBox';
import { Icon } from '../utils/icons';

const Reels = () => {
  return (
    <section className='px-5 w-full h-full'>
      <div className='mt-5 flex items-center gap-y-5 flex-col justify-center'>
          {
            new Array(22).fill(null).map((key) => (
                <div key={key} className='flex flex-col items-center gap-2'> 
                  <ReelBox />
                  <div className='flex flex-col gap-y-4  cursor-pointer'>
                    <Icon name="heart" size={24}/>
                    <Icon name="comment" size={24}/>
                    <Icon name="send" size={24}/>
                    <Icon name="more" size={24}/>
                  </div>
                </div>
            )) 
          }
      </div>
    </section>
  )
}

export default Reels