import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center gap-2 flex-col'>
      <div className='text-2xl font-bold'>Welcome to the Home Page</div>
      <div className='flex gap-2'>
        Click
        <Link href={'/documents'} className='text-blue-600 underline'>
          here
        </Link>
        to go to documents page
      </div>
    </div>
  );
};

export default Home;
