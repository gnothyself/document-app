import React from 'react';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { Redo2, Undo2 } from 'lucide-react';
import { useEditorStore } from '@/store/use-editor-store';

const EditMenu = () => {
  const { editor } = useEditorStore();

  const handleUndo = () => {
    editor?.chain().focus().undo().run();
  };
  const handleRedo = () => {
    editor?.chain().focus().redo().run();
  };

  return (
    <MenubarMenu>
      <MenubarTrigger className=' text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
        Edit
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem onClick={handleUndo}>
          <Undo2 className='size-4 mr-2' /> Undo
          <MenubarShortcut>⌘Z</MenubarShortcut>
        </MenubarItem>
        <MenubarItem onClick={handleRedo}>
          <Redo2 className='size-4 mr-2' /> Redo
          <MenubarShortcut>⌘Y</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default EditMenu;
