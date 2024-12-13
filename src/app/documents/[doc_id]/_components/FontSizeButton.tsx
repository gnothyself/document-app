import React, { useEffect, useState } from 'react';
import { useEditorStore } from '@/store/use-editor-store';
import { Minus, Plus } from 'lucide-react';

const FontSizeButton = () => {
  const { editor } = useEditorStore();

  const currentFontSize = editor?.getAttributes('textStyle').fontSize
    ? editor?.getAttributes('textStyle').fontSize.replace('px', '')
    : '16';

  const [fontSize, setFontSize] = useState(currentFontSize);

  const updateFontSize = (newSize: string) => {
    const size = parseInt(newSize);
    if (!isNaN(size) && size > 0) {
      editor?.chain().focus().setFontSize(`${size}px`).run();
      setFontSize(newSize);
    }
  };

  useEffect(() => {
    if (currentFontSize) {
      setFontSize(currentFontSize);
    }
  }, [currentFontSize]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFontSize(e.target.value);
  };

  const handleInputBlur = () => {
    updateFontSize(fontSize);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      updateFontSize(fontSize);
      editor?.commands.focus();
    }
  };

  const increment = () => {
    const newSize = parseInt(fontSize) + 1;
    updateFontSize(newSize.toString());
  };

  const decrement = () => {
    const newSize = parseInt(fontSize) - 1;
    if (newSize > 0) {
      updateFontSize(newSize.toString());
    }
  };

  return (
    <div className='flex items-center gap-x-0.5 shrink-0'>
      <button
        className='h-7 w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80'
        onClick={decrement}
      >
        <Minus className='size-4' />
      </button>
      <input
        type='text'
        id='font-size'
        value={fontSize}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleKeyDown}
        className='h-7 w-10 text-sm border border-neutral-400 text-center rounded-sm bg-transparent focus:ouline-none focus-ring:0'
      />
      <button
        className='h-7 w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80'
        onClick={increment}
      >
        <Plus className='size-4' />
      </button>
    </div>
  );
};

export default FontSizeButton;
