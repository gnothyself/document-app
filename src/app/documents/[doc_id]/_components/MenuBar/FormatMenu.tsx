import React from 'react';
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import {
  Bold,
  Italic,
  RemoveFormatting,
  Strikethrough,
  Text,
  Underline,
} from 'lucide-react';
import { useEditorStore } from '@/store/use-editor-store';

const FormatMenu = () => {
  const { editor } = useEditorStore();

  const handleBold = () => {
    editor?.chain().focus().toggleBold().run();
  };

  const handleItalic = () => {
    editor?.chain().focus().toggleItalic().run();
  };

  const handleUnderline = () => {
    editor?.chain().focus().toggleUnderline().run();
  };

  const handleStrikethrough = () => {
    editor?.chain().focus().toggleStrike().run();
  };

  const handleClearFormatting = () => {
    editor?.chain().focus().unsetAllMarks().run();
  };

  return (
    <MenubarMenu>
      <MenubarTrigger className=' text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
        Format
      </MenubarTrigger>
      <MenubarContent>
        <MenubarSub>
          <MenubarSubTrigger>
            <Text className='size-4 mr-2' />
            Text
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem onClick={handleBold}>
              <Bold className='size-4 mr-2' />
              Bold
              <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={handleItalic}>
              <Italic className='size-4 mr-2' />
              Italic
              <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={handleUnderline}>
              <Underline className='size-4 mr-2' />
              Underline
              <MenubarShortcut>⌘U</MenubarShortcut>
            </MenubarItem>
            <MenubarItem onClick={handleStrikethrough}>
              <Strikethrough className='size-4 mr-2' />
              Strikethrough
              <MenubarShortcut className='pl-2'>⌘⇧X</MenubarShortcut>
            </MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem onClick={handleClearFormatting}>
          <RemoveFormatting className='size-4 mr-2' />
          Clear Formatting
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default FormatMenu;
