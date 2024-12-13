import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { ChevronDown } from 'lucide-react';
import React from 'react';

const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { label: 'Arial', value: 'Arial' },
    { label: 'Courier New', value: 'Courier New' },
    { label: 'Georgia', value: 'Georgia' },
    { label: 'Times New Roman', value: 'Times New Roman' },
    { label: 'Verdana', value: 'Verdana' },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm '>
          <span className='truncate'>
            {editor?.getAttributes('textStyle').fontFamily || 'Arial'}
          </span>
          <ChevronDown className='ml-2 size-4 shrin-0' />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='p-1 flex flex-col gap-y-1'>
        {fonts.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
            className={cn(
              'flex items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80',
              editor?.getAttributes('textStyle').fontFamily == value &&
                'bg-neutral-200/80'
            )}
            style={{ fontFamily: value }}
          >
            <span className='text-sm'>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default FontFamilyButton;
