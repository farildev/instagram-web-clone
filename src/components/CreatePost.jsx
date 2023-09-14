import React from 'react';
import {AiOutlineClose} from "react-icons/ai";
import { Icon } from '../utils/icons';
import { setToggle } from '../stores/site';
import { useSelector , useDispatch } from 'react-redux';

const CreatePost = () => {
    const dispatch = useDispatch();
  return (
    <div className='w-full h-full top-0 left-0 right-0 bottom-0 z-10 fixed bg-dark flex items-center justify-center bg-opacity-70 '>
        <button onClick={() => dispatch(setToggle(false))} className='absolute top-5 right-5 cursor-pointer opacity-100'>
            <AiOutlineClose size={24} color='white' />
        </button>
        <div className='w-[550px] h-[600px] bg-main rounded-lg flex flex-col'>
            <div className='border-b border-gray-300 flex h-[42px] items-center justify-center w-full'>
                <h2 className='font-semibold text-md '>Create new post</h2>
            </div>
            <div className='p-6 h-full flex flex-col items-center justify-center'>
                <Icon name="createArea" size={96} />
                <span className='font-medium text-xl'>Drag photos and videos here</span>
                <button className='bg-sky-600 mt-5 text-white font-semibold text-sm rounded-lg px-4 py-[7px]'>Select From Computer</button>
            </div>
        </div>
    </div>
  )
}

export default CreatePost