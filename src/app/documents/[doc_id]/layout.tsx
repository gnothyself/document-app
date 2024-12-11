import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

const ComponentName = ({ children }: ILayoutProps) => {
  return <div>{children}</div>;
};

export default ComponentName;
