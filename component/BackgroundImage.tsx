"use client";

import { useState } from "react";

interface GrowingImageProps {
  src: string;
  growthRate?: number;
  transitionDuration?: number;
}

export default function BackgroundImage({ src, growthRate = 0.2, transitionDuration = 0.3 }: GrowingImageProps) {
  const [scale, setScale] = useState(1);

  //   const handleClick = () => {
  //     setScale((prevScale) => prevScale + growthRate);
  //   };

  return (
    // <div
    //   style={{
    //     width: "100vw",
    //     height: "100vh",
    //     overflow: "hidden",
    //     position: "relative",
    //   }}
    // >
    <img
      src={src}
      // onClick={handleClick}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
      }}
      alt="Growing Image"
    />
    // </div>
  );
}
