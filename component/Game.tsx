"use client";

import { useEffect, useState } from "react";
import TrumpCard from "./TrumpCard";
import CardEffect from "./CardEffect";
import CardFace from "./CardFace";
import CardBack from "./CardBack";
import "../css/Game.css";

const ANIMATION_DELAY = 1000;
const CARD_COUNT = 9;

export default function Game() {
  // 중앙에 있을 때 true, 오른쪽 상단에 있을 때 false
  const [isInitialPosition, setIsInitialPosition] = useState<boolean>(true);
  const [isMainCardFlipped, setIsMainCardFlipped] = useState<boolean>(true);
  const [mainCardFlipDirection, setMainCardFlipDirection] =
    useState<string>("right");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialPosition(false);
    }, ANIMATION_DELAY);

    return () => clearTimeout(timer);
  }, []);

  // 메인 카드 클릭 핸들러
  const handleMainCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();

    // 카드 클릭 위치에 따라 회전 방향 결정
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const cardMiddle = rect.width / 2;

    setMainCardFlipDirection(clickX < cardMiddle ? "left" : "right");
    setIsMainCardFlipped(!isMainCardFlipped);

    console.log(
      "메인 카드 클릭됨:",
      !isMainCardFlipped ? "뒷면으로" : "앞면으로"
    );
  };

  // 중앙에 배치할 카드
  const renderCenterCards = () => (
    <div
      className="grid grid-cols-3 gap-16 opacity-0 transition-opacity duration-1000"
      style={{ opacity: isInitialPosition ? 0 : 1 }}
    >
      {Array.from({ length: CARD_COUNT }).map((_, index) => (
        <div key={index} className="pointer-events-auto">
          <TrumpCard size="md" cardNumber={index + 1} initFlipped={false} />
        </div>
      ))}
    </div>
  );

  // 오른쪽 상단에 배치할 메인 카드
  const renderMainCard = () => (
    <div className="relative m-10" onClick={handleMainCardClick}>
      {/* 배경 효과 */}
      {!isInitialPosition && (
        <div className="absolute inset-[-1.5rem] z-0 pointer-events-none">
          <CardEffect show={true} />
        </div>
      )}

      {/* 카드 컨테이너 */}
      <div
        className="w-52 h-72 cursor-pointer"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative w-full h-full transition-all duration-1000"
          style={{
            transformStyle: "preserve-3d",
            transform: isMainCardFlipped
              ? `rotateY(${
                  mainCardFlipDirection === "left" ? "-180deg" : "180deg"
                })`
              : "rotateY(0deg)",
          }}
        >
          {/* 카드 앞면 */}
          <CardFace cardNumber={3} size="lg" />

          {/* 카드 뒷면 */}
          <CardBack />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full h-screen">
      {/* 우측 상단의 카드 */}
      <div
        className="fixed top-5 right-5 z-50"
        style={{ transform: "scale(0.5)", transformOrigin: "top right" }}
      >
        {renderMainCard()}
      </div>

      {/* 중앙에 위치한 카드들 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
        {renderCenterCards()}
      </div>
    </div>
  );
}
