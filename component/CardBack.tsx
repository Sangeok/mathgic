"use client";

const CardBack = () => {
  return (
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
              {Array.from({ length: 150 }).map((_, i) => (
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
  );
};

export default CardBack;
