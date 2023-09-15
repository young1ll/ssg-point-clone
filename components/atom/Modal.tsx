"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { scrollHider } from "@/utils/CommonHelper";
import { useEffect, useRef } from "react";

export default function Modal({
  id,
  className,
  center = false,
  children,
}: {
  id: string;
  className?: string;
  center?: boolean;
  children: React.ReactNode;
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const hiddenRef = useRef<HTMLDivElement | null>(null);
  const isModal = appValueList[id];

  const handleHidden = () => {
    handleAppRecord(id, false);
    appValueList[id] &&
      setTimeout(() => {
        hiddenRef.current!.className += " hidden";
      }, 300);
  };

  useEffect(() => {
    scrollHider(appValueList[id] as boolean);
  }, [appValueList]);

  return (
    <>
      <div
        className={`${className} fixed flex left-0 top-0 w-full h-full min-w-[315px] z-[200] ${
          isModal ? "" : "hidden"
        } ${center ? "items-center justify-center" : ""}`}
      >
        {/* Layer */}
        <div
          className={`flex relative flex-col z-[2] min-w-[315px] px-5 py-6 ${
            !center
              ? "max-w-none max-h-none h-full w-[100vw] m-0 rounded-none"
              : "max-w-[315px] w-[calc(100vw-40px)] m-[35px_auto] rounded-2xl"
          } min-h-[10px] bg-white overflow-hidden box-border`}
        >
          {children}
        </div>

        {/* fill close button */}
        {!center ? (
          <button
            className="absolute right-[2px] top-[6px] w-[50px] h-[50px] indent-[-999em] bg-[url('/images/icon_close.png')] bg-center bg-no-repeat bg-[length:14px_14px] z-10"
            onClick={() => handleHidden()}
          >
            닫기
          </button>
        ) : null}

        {/* modal background */}
        <div
          className={`fixed w-full h-full min-w-[320px] bg-black transition-all ease-linear duration-300 ${
            isModal ? "bg-opacity-50" : "bg-opacity-0 hidden"
          }`}
          onClick={handleHidden}
          ref={hiddenRef}
        ></div>
      </div>
    </>
  );
}
