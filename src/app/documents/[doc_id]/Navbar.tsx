import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import DocumentInput from './_components/DocumentInput';
import MenuBar from './_components/MenuBar/MenuBar';

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between '>
      <div className='flex gap-2 items-center'>
        <Link href={'/'}>
          <Image src='/globe.svg' alt='logo' width={36} height={36} />
        </Link>
        <div className='flex flex-col'>
          <DocumentInput />
          <MenuBar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
