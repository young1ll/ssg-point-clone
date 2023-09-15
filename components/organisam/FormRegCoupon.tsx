"use client";
import { staticPageFetch } from "@/utils/StaticFetch";
import Paper from "../atom/Paper";
import Button from "../atom/Button";
import Image from "next/image";
import Card from "../atom/Card";
import Input from "../atom/Input";
import { KEY } from "@/utils/KeyHelper";
import { useAppContext } from "@/provider/AppContextProvider";
import { useSession } from "next-auth/react";
import Modal from "../atom/Modal";
import Link from "next/link";

const modalId = "isUserModal";
const formCardId = "formForUser";
export default function FormRegCoupon({}: {}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const session = useSession();

  const isLoggedIn = session.status === "authenticated";

  const handleCoupon = () => {
    if (!isLoggedIn) {
      handleAppRecord(modalId, true);
    } else if (isLoggedIn && !appValueList[formCardId]) {
      handleAppRecord(formCardId, true);
    }
    return;
  };
  

  const handleLeave = () => {
    handleAppRecord(formCardId, false);
  };

  return (
    <Paper
      className="flex flex-col justify-center box-border"
      bgColor="bg-[#ffc191]"
    >
      <ul className="flex justify-center divide-x-2">
        {staticPageFetch
          .getPageListByEachName(["마이 쿠폰함", "쿠폰"])
          .map((page) => (
            <li key={page.id} className="w-44 px-5">
              {/* TODO: onClick dispatch */}
              {isLoggedIn ? 
              <Button
              className="relative flex flex-col h-[68px] border-0 bg-opacity-0 hover:bg-opacity-20"
              onClick={handleCoupon}
              >
                <Image
                  className="block mx-auto"
                  src={page.primary_icon as string}
                  width={48}
                  height={35}
                  alt={page.name}
                  />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-normal whitespace-nowrap">
                  {page.name == "쿠폰"
                    ? page.name + " 등록"
                    : page.name + "으로 이동"}
                </p>
              </Button>
              : 
              <Button
              className="relative flex flex-col h-[68px] border-0 bg-opacity-0 hover:bg-opacity-20"
              onClick={()=> handleAppRecord(modalId, true)}>
                <Image
                  className="block mx-auto"
                  src={page.primary_icon as string}
                  width={48}
                  height={35}
                  alt={page.name}
                  />
                <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs font-normal whitespace-nowrap">
                  {page.name == "쿠폰"
                    ? page.name + " 등록"
                    : page.name + "으로 이동"}
                </p>
                </Button>
                }
            </li>
          ))}
      </ul>

      <Modal id={modalId} center>
        쿠폰 등록을 위해 먼저 로그인해 주세요.
      </Modal>

      {/* TODO: hidden */}

      <Card
        id={formCardId}
        className={`m-5 ${appValueList[formCardId] ? "" : "hidden"}`}
        shadow
      >
        <p className="sp_txt1 text-[16px] leading-[26px]">
          신세계포인트 쿠폰 등록을 위해
          <br />
          <span className="text-[#c85208]">쿠폰 번호를 입력</span>해 주세요.
        </p>
        <div className="mt-4">
          <Input className="rounded-lg" id={KEY.USERPASSWORD} type="text">
            대소문자 구분하여 정확히 입력해 주세요.
          </Input>

          <div className="flex gap-x-2 mt-2">
            <Button onClick={handleLeave}>다음에 하기</Button>
            {!isLoggedIn ? <Link href={"/login"}>다음에 하기</Link> : <Link href={"/benefits/myCoupon"}>다음에 하기</Link>}
            <Button bgColor="primary">등록하기</Button>
          </div>
        </div>
      </Card>
    </Paper>
  );
}
