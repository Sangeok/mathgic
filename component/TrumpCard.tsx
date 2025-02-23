"use client";

import React, { useState } from "react";

interface TrumpCardProps {
  size?: "sm" | "md" | "lg";
  cardNumber?: number;
  initFlipped?: boolean;
}

const TrumpCard = ({ size = "lg", cardNumber, initFlipped = true }: TrumpCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(initFlipped);
  const [flipDirection, setFlipDirection] = useState<string>("right"); // 'left' 또는 'right'

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // 카드 엘리먼트의 경계를 가져옵니다
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    // 클릭 위치가 카드의 왼쪽/오른쪽 절반 중 어디인지 확인
    const clickX = e.clientX - rect.left;
    const cardMiddle = rect.width / 2;

    // 클릭 위치에 따라 방향 설정
    setFlipDirection(clickX < cardMiddle ? "left" : "right");
    setIsFlipped(!isFlipped);
  };

  const sizeClasses = {
    sm: "w-20 h-28",
    md: "w-32 h-44",
    lg: "w-52 h-72",
  };

  return (
    <div className={`${sizeClasses[size]}`} style={{ perspective: "1000px" }} onClick={handleClick}>
      <div
        className="relative w-full h-full transition-all duration-1000"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? `rotateY(${flipDirection === "left" ? "-180deg" : "180deg"})` : "rotateY(0deg)",
        }}
      >
        {/* 앞면 */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* 카드 상단 숫자/문양 */}
          <div className="absolute top-2 left-2 text-2xl font-bold text-red-600">{cardNumber}♥</div>

          {/* 중앙 하트 패턴 */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-1 gap-12 p-6">
              <span className="text-6xl text-red-600">♥</span>
              <span className="text-6xl text-red-600">♥</span>
              <span className="text-6xl text-red-600">♥</span>
            </div>
          </div>

          {/* 카드 하단 숫자/문양 (180도 회전) */}
          <div className="absolute bottom-2 right-2 text-2xl font-bold text-red-600 rotate-180">{cardNumber}♥</div>
        </div>

        {/* 뒷면 */}
        <div
          className="absolute w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          {/* 카드 뒷면 패턴 */}
          <div className="w-full h-full bg-red-700">
            {/* 테두리 */}
            <div className="absolute inset-3 border-4 border-white rounded-md">
              {/* 내부 패턴 */}
              <div className="absolute inset-2">
                <div className="w-full h-full grid grid-cols-10 grid-rows-15 gap-0.5">
                  {[...Array(150)].map((_, i) => (
                    <div key={i} className="relative">
                      {/* 다이아몬드 패턴 */}
                      <div className="absolute inset-0 bg-red-800">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white/20 rotate-45"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrumpCard;
