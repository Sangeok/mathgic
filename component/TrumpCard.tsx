"use client";

import React, { useState, useEffect } from "react";
import CardFace from "./CardFace";
import CardBack from "./CardBack";

interface TrumpCardProps {
  size?: "sm" | "md" | "lg";
  cardNumber?: number;
  initFlipped?: boolean;
}

const TrumpCard = ({
  size = "lg",
  cardNumber = 3,
  initFlipped = true,
}: TrumpCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(initFlipped);
  const [flipDirection, setFlipDirection] = useState<string>("right");

  // 초기 상태 업데이트 - 외부에서 initFlipped가 변경되면 반영
  useEffect(() => {
    setIsFlipped(initFlipped);
  }, [initFlipped]);

  // 카드 크기에 따른 클래스
  const sizeClasses = {
    sm: "w-20 h-28",
    md: "w-32 h-44",
    lg: "w-52 h-72",
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation(); // 이벤트 버블링 방지

    // 카드 클릭 위치에 따라 회전 방향 결정
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const cardMiddle = rect.width / 2;

    setFlipDirection(clickX < cardMiddle ? "left" : "right");
    setIsFlipped(!isFlipped);

    console.log("카드 클릭됨:", isFlipped ? "앞면으로" : "뒷면으로"); // 디버깅용
  };

  return (
    <div
      className={`${sizeClasses[size]} cursor-pointer`}
      style={{ perspective: "1000px" }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-full transition-all duration-1000"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped
            ? `rotateY(${flipDirection === "left" ? "-180deg" : "180deg"})`
            : "rotateY(0deg)",
        }}
      >
        {/* 카드 앞면 */}
        <CardFace cardNumber={cardNumber} size={size} />

        {/* 카드 뒷면 */}
        <CardBack />
      </div>
    </div>
  );
};

export default TrumpCard;
