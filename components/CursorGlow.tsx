"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const mainRef = useRef<HTMLDivElement>(null);
  const s1Ref = useRef<HTMLDivElement>(null);
  const s2Ref = useRef<HTMLDivElement>(null);
  const s3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const main = mainRef.current;
    const s1 = s1Ref.current;
    const s2 = s2Ref.current;
    const s3 = s3Ref.current;
    if (!main || !s1 || !s2 || !s3) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let mainX = mx, mainY = my;
    let s1X = mx, s1Y = my;
    let s2X = mx, s2Y = my;
    let s3X = mx, s3Y = my;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      // Main follows cursor directly
      mainX += (mx - mainX) * 0.14;
      mainY += (my - mainY) * 0.14;

      // Satellites daisy-chain off the main blob at different speeds
      // → creates trailing droplets that merge/split via goo filter
      s1X += (mainX - s1X) * 0.09;
      s1Y += (mainY - s1Y) * 0.09;

      s2X += (s1X - s2X) * 0.07;
      s2Y += (s1Y - s2Y) * 0.07;

      s3X += (mx - s3X) * 0.05;
      s3Y += (my - s3Y) * 0.05;

      main.style.transform = `translate(${mainX}px, ${mainY}px) translate(-50%, -50%)`;
      s1.style.transform = `translate(${s1X}px, ${s1Y}px) translate(-50%, -50%)`;
      s2.style.transform = `translate(${s2X}px, ${s2Y}px) translate(-50%, -50%)`;
      s3.style.transform = `translate(${s3X}px, ${s3Y}px) translate(-50%, -50%)`;

      raf = requestAnimationFrame(tick);
    };

    document.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* SVG goo filter: heavy blur + sharp alpha cutoff = metaball effect */}
      <svg
        width="0"
        height="0"
        style={{ position: "absolute", pointerEvents: "none" }}
        aria-hidden="true"
      >
        <defs>
          <filter id="slime-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 22 -11"
            />
          </filter>
        </defs>
      </svg>

      <div className="slime-container" aria-hidden="true">
        <div ref={mainRef} className="slime slime-main" />
        <div ref={s1Ref} className="slime slime-s1" />
        <div ref={s2Ref} className="slime slime-s2" />
        <div ref={s3Ref} className="slime slime-s3" />
      </div>
    </>
  );
}
