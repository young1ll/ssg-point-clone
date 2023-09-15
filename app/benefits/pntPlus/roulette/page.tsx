// import LoginRedirector from "@/components/atom/LoginRedirector";
import ShareButton from "@/components/atom/ShareButton";
import RouletteStart from "@/components/organisam/RouletteStart";
import Image from "next/image";

export default function RoulettePage() {
  return (
    <>
      {/* <LoginRedirector /> */}
      <div>
        <div className="relative w-full min-h-[83vw]">
          <ShareButton color="black" />
          <Image
            src={
              "https://storage.googleapis.com/ssg-images/pntPlus/roulette_banner_202309.jpg"
            }
            fill
            alt=""
          />
        </div>
        <div>
          <div className="relative w-full min-h-[85vw]">
            <Image
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/roulette_body_01.jpg"
              }
              fill
              alt=""
            />
            <Image
              className="px-10 pt-2 pb-5"
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/roulette_point_pannel.png"
              }
              fill
              alt=""
            />
            <RouletteStart />
          </div>
          <div className="relative w-full min-h-[280vw]">
            <Image
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/roulette_body_02.jpg"
              }
              fill
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
