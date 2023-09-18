import React, {useState , useEffect} from 'react';
import { Icon } from '../utils/icons';
import {FaComment} from "react-icons/fa";
import {AiTwotoneHeart} from "react-icons/ai";
import { IconContext } from 'react-icons';

const Explore = () => {
  const [image , setImage] = useState([]);

  const BASE_API = `https://api.unsplash.com/photos/?client_id=QmBrV0KuJ4kC_79Ojp8kTacHcUxHm2ZIXEshwPzVdVc`;
  // const API_KEY = `QmBrV0KuJ4kC_79Ojp8kTacHcUxHm2ZIXEshwPzVdVc`;
  useEffect(() => {
    fetch(`${BASE_API}`)
    .then(res => res.json())
    .then(data => setImage(data));
  },[])
  return (
    <section className='w-full h-full'>
      <div className='grid grid-cols-3'>
        {
          image.map((photos,key) => (
            <IconContext.Provider value={{color:"white" , size:"20px"}}>
                <div className=' group transition-all gap-2' key={key}>
                <div className='bg-black hidden items-center justify-center gap-x-5 w-full h-full z-10 group-hover:flex group-hover:opacity-10'>
                  <span className='text-white text-md font-bold flex items-center gap-x-2'>
                    <AiTwotoneHeart />
                    2234
                  </span>
                  <span className='text-white text-md font-bold flex items-center gap-x-2'>
                    <FaComment />
                    2234
                  </span>
                </div>
                <img className='object-cover w-full h-full' src={photos.urls.raw} alt={photos.id} />
              </div>
            </IconContext.Provider>
          ))
        }
      </div>
    </section>
  )
}

export default Explore