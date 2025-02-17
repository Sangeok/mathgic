"use client";

import { useRouter } from "next/navigation";
import Button from "./atom/button";

export default function Main() {
  const router = useRouter();

  return (
    <div className="flex flex-col w-full h-screen justify-center items-center gap-4">
      <div className="text-2xl font-bold animate-fade-in">
        나는 결말을 알고 있다.
      </div>
      <div className="flex flex-col gap-4 animate-fade-in">
        <Button onClick={() => router.push("/game")} content="Get Started..." />
      </div>
    </div>
  );
}
