import Paper from "@/components/atom/Paper";
import PointCard from "@/components/module/PointCard";
import dynamic from "next/dynamic";
import Image from "next/image";
const PointHistoryList = dynamic(
  () => import("@/components/organisam/PointHistoryList"),
  { ssr: false }
);

export default function PntHistoryPage() {
  const linkRightArrow =
    "before:absolute before:right-0 before:top-1/2 before:w-[6px] before:h-[10px] before:mt-[-4.5px] before:bg-[url('/images/arrow_left.png')] before:bg-[100%_auto] before:rotate-180 before:opacity-40";

  return (
    <>
      <div className="mt-[36px]">
        <PointCard type="simple" />
      </div>
      <Paper className="flex justify-center " bgColor="bg-[#fcebf1]">
        <div className="flex gap-x-2 w-[308px] py-4">
          <Image
            className="my-auto"
            src={"/images/resources/myPoint/icon_history.png"}
            width={40}
            height={40}
            alt=""
          />
          <div className="relative flex flex-col">
            <p className="text-[13px] text-mypoint font-medium">
              내가 어디서 뭘 샀더라
            </p>
            <button className={`relative text-xs pr-3 ${linkRightArrow}`}>
              신세계포인트 영수증 한 번에 모아보기
            </button>
          </div>
        </div>
      </Paper>

      {/* --- Point History List --- */}
      <PointHistoryList />
    </>
  );
}
