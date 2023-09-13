import React from 'react';
import { Icon } from '../utils/icons';

const CommentInput = () => {
  return (
    <div className='bg-main flex items-center w-full border-b border-gray-300/50 mt-1 pb-4 font-semibold text-sm'>
        <input className='bg-transparent outline-none flex-1' type="text" placeholder='Add a comments' />
        <Icon name="smile" size={13} />
    </div>
  )
}

export default CommentInput