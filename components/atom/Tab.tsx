"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Tab({
  className,
  id,
  label,
  activeColor = "black",
  noBg = false,
  urlBased,
  initValue = false,
  children,
  disabled = false,
  checkbox = false,
}: {
  className?: string;
  id: string;
  label: string;
  activeColor?: "black" | "primary" | "spoint" | "benefits" | "cscenter";
  noBg?: boolean;
  initValue?: boolean;
  urlBased?: string;
  children: React.ReactNode;
  disabled?: boolean;
  checkbox?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const pathname = usePathname();

  const handleTab = () => {
    handleAppRecord(id, label);
    
  };

  useEffect(() => {
    if (initValue) {
      if (urlBased) {
        throw new Error("initValue와 urlBased 속성은 함께 사용할 수 없습니다.");
      }
      handleAppRecord(id, label);
    } else if (urlBased) {
      if (initValue)
        throw new Error("initValue와 urlBased 속성은 함께 사용할 수 없습니다.");
      if (pathname == urlBased) {
        handleAppRecord(id, label);
      }
    }
  }, []);

  const selected =
    activeColor == "primary"
      ? "!bg-gradient-primary-line"
      : activeColor == "black"
      ? "!bg-black text-white"
      : activeColor == "spoint"
      ? "bg-[#fff4eb] border-b border-spoint text-spoint rounded-none"
      : activeColor == "benefits"
      ? "bg-[#fff3f8] border-b border-benefits text-benefits rounded-none"
      : activeColor == "cscenter"
      ? "bg-[#f7e8ff] border-b border-cscenter text-cscenter rounded-none"
      : "";

  const checked =
    "before:bg-[url('/images/icon_check.png')] before:bg-no-repeat before:bg-center before:bg-[length:12px_auto] before:bg-black";
  const checkboxArea =
    "hover:cursor-pointer relative block min-h-[22px] pt-[1px] pl-[30px] leading-[18px] align-middle whitespace-nowrap break-keep before:absolute before:left-0 before:top:0 before:w-[22px] before:h-[22px] before:border before:border-[#505050] before:rounded-[50%] before:z-[2]";
  const defaultArea =
    "flex flex-col flex-1 justify-center items-center text-[13px] text-center rounded-lg";

  return (
    <li
      className={`${className} ${checkbox ? checkboxArea : defaultArea}  ${
        appValueList[id] == label ? (checkbox ? checked : selected) : "off"
      } ${noBg ? "!bg-transparent" : ""}`}
      onClick={checkbox ? handleTab : undefined}
    >
      <button
        className={`${checkbox ? "block" : "w-full h-full"}`}
        onClick={handleTab}
        disabled={disabled}
      >
        {children}
      </button>
    </li>
  );
}
