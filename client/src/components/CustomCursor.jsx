import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const isTouchDevice = () =>
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0);

  if (isTouchDevice()) return null;

  const innerCursor = useRef(null);
  const outerCursor = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const innerPos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  const outerScale = useRef(1);
  const innerEase = 0.25;
  const outerEase = 0.12;

  useEffect(() => {
    let ticking = false;

    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    };

    const animate = () => {
      innerPos.current.x += (mouse.current.x - innerPos.current.x) * innerEase;
      innerPos.current.y += (mouse.current.y - innerPos.current.y) * innerEase;

      outerPos.current.x += (mouse.current.x - outerPos.current.x) * outerEase;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * outerEase;

      if (innerCursor.current)
        innerCursor.current.style.transform = `translate3d(${innerPos.current.x - 4}px, ${
          innerPos.current.y - 4
        }px, 0) scale(1)`;

      if (outerCursor.current)
        outerCursor.current.style.transform = `translate3d(${outerPos.current.x - 20}px, ${
          outerPos.current.y - 20
        }px, 0) scale(${outerScale.current})`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const grow = () => (outerScale.current = 1.5);
    const shrink = () => (outerScale.current = 1);

    const hoverElements = document.querySelectorAll("a, button, .cursor-focus");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerCursor}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-teal-400 rounded-full pointer-events-none z-[9999] will-change-transform transition-transform duration-150 ease-out"
      />
      <div
        ref={innerCursor}
        className="fixed top-0 left-0 w-2 h-2 bg-teal-400 rounded-full pointer-events-none z-[10000] will-change-transform"
      />
    </>
  );
};

export default CustomCursor;