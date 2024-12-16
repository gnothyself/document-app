import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from '@/components/ui/menubar';
import { useEditorStore } from '@/store/use-editor-store';
import {
  FileJson,
  FilePen,
  FilePlus,
  Globe,
  Printer,
  Save,
  Text,
  Trash,
} from 'lucide-react';
import React from 'react';

//TODO: PDF ICON - BsFilePDF from react-icons
const FileMenu = () => {
  const { editor } = useEditorStore();
  const onDownload = (blob: Blob, filename: string) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
  };

  const onSaveJson = () => {
    if (!editor) return;

    const content = editor.getJSON();
    const data = JSON.stringify(content);
    const blob = new Blob([data], { type: 'application/json' });
    onDownload(blob, 'document.json'); //TODO: use document name
  };

  const onSaveHTML = () => {
    if (!editor) return;

    const content = editor.getHTML();
    const blob = new Blob([content], { type: 'text/html' });
    onDownload(blob, 'document.html'); //TODO: use document name
  };

  const onSaveText = () => {
    if (!editor) return;

    const content = editor.getText();
    const blob = new Blob([content], { type: 'text/plain' });
    onDownload(blob, 'document.txt'); //TODO: use document name
  };

  const onSavePDF = () => {
    window.print();
  };
  return (
    <MenubarMenu>
      <MenubarTrigger className=' text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto'>
        File
      </MenubarTrigger>
      <MenubarContent className='print:hidden'>
        <MenubarSub>
          <MenubarSubTrigger>
            <Save className='size-4 mr-2' /> Save
          </MenubarSubTrigger>
          <MenubarSubContent>
            <MenubarItem onClick={onSaveJson}>
              <FileJson className='size-4 mr-2 ' />
              JSON
            </MenubarItem>
            <MenubarItem onClick={onSaveHTML}>
              <Globe className='size-4 mr-2 ' />
              HTML
            </MenubarItem>
            <MenubarItem onClick={onSavePDF}> PDF</MenubarItem>
            <MenubarItem onClick={onSaveText}>
              <Text className='size-4 mr-2 ' /> Text
            </MenubarItem>
          </MenubarSubContent>
        </MenubarSub>
        <MenubarItem>
          <FilePlus className='size-4 mr-2 ' />
          New Document
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>
          <FilePen className='size-4 mr-2 ' /> Rename
        </MenubarItem>
        <MenubarItem>
          <Trash className='size-4 mr-2' /> Delete
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem onClick={() => window.print()}>
          <Printer className='size-4 mr-2 ' /> Print
          <MenubarShortcut>⌘P</MenubarShortcut>
        </MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
};

export default FileMenu;
