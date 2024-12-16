import React, { useRef } from 'react';
// import { useEditorStore } from '@/store/use-editor-store';
import { Triangle } from 'lucide-react';

interface MarkerProps {
  position: number;
  isLeft?: boolean;
  isDragging?: boolean;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Marker = ({
  position,
  isLeft = false,
  isDragging,
  onMouseDown,
  onDoubleClick,
}: MarkerProps) => {
  return (
    <div
      className='absolute top-0 w-4 h-full cursor-ew-resize z-[5] group -ml-2'
      style={{ [isLeft ? 'left' : 'right']: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <Triangle className='size-3 absolute left-1/2 top-0 h-full fill-blue-500 transform -translate-x-1/2 rotate-180' />
      <div
        className=' absolute left-1/2 top-4 -translate-x-1/2 transform '
        style={{
          height: '100vh',
          width: '1px',
          transform: 'scaleX(0.5)',
          backgroundColor: '#3b72f6',
          display: isDragging ? 'block' : 'none',
        }}
      />
    </div>
  );
};
const Ruler = () => {
  // const { editor } = useEditorStore();

  const [leftMargin, setLeftMargin] = React.useState(56);
  const [rightMargin, setRightMargin] = React.useState(56);
  const [isDraggingLeft, setIsDraggingLeft] = React.useState(false);
  const [isDraggingRight, setIsDraggingRight] = React.useState(false);
  const rulerRef = useRef<HTMLDivElement>(null);

  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true);
  };

  const handleRightMouseDown = () => {
    setIsDraggingRight(true);
  };

  // const updateEditor = useCallback(() => {
  //   const options = editor?.options;
  //   console.log(options);

  //   const currentOptions = editor?.options.editorProps;
  //   editor?.setOptions({
  //     editorProps: {
  //       attributes: {
  //         ...currentOptions?.attributes,
  //         style: `padding-left: ${leftMargin}px; padding-right: ${rightMargin}px;`,
  //       },
  //     },
  //   });
  // }, [leftMargin, rightMargin, editor]);

  // useEffect(() => {
  //   updateEditor();
  // }, [updateEditor]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const PAGE_WIDTH = 816;
    const MINIMUM_SPACE = 100;
    if ((isDraggingLeft || isDraggingRight) && rulerRef.current) {
      const container = rulerRef.current.querySelector('#ruler-container');
      if (container) {
        const { left } = container.getBoundingClientRect();
        const relativeX = e.clientX - left;
        const rawPosition = Math.max(0, Math.min(PAGE_WIDTH, relativeX));
        if (isDraggingLeft) {
          const maxLeftPosition = PAGE_WIDTH - rightMargin - MINIMUM_SPACE;
          const newPosition = Math.min(rawPosition, maxLeftPosition);
          setLeftMargin(newPosition);
        } else if (isDraggingRight) {
          const maxRightPosition = PAGE_WIDTH - (leftMargin + MINIMUM_SPACE);
          const newPosition = Math.max(PAGE_WIDTH - rawPosition, 0);
          const constainedRightPosition = Math.min(newPosition, maxRightPosition);
          setRightMargin(constainedRightPosition);
        }
      }
    }
  };

  const handleMouseUp = () => {
    setIsDraggingLeft(false);
    setIsDraggingRight(false);
  };

  const handleLeftDoubleClick = () => {
    setLeftMargin(56);
  };

  const handleRightDoubleClick = () => {
    setRightMargin(56);
  };

  const markers = Array.from({ length: 83 }, (_, i) => i);

  return (
    <div
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className='w-[816px] mx-auto h-6 border-b border-gray-300 flex items-end relative select-none print:hidden'
    >
      <div id='ruler-container' className=' w-full h-full relative'>
        <Marker
          position={leftMargin}
          isLeft
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <Marker
          position={rightMargin}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className='absolute inset-x-0 bottom-0 h-full'>
          <div className='relative h-full w-[816px]'>
            {markers.map((marker) => {
              const position = (marker * 816) / 82;
              return (
                <div
                  key={marker}
                  className='absolute bottom-0'
                  style={{ left: `${position}px` }}
                >
                  {marker % 10 === 0 && (
                    <>
                      <div className='absolute bottom-0 w-[1px] h-2 bg-neutral-500'></div>
                      <span className='absolute bottom-2 text-[10px] text-neutral-500 transform -translate-x-1/2'>
                        {marker / 10 + 1}
                      </span>
                    </>
                  )}
                  {marker % 5 === 0 && marker % 10 !== 0 && (
                    <div className='absolute bottom-0 w-[1px] h-1.5 bg-neutral-500'></div>
                  )}
                  {marker % 5 != 0 && (
                    <div className='absolute bottom-0 w-[1px] h-1 bg-neutral-500'></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ruler;
