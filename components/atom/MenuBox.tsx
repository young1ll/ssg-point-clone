"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Image from "next/image";

export default function MenuBox() {
  const { appValueList, handleAppRecord } = useAppContext();

  const handleMenu = () => {
    handleAppRecord("sidebar", !appValueList["sidebar"]);
  };

  return (
    <>
      <button
        className="absolute right-[2px] top-[2px] w-[56px] h-[52px]"
        onClick={handleMenu}
      >
        <Image
          className="absolute left-[35%] top-[35%] mt-[-1px]"
          src="/images/icon_menu.png"
          height={20}
          width={20}
          alt="전체메뉴"
          quality={100}
          sizes="(max-width: 22px)"
        />
      </button>
    </>
  );
}
