"use client";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function SharinganEye() {
  const [hovered, setHovered] = useState(false);
  const hoverSound = useRef(null);

  const handleUserInteraction = () => {
    if (hoverSound.current) {
      hoverSound.current.play().catch((e) => {
        toast.info("Allow sound for better experience.");
        console.warn("Autoplay blocked:", e);
      });
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (hoverSound.current) {
      hoverSound.current.currentTime = 0;
      hoverSound.current.play().catch((err) => {
        console.warn("Audio play blocked:", err.message);
        toast.info("Allow sound for better experience.");
      });
    }
  };

  return (
    <div
      className="relative w-full flex items-center justify-center aspect-square"
      onMouseEnter={handleMouseEnter}
      onClick={handleMouseEnter}
      onMouseLeave={() => setHovered(false)}
      onPointerDown={handleUserInteraction}
    >
      {/* Sound */}
      <audio ref={hoverSound} src="/sharingan.mp3" preload="auto" />

      {/* Gradient BG always behind */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-2xl opacity-30 animate-pulse z-0 pointer-events-none" />

      {/* Eye container */}
      <div className="relative w-[80vw] max-w-[300px] aspect-square z-10">
        {/* Regular Sharingan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          className={`absolute top-0 left-0 w-full h-full origin-center transition-all duration-700 ease-in-out
            ${hovered ? "opacity-0 rotate-[180deg]" : "opacity-100 rotate-0"}`}
          style={{ transformOrigin: "center center" }}
        >
          <defs>
            <radialGradient id="gr">
              <stop offset="0" stopColor="#660000" />
              <stop offset="0.6" stopColor="#c30000" />
              <stop offset="1" stopColor="#a00000" />
            </radialGradient>
          </defs>
          <circle fill="url(#gr)" stroke="#000" strokeWidth="10" cx="150" cy="150" r="145" />
          <circle fill="none" stroke="#000000" strokeWidth="4" strokeOpacity="0.3" cx="150" cy="150" r="90" />
          <g id="tomoe1">
            <circle fill="#000" cx="60" cy="150" r="20" />
            <path fill="#000" d="M 60,170 59.4,152.9 C 43.9,152.9 28.7,154.1 18.8,133.3 22.4,156 32.8,170 60,170 z" />
          </g>
          <use href="#tomoe1" transform="rotate(120 150 150)" />
          <use href="#tomoe1" transform="rotate(-120 150 150)" />
          <circle fill="#000" cx="150" cy="150" r="25" />
        </svg>

        {/* Mangekyo Sharingan */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          className={`absolute top-0 left-0 w-full h-full origin-center transition-all duration-700 ease-in-out
            ${hovered ? "opacity-100 rotate-0" : "opacity-0 rotate-[-180deg]"}`}
          style={{ transformOrigin: "center center" }}
        >
          <defs>
            <radialGradient
              id="radialGradient3473"
              cx="375"
              cy="412.36218"
              fx="375"
              fy="412.36218"
              r="167.5"
              gradientUnits="userSpaceOnUse"
              gradientTransform="matrix(1.1991511,0.2396988,-0.1982045,0.9692312,7.050359,-77.199183)"
            >
              <stop offset="0" stopColor="#660000" />
              <stop offset="0.5" stopColor="#c30000" />
              <stop offset="1" stopColor="#a00000" />
            </radialGradient>
          </defs>

          <path
            d="M 540,412.36218 A 165,163.1311 0 1 1 210,412.36218 A 165,163.1311 0 1 1 540,412.36218 z"
            transform="matrix(0.8793332,0,0,0.8894069,-179.74995,-216.75781)"
            style={{
              fill: "url(#radialGradient3473)",
              stroke: "#000",
              strokeWidth: 11.1,
              strokeLinecap: "butt",
              strokeLinejoin: "bevel",
              fillRule: "evenodd",
              opacity: 1,
            }}
          />
          <path
            d="M 177.62769,10.704975 C 135.03922,68.442439 155.40948,100.70787 179.78617,118.50066 C 260.85717,160.61819 274.77221,214.50698 255.8724,244.85348 C 237.33258,191.92823 197.99729,172.38677 158.47123,194.91269 C 86.88183,238.57673 40.654506,231.20841 15.742112,196.55005 C 58.192111,203.09969 109.06405,193.45459 107.94944,128.32502 C 109.45589,97.596975 111.53067,16.603725 177.62769,10.704975 z"
            fill="#000"
          />
          <circle
            cx="150"
            cy="150"
            r="20"
            fill="#a00000"
            stroke="#000"
            strokeWidth="0"
            opacity="1"
          />
        </svg>
      </div>
    </div>
  );
}
