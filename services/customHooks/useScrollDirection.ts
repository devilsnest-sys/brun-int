"use client"
import React from "react";

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = React.useState<null | "down" | "up">(null);

  React.useEffect(() => {
    let lastScrollY = document.body.scrollTop; // Use scrollTop for document.body

    const updateScrollDirection = () => {
      const scrollY = document.body.scrollTop;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    document.body.addEventListener("scroll", updateScrollDirection); // Add event listener to body

    return () => {
      document.body.removeEventListener("scroll", updateScrollDirection); // Clean up
    };
  }, [scrollDirection]);

  return scrollDirection;
};