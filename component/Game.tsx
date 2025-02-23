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
    <div className="relative w-full h-screen">
      {/* 우측 상단의 카드 */}
      <div className="absolute top-0 right-0 translate-x-[-4rem] translate-y-[4rem] scale-50">
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

        <div className="relative">
          <TrumpCard cardNumber={3} />
        </div>
      </div>

      {/* 중앙에 위치한 카드들 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="grid grid-cols-3 gap-16 opacity-0 transition-opacity duration-1000"
          style={{ opacity: isInitialPosition ? 0 : 1 }}
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index}>
              <TrumpCard size="md" cardNumber={index + 1} initFlipped={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
