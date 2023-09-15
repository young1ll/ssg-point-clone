"use client";

import { useAppContext } from "@/provider/AppContextProvider";
import Barcode from "@/utils/Barcode/Barcode";
import { KEY } from "@/utils/KeyHelper";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

export default function BarcodeBox() {
  const session = useSession();
  const { appValueList, handleAppRecord } = useAppContext();

  const arrow =
    "after:absolute after:top-1/2 after:-translate-y-1/2 after:ml-1 after:w-[9px] after:h-[6px] after:bg-contain after:bg-[url('/images/arrow_left.png')] after:bg-[100%_auto] after:rotate-180 after:bg-center after:bg-no-repeat";
  const arrowDown =
    "before:absolute before:block before:top-4 before:left-1/2 before:translate-x-[-50%] before:w-[10px] before:h-2 before:bg-[url('/images/arrow_left.png')] before:-rotate-90 before:bg-[100%_auto] before:bg-center before:bg-no-repeat";

  useEffect(() => {
    console.log(appValueList[KEY.BARCORDBOX]);
  }, []);

  return (
    <>
      {session.status !== "authenticated" ? (
        "로그인 필요"
      ) : (
        <div
          className={`${
            appValueList[KEY.BARCORDBOX] !== true ? "bottom-[-200px]" : ""
          } fixed left-0 bottom-0 w-full rounded-t-2xl bg-gradient-primary drop-shadow-2xl transition-all z-[999]`}
        >
          <div className="pt-[13px] pb-[16px]">
            <div className="relative mx-auto overflow-hidden z-[1]">
              <p className="inline-block ml-[19px] indent-[-99em] w-[117px] h-[21px] bg-[url('/images/resources/ssgpoint.png')] bg-[100%_auto] bg-no-repeat">
                SHINSEGAE POINT
              </p>
              <p className="inline-block float-right pr-[16px] text-base font-bold after:relative after:inline-block after:top-[3px] after:ml-[2px] after:w-[9px] after:h-[16px] after:bg-[url('/images/p_mark.png')] after:bg-[100%_auto] after:bg-no-repeat">
                {session.data?.user?.user?.point}
              </p>
              <div className="mx-auto mt-[12px] relative p-[5px] pt-[6px] w-full max-w-[328px] min-h-[90px] text-center box-border rounded-lg bg-white">
                <Barcode
                  type="detail"
                  value={session.data.user?.user?.bardCode.replace(
                    /(\d{4})(\d{4})(\d{4})(\d{4})/,
                    "$1-$2-$3-$4"
                  )}
                  height={75}
                />
              </div>
              <div className="flex justify-center gap-x-5 mt-3">
                <Link
                  className={`relative text-xs font-medium pr-[11px] ${arrow}`}
                  href={"/myPoint/chgPntPwdCert"}
                >
                  포인트 비밀번호 변경
                </Link>
                <Link
                  className={`relative text-xs font-medium pr-[11px] ${arrow}`}
                  href={"/myLounge/receipt"}
                >
                  스마트 영수증
                </Link>
              </div>
            </div>
          </div>
          <button
            className={`absolute top-[-15px] left-1/2 translate-x-[-50%] text-center w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-[#f8ae04] to-[#faa503] ${arrowDown}`}
            onClick={() =>
              handleAppRecord(KEY.BARCORDBOX, !appValueList[KEY.BARCORDBOX])
            }
          >
            <span className="absolute inline-block w-[1px] h-[1px] overflow-hidden z-[-1px]">
              접기
            </span>
          </button>
        </div>
      )}
    </>
  );
}
