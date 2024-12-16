'use client';
import React from 'react';
import { Menubar } from '@/components/ui/menubar';
import FileMenu from './FileMenu';
import EditMenu from './EditMenu';
import InsertMenu from './InsertMenu';
import FormatMenu from './FormatMenu';

const MenuBar = () => {
  return (
    <div className='flex '>
      <Menubar className='border-none bg-transparent shadow-none h-auto p-0'>
        <FileMenu />
        <EditMenu />
        <InsertMenu />
        <FormatMenu />
      </Menubar>
    </div>
  );
};

export default MenuBar;
