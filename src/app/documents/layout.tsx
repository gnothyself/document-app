import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const DocumentsLayout = ({ children }: ILayoutProps) => {
  return <div className='flex flex-col'>{children}</div>;
};

export default DocumentsLayout;
