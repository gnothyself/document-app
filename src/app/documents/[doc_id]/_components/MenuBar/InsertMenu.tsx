import React from 'react';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useEditorStore } from '@/store/use-editor-store';

const InsertMenu = () => {
  const { editor } = useEditorStore();

  const insertTable = ({ rows, cols }: { rows: number; cols: number }) => {
    editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run();
  };

  return (
    <MenubarMenu>
      <MenubarTrigger className=' text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
        Insert
      </MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>Table</MenubarSubTrigger>

          <MenubarSubContent>
            <MenubarItem onClick={() => insertTable({ rows: 1, cols: 1 })}>
              1 x 1
            </MenubarItem>
            <MenubarItem onClick={() => insertTable({ rows: 2, cols: 2 })}>
              2 x 2
            </MenubarItem>
            <MenubarItem onClick={() => insertTable({ rows: 3, cols: 3 })}>
              3 x 3
            </MenubarItem>
            <MenubarItem onClick={() => insertTable({ rows: 4, cols: 4 })}>
              4 x 4
            </MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default InsertMenu;
