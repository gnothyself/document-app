import { CircleCheck } from 'lucide-react';
import React from 'react';
//TODO: Icon should be BsCloudCheck from react-icons
const DocumentInput = () => {
  return (
    <div className='flex items-center gap-2'>
      <span className='text-lg px-1.5 cursor-pointer truncate '>Untitled Document</span>
      <CircleCheck />
    </div>
  );
};

export default DocumentInput;
