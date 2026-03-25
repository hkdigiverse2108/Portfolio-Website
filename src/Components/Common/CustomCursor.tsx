import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const outline = useRef({ x: 0, y: 0 });

  useEffect(() => {
    let animateId: number;

    const moveCursor = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouse.current.x}px`;
        dotRef.current.style.top = `${mouse.current.y}px`;
        dotRef.current.style.visibility = "visible";
      }
      if (outlineRef.current) {
        outlineRef.current.style.visibility = "visible";
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest("a") || target.closest("button") || target.closest(".theme-btn") || target.closest(".cursor-pointer"))) {
        dotRef.current?.classList.add("cursor-hover");
        outlineRef.current?.classList.add("cursor-hover");
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.closest("a") || target.closest("button") || target.closest(".theme-btn") || target.closest(".cursor-pointer"))) {
        dotRef.current?.classList.remove("cursor-hover");
        outlineRef.current?.classList.remove("cursor-hover");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      outline.current.x += (mouse.current.x - outline.current.x) * 0.1;
      outline.current.y += (mouse.current.y - outline.current.y) * 0.1;

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outline.current.x}px`;
        outlineRef.current.style.top = `${outline.current.y}px`;
      }

      animateId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(animateId);
    };
  }, []);

  return (
    <>
      <div 
        ref={outlineRef} 
        className="mouse-cursor cursor-outer"
      ></div>
      <div 
        ref={dotRef} 
        className="mouse-cursor cursor-inner"
        style={{ marginLeft: '-3px', marginTop: '-3px' }} // Center the 6px dot
      ></div>
    </>
  );
};

export default CustomCursor;