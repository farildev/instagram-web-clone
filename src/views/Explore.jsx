import React, {useState , useEffect} from 'react';
import {FaComment} from "react-icons/fa";
import {AiTwotoneHeart} from "react-icons/ai";

const Explore = () => {
  const [image , setImage] = useState([]);

  const BASE_API = `https://api.unsplash.com/photos/?client_id=QmBrV0KuJ4kC_79Ojp8kTacHcUxHm2ZIXEshwPzVdVc`;
  useEffect(() => {
    fetch(`${BASE_API}`)
    .then(res => res.json())
    .then(data => setImage(data));
  },[])
  return (
    <section className='w-full h-full px-[150px]'>
      <div className='grid grid-cols-3'>
        {
          image.map((photos,key) => (
                <div className='w-[300px] h-[300px] relative group transition-all gap-2 cursor-pointer mt-2' key={key}>
                  <div className='bg-black absolute top-0 left-0 hidden items-center justify-center gap-x-5 w-full h-full z-10 group-hover:flex group-hover:bg-opacity-50'>
                    <span className='text-white text-md font-bold flex items-center gap-x-2'>
                      <AiTwotoneHeart size={20} color='#fff' />
                        {photos.likes}
                    </span>
                    <span className='text-white text-md font-bold flex items-center gap-x-2'>
                      <FaComment size={16} color='#fff' />
                      2234
                    </span>
                  </div>
                <img className='object-cover w-full h-full' src={photos.urls.raw} alt={photos.id} />
              </div>
          ))
        }
      </div>
    </section>
  )
}

export default Explore