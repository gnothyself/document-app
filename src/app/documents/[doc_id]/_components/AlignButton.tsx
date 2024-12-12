import React from 'react';
import { useEditorStore } from '../../../../store/use-editor-store';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../../../components/ui/dropdown-menu';

const AlignButton = () => {
  const { editor } = useEditorStore();

  const value = ['left', 'center', 'right', 'justify'].find((alignment) =>
    editor?.isActive({ textAlign: alignment })
  );

  const alignments = [
    {
      label: 'Align Left',
      value: 'left',
      icon: AlignLeft,
    },
    {
      label: 'Align Center',
      value: 'center',
      icon: AlignCenter,
    },
    {
      label: 'Align Right',
      value: 'right',
      icon: AlignRight,
    },
    {
      label: 'Justify',
      value: 'justify',
      icon: AlignJustify,
    },
  ];

  const CurrentIcon =
    alignments.find((alignment) => alignment.value === value)?.icon || AlignLeft;

  const handleClick = async (value: string) => {
    editor?.chain().focus().setTextAlign(value).run();
    // editor?.commands.setTextAlign(value);
    // setTimeout(() => {
    //   editor?.commands.focus();
    // }, 300);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80'>
          <CurrentIcon className='size-4' size={16} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        onCloseAutoFocus={(e) => e.preventDefault()}
        className='p-1 flex flex-col gap-y-1'
      >
        {alignments.map(({ label, value, icon: Icon }) => (
          <DropdownMenuItem
            key={value}
            className='flex  items-center gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80'
            onSelect={() => handleClick(value)}
          >
            <Icon className='size-4' size={16} />
            <span className='text-sm'>{label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlignButton;
