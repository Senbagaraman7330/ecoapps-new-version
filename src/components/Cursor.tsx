import { useEffect, useRef } from 'react';

interface CursorProps {
  isHovered: boolean;
}

export default function Cursor({ isHovered }: CursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = -9999;
    let my = -9999;
    let cx = -9999;
    let cy = -9999;
    let cursorRafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animateCursor = () => {
      cx += (mx - cx) * 0.18;
      cy += (my - cy) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cx}px`;
        cursorRef.current.style.top = `${cy}px`;
      }
      cursorRafId = requestAnimationFrame(animateCursor);
    };
    cursorRafId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(cursorRafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-[width,height,background-color] duration-300 ease-out will-change-[transform,left,top] hidden md:block ${
        isHovered
          ? 'w-11 h-11 bg-sky-400/20 border-[1.5px] border-sky-400 backdrop-blur-[2px]'
          : 'w-3.5 h-3.5 bg-blue-700 shadow-[0_0_10px_rgba(37,99,235,0.4)]'
      }`}
      aria-hidden="true"
    />
  );
}
