import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useEditorStore } from '@/store/use-editor-store';
import { ListCollapse } from 'lucide-react';
import React from 'react';

const LineHeightButton = () => {
  const { editor } = useEditorStore();

  // const value = ['left', 'center', 'right', 'justify'].find((alignment) =>
  //   editor?.isActive({ textAlign: alignment })
  // );

  const lineHeights = [
    {
      label: 'Default',
      value: 'normal',
    },
    {
      label: 'Single',
      value: '1',
    },
    {
      label: '1.15',
      value: '1.15',
    },
    {
      label: '1.5',
      value: '1.5',
    },
    {
      label: 'Double',
      value: '2',
    },
  ];

  const handleClick = async (value: string) => {
    editor?.chain().focus().setLineHeight(value).run();
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80'>
          <ListCollapse className='size-4' size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className='p-1 flex flex-col gap-y-1'
      >
        {lineHeights.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            className={cn(
              'flex  items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80',
              editor?.getAttributes('paragraph')?.lineHeight === value &&
                'bg-neutral-200/80'
            )}
            onSelect={() => handleClick(value)}
          >
            <span className='text-sm'>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LineHeightButton;
