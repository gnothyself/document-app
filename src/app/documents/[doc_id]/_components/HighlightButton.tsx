import React from 'react';
import { useEditorStore } from '@/store/use-editor-store';
import { ColorResult, SketchPicker } from 'react-color';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Highlighter } from 'lucide-react';

const HighlightButton = () => {
  const { editor } = useEditorStore();

  const value = editor?.getAttributes('highlight').color || '#faf594';
  const isActive = editor?.isActive('highlight');

  const onChange = (color: ColorResult) => {
    editor?.chain().focus().setHighlight({ color: color.hex }).run();
  };

  const toggleHighlight = () => {
    editor?.chain().focus().toggleHighlight().focus('end').run();
    if (!isActive) {
      editor?.chain().focus('end').toggleHighlight().run();
    }
  };

  const handleClose = () => {
    editor?.commands.focus('end');
  };

  return (
    <DropdownMenu>
      <div className='flex items-center hover:bg-neutral-200/50'>
        <button
          onClick={toggleHighlight}
          className='h-7 min-w-7 shrink-0 flex flex-col items-center justify-center rounded-sm hover:bg-neutral-200/80 px-0 overflow-hidden text-sm'
          style={{ backgroundColor: isActive ? value : 'transparent' }}
        >
          <Highlighter className='size-4' />
        </button>
        <DropdownMenuTrigger asChild>
          <button className='h-7 min-w-3 flex items-center hover:bg-neutral-200/80'>
            <ChevronDown className='p-0 size-4 shrink-0' />
          </button>
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent onCloseAutoFocus={(e) => e.preventDefault()} className='p-0'>
        <DropdownMenuItem onSelect={(e) => e.preventDefault()} className='p-0'>
          <SketchPicker color={value} onChange={onChange} />
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={handleClose}>Close</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HighlightButton;
