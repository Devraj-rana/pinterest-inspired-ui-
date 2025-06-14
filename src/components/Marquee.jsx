"use client";

import React, { useEffect, useRef } from "react";

const Marquee = () => {
  const items = [
    "App Design",
    "❋",
    "Website Design",
    "❋",
    "Dashboard",
    "❋",
    "Wireframe",
    "❋",
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeEl = marqueeRef.current;
    if (!marqueeEl) return;

    // Calculate the width of one set of items
    const firstChild = marqueeEl.firstElementChild;
    if (firstChild) {
      const itemWidth = firstChild.scrollWidth;
      marqueeEl.style.setProperty("--marquee-width", `${itemWidth}px`);
    }
  }, []);

  return (
    <>
      <style>{`
        .marquee-container {
          --marquee-width: 100%;
          --marquee-duration: 8s; /* Faster speed - was 20s */
        }
        
        .marquee-content {
          display: flex;
          animation: marquee var(--marquee-duration) linear infinite;
          width: max-content;
        }
        
        .marquee-item {
          display: flex;
          align-items: center;
          white-space: nowrap;
          flex-shrink: 0;
        }
        
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-1 * var(--marquee-width)));
          }
        }
        
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>

      <div className="bg-yellow-400 overflow-hidden py-3 sm:py-4 md:py-6 mt-6 sm:mt-8 md:mt-10 relative marquee-container">
        <div ref={marqueeRef} className="marquee-content">
          {/* First set of items */}
          <div className="marquee-item flex space-x-6 text-green-900 font-bold pr-6">
            {items.map((item, index) => (
              <span
                key={`first-${index}`}
                className={`${
                  item === "❋" ? "text-black" : "text-green-900"
                } text-xl md:text-2xl lg:text-3xl`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Second set of items for seamless loop */}
          <div className="marquee-item flex space-x-6 text-green-900 font-bold pr-6">
            {items.map((item, index) => (
              <span
                key={`second-${index}`}
                className={`${
                  item === "❋" ? "text-black" : "text-green-900"
                } text-xl md:text-2xl lg:text-3xl`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* Third set for extra smoothness */}
          <div className="marquee-item flex space-x-6 text-green-900 font-bold pr-6">
            {items.map((item, index) => (
              <span
                key={`third-${index}`}
                className={`${
                  item === "❋" ? "text-black" : "text-green-900"
                } text-xl md:text-2xl lg:text-3xl`}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Marquee;
