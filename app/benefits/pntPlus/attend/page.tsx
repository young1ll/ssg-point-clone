
import ShareButton from "@/components/atom/ShareButton";
import AttendCheck from "@/components/organisam/AttendCheck";
import Image from "next/image";

export default function AttendPage() {
  return (
    <>
      {/* <LoginRedirector /> */}
      <div className="relative">
        <ShareButton />
        <div>
          <div className="relative w-full min-h-[110vw]">
            <Image
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/attend_banner_202309.jpg"
              }
              fill
              alt=""
            />
          </div>
          {/* Banner */}
          <AttendCheck />
          <div className="relative w-full min-h-[110vw]">
            <Image
              src={
                "https://storage.googleapis.com/ssg-images/pntPlus/attend_infobottom.jpg"
              }
              fill
              alt=""
            />
          </div>
        </div>
        {/* Body */}
      </div>
      {/* 전체 */}
    </>
  );
}
