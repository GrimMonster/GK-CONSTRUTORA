import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine touch/cursor (hide on touch screens)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    setIsVisible(true);

    const cursorDot = document.getElementById('custom-cursor-dot');
    const cursorRing = document.getElementById('custom-cursor-ring');

    if (!cursorDot || !cursorRing) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      gsap.to(cursorDot, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out',
      });

      gsap.to(cursorRing, {
        x: clientX,
        y: clientY,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const onMouseEnterInteractive = () => setIsHovered(true);
    const onMouseLeaveInteractive = () => setIsHovered(false);

    window.addEventListener('mousemove', onMouseMove);

    const interactiveElements = document.querySelectorAll(
      'a, button, input, select, textarea, [role="button"], .interactive-cursor'
    );

    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive);
      el.addEventListener('mouseleave', onMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive);
        el.removeEventListener('mouseleave', onMouseLeaveInteractive);
      });
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Inner Dot */}
      <div
        id="custom-cursor-dot"
        className={`fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full transition-transform duration-150 ${
          isHovered ? 'bg-[#D4AF37] scale-[2.5]' : 'bg-[#D4AF37]'
        }`}
        style={{ pointerEvents: 'none' }}
      />
      {/* Outer Ring */}
      <div
        id="custom-cursor-ring"
        className={`fixed top-0 left-0 -ml-5 -mt-5 rounded-full border border-[#D4AF37]/50 transition-all duration-300 ${
          isHovered
            ? 'w-10 h-10 bg-[#D4AF37]/10 border-[#D4AF37] scale-125'
            : 'w-10 h-10 bg-transparent'
        }`}
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};
