import { useEffect } from "react";

export default function useMousePosition() {
  useEffect(() => {
    const move = (e) => {
      window.dispatchEvent(
        new CustomEvent("galaxy-move", {
          detail: { x: e.clientX, y: e.clientY }
        })
      );
    };

    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);
}
