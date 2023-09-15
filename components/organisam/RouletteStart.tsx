"use client";
import Image from "next/image";

export default function RouletteStart() {
  const handleRoulette = () => {
    alert("hi");
  };
  return (
    <div>
      <Image
        className="px-[42vw] pt-[32vw] pb-[35vw]"
        src={
          "https://storage.googleapis.com/ssg-images/pntPlus/roulette_pannel_start.png"
        }
        fill
        alt=""
        onClick={handleRoulette}
      />
    </div>
  );
}
