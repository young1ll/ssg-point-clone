"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { KEY } from "@/utils/KeyHelper";

export default function AuthBox() {
  const session = useSession();

  return session.status === "authenticated" ? UserOn(session) : UserOff();
}

const UserOn = (session: any) => {
  const { appValueList, handleAppRecord } = useAppContext();
  return (
    <button
      className="flex items-center"
      onClick={() =>
        handleAppRecord(KEY.BARCORDBOX, !appValueList[KEY.BARCORDBOX])
      }
    >
      <Image
        className="mr-1"
        src={"/images/icon_barcode.png"}
        width={27}
        height={15}
        alt=""
      />
      <strong className="font-medium text-sm leading-6 mt-[-2px]">
        {session.data?.user?.user?.point}
      </strong>
      <span className="ml-1 indent-[-99em] w-6 h-6 bg-[url('/images/my_point.png')] bg-[100%_auto] bg-no-repeat overflow-hidden">
        P
      </span>
    </button>
  );
};
const UserOff = () => {
  return (
    <Link
      className="flex items-center text-[14px] leading-[21px] whitespace-nowrap"
      href={"/login"}
    >
      로그인
    </Link>
  );
};
