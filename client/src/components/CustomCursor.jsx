import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const innerCursor = useRef(null);
  const outerCursor = useRef(null);

  const mouse = useRef({ x: 0, y: 0 });
  const innerPos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const render = () => {
      innerPos.current.x += (mouse.current.x - innerPos.current.x) * 0.35;
      innerPos.current.y += (mouse.current.y - innerPos.current.y) * 0.35;

      outerPos.current.x += (mouse.current.x - outerPos.current.x) * 0.1;
      outerPos.current.y += (mouse.current.y - outerPos.current.y) * 0.1;

      if (innerCursor.current)
        innerCursor.current.style.transform = `translate3d(${
          innerPos.current.x - 4
        }px, ${innerPos.current.y - 4}px, 0)`;

      if (outerCursor.current)
        outerCursor.current.style.transform = `translate3d(${
          outerPos.current.x - 20
        }px, ${outerPos.current.y - 20}px, 0)`;

      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(render);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const grow = () => {
      if (outerCursor.current) {
        outerCursor.current.style.transform += " scale(1.5)";
      }
    };
    const shrink = () => {
      if (outerCursor.current) {
        outerCursor.current.style.transform = outerCursor.current.style.transform.replace(
          " scale(1.5)",
          ""
        );
      }
    };

    const elements = document.querySelectorAll("a, button");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={outerCursor}
        className="fixed top-0 left-0 w-10 h-10 border-2 border-teal-400 rounded-full pointer-events-none z-[9999] will-change-transform transition-all duration-200 ease-out"
      />

      <div
        ref={innerCursor}
        className="fixed top-0 left-0 w-2 h-2 bg-teal-400 rounded-full pointer-events-none z-[10000] will-change-transform"
      />
    </>
  );
};

export default CustomCursor;
