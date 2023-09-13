import React from 'react';
import { Icon } from '../utils/icons';
import CommentInput from './CommentInput';

const PostBox = ({detail}) => {
  return (
    <div className='flex flex-col w-[470px]'>
        <div className='flex items-center gap-x-2 mt-10 pl-1 pb-3'>
            <div className='w-[42px] h-[42px] border-2 rounded-full border-pink-500 flex items-center justify-center'>
                <img className='w-8 h-8 rounded-full object-cover' src={detail.image} alt="" />
            </div>
            <div className='flex flex-1 items-center gap-x-1'>
                <span className='flex items-center gap-x-1 text-sm font-semibold'>
                    {detail.name}
                    <Icon name="verified" size={16} />
                </span>
                <span className='text-sm font-semibold text-gray-400'>•</span>
                <span className='text-sm font-semibold text-gray-400'>20 h</span>
            </div>
            <div>
                <Icon name="more" size={24} />
            </div>
        </div>
        <div className='w-full h-full object-cover rounded border border-gray-400'>
            <img className='rounded w-full h-full' src={detail.image} alt="" />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-1 items-center justify-between mt-3'>
                <div className='flex items-center gap-x-4'> 
                    <Icon name="heart" size={24} />
                    <Icon name="comment" size={24} />
                    <Icon name="send" size={24} />
                </div>
                <div className='flex'>
                    <Icon name="saved" size={24} />   
                </div>
            </div>
            <div className='mt-3 text-sm font-semibold '>
                {detail.likes} likes
            </div>
            <div className='w-full flex-1 gap-x-2 mt-2'>
                <h2 className='text-sm font-semibold '>{detail.name}</h2>
                <p className='flex-1 text-sm font-light break-words line-clamp-2'>
                {detail.description}
                </p>
            </div>
            <div className='font-medium text-sm text-gray-500 mt-2'>
                View all 24 comments
            </div>
            <CommentInput/>
        </div>
    </div>
  )
}

export default PostBox