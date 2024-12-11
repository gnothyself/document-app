import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: ILayoutProps) => {
  return (
    <div className='flex flex-col gap-y-4'>
      <nav className=' w-full bg-slate-400'> Auth NavBar</nav>
      {children}
    </div>
  );
};

export default AuthLayout;
