"use client";

import { useEffect, useState } from "react";
import TrumpCard from "./TrumpCard";
import "../css/Game.css";

export default function Game() {
  const [isInitialPosition, setIsInitialPosition] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialPosition(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
      {/* 가장 상단의 카드 */}
      <div
        className={`transition-all duration-1000 ease-in-out relative ${
          isInitialPosition
            ? "transform-none"
            : "transform translate-x-[calc(50vw-10rem)] -translate-y-[calc(50vh-12rem)] scale-50"
        }`}
      >
        {!isInitialPosition && (
          <>
            {/* 배경 효과 */}
            <div className="absolute inset-[-1.5rem] rounded-xl bg-gradient-radial from-purple-950/90 via-black/95 to-black/80 animate-gradient backdrop-blur-sm">
              {/* 빛나는 효과 */}
              <div className="absolute inset-0 overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse" />
              </div>
              {/* 그림자 효과 */}
              <div className="absolute inset-0 rounded-xl shadow-glow" />
            </div>
          </>
        )}

        {/* 카드 */}
        <div className="relative">
          <TrumpCard />
        </div>
      </div>

      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="flex w-10 h-10">
          <TrumpCard />
        </div>
      ))}
    </div>
  );
}
