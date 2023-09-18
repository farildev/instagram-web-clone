import React, {useState , useEffect} from 'react';


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
            <div className='w-[450px] h-[450px] group transition-all gap-2' key={key}>
              <div className='bg-dark w-full h-full z-10 group-hover:bg-opacity-20 bg-opacity-40'></div>
              <img className='object-cover w-full h-full' src={photos.urls.raw} alt={photos.id} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Explore