import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const DocumentsLayout = ({ children }: ILayoutProps) => {
  return (
    <div className='flex flex-col bg-slate-600'>
      <nav className=' w-full bg-slate-400 p-2'> Document NavBar</nav>
      {children}
    </div>
  );
};

export default DocumentsLayout;
