"use client";

import { useRouter } from "next/navigation";
import Button from "./atom/button";

export default function Main() {
  let router = useRouter();
  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
      <div className="text-2xl font-bold animate-fade-in">당신이 생각하는 숫자를 맞춰보겠습니다.</div>
      <div className="flex flex-col gap-4 animate-fade-in">
        <Button onClick={() => router.push("/game")} content="Get Started..." />
      </div>
    </div>
  );
}
