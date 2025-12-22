"use client";

interface CardEffectProps {
  show: boolean;
}

const CardEffect = ({ show }: CardEffectProps) => {
  if (!show) return null;

  return (
    <div
      className="absolute inset-[-1.5rem] rounded-xl bg-gradient-radial from-purple-950/90 via-black/95 to-black/80 animate-gradient backdrop-blur-sm pointer-events-none"
      style={{ pointerEvents: "none" }}
    >
      {/* 빛나는 효과 */}
      <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse pointer-events-none" />
      </div>
      {/* 그림자 효과 */}
      <div className="absolute inset-0 rounded-xl shadow-glow pointer-events-none" />
    </div>
  );
};

export default CardEffect;
