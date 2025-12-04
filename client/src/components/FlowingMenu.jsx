import React, { useEffect, useRef } from "react";

function FlowingMenu({ items }) {
  return (
    <div className="menu-wrap">
      <div className="menu">
        {items.map((item, index) => (
          <MenuItem 
            key={index} 
            text={item.text} 
            image={item.image} 
            direction={index % 2 === 0 ? "ltr" : "rtl"} 
          />
        ))}
      </div>
    </div>
  );
}

function MenuItem({ text, image, direction }) {

  const marqueeRef = useRef(null);
  const wrapperRef = useRef(null);

  const isTouch = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  const activate = () => {
    marqueeRef.current.style.animationPlayState = "running";
    wrapperRef.current.style.opacity = 1;
  };

  const deactivate = () => {
    marqueeRef.current.style.animationPlayState = "paused";
    wrapperRef.current.style.opacity = 0;
  };

  // Desktop hover
  const handleMouseEnter = () => !isTouch && activate();
  const handleMouseLeave = () => !isTouch && deactivate();

  // Mobile scroll activation
  useEffect(() => {
    if (!isTouch) return;

    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting ? activate() : deactivate(),
      { threshold: 0.4 }
    );

    obs.observe(wrapperRef.current);
    return () => obs.disconnect();
  }, [isTouch]);

  return (
    <div 
      className="menu__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="menu__title">{text}</div>

      <div className="marquee-wrapper" ref={wrapperRef}>
        <div 
          className={`marquee ${direction === "rtl" ? "reverse" : ""}`} 
          ref={marqueeRef}
        >
          {[...Array(6)].map((_, i) => (
            <React.Fragment key={i}>
              <span>{text}</span>
              <div className="marquee-img" style={{ backgroundImage: `url(${image})` }} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlowingMenu;