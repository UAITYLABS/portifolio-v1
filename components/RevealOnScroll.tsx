"use client";

import { useEffect } from "react";

export function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en, i) => {
          if (en.isIntersecting) {
            setTimeout(() => en.target.classList.add("visible"), i * 60);
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    els.forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
