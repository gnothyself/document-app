import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className='flex min-h-screen items-center justify-center gap-2'>
      Click
      <Link href={'/documents'} className='text-blue-600 underline'>
        here
      </Link>
      to go to documents page
    </div>
  );
};

export default Home;
