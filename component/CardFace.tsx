"use client";

interface CardFaceProps {
  cardNumber: number;
  size: "sm" | "md" | "lg";
}

const CardFace = ({ cardNumber, size }: CardFaceProps) => {
  // 카드 숫자에 따라 하트 개수 조정
  const hearts = Array.from({ length: cardNumber }, (_, i) => (
    <span
      key={i}
      className={`text-red-600 ${
        size === "sm" ? "text-2xl" : size === "md" ? "text-4xl" : "text-6xl"
      }`}
    >
      ♥
    </span>
  ));

  // 숫자 표시 크기
  const numberSize =
    size === "sm" ? "text-base" : size === "md" ? "text-xl" : "text-2xl";

  return (
    <div
      className="absolute w-full h-full bg-white rounded-lg shadow-xl overflow-hidden border-2 border-gray-200"
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* 카드 상단 숫자/문양 */}
      <div
        className={`absolute top-2 left-2 ${numberSize} font-bold text-red-600`}
      >
        {cardNumber}♥
      </div>

      {/* 중앙 하트 패턴 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-6 p-4">{hearts}</div>
      </div>

      {/* 카드 하단 숫자/문양 (180도 회전) */}
      <div
        className={`absolute bottom-2 right-2 ${numberSize} font-bold text-red-600 rotate-180`}
      >
        {cardNumber}♥
      </div>
    </div>
  );
};

export default CardFace;
