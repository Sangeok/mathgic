import { useEffect, useState, useRef } from "react";

export default function TimeText() {
  const [seanarioNumber, setSeanarioNumber] = useState<number>(1);
  const [fadeIn, setFadeIn] = useState<boolean>(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const seanario = () => {
    const baseClasses =
      "absolute text-white text-xl font-bold top-1/2 transform -translate-y-1/2 ml-14 transition-opacity duration-1000";
    const opacityClass = fadeIn ? "opacity-100" : "opacity-0";

    switch (seanarioNumber) {
      case 1:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            1장을 머리속으로 선택하시오.
          </div>
        );
      case 2:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            그 숫자에 2를 곱하시오.
          </div>
        );
      case 3:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            결과에 6을 더하시오.
          </div>
        );
      case 4:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            그 숫자를 2로 나누시오.
          </div>
        );
      case 5:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            마지막으로, 처음에 선택한 숫자를 빼시오.
          </div>
        );
      default:
        return (
          <div className={`${baseClasses} ${opacityClass}`}>
            우측 상단 카드의 숫자와 일치합니까?
          </div>
        );
    }
  };

  // 타이머 시작 함수
  const startTimer = () => {
    // 이전 타이머가 있으면 제거
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // seanarioNumber가 6(default)가 아닐 때만 타이머 설정
    if (seanarioNumber < 6) {
      timerRef.current = setInterval(() => {
        // 먼저 텍스트를 fade-out
        setFadeIn(false);

        // 0.5초 후에 시나리오 번호를 변경하고 fade-in
        setTimeout(() => {
          setSeanarioNumber((prev) => {
            const nextNumber = prev + 1;
            return nextNumber;
          });
          setFadeIn(true);
        }, 500);
      }, 7000);
    }
  };

  useEffect(() => {
    // 컴포넌트 마운트 시 타이머 시작
    startTimer();

    return () => {
      // 컴포넌트 언마운트 시 타이머 정리
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // seanarioNumber가 변경될 때마다 타이머 재설정
  useEffect(() => {
    // 새로운 시나리오 번호에 따라 타이머 재설정
    startTimer();

    // seanarioNumber가 6(default)이면 타이머 중지
    if (seanarioNumber === 6) {
      console.log("마지막 시나리오에 도달했습니다. 타이머를 중지합니다.");
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
  }, [seanarioNumber]);

  return <>{seanario()}</>;
}
