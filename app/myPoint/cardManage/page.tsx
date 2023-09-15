"use client";
import Button from "@/components/atom/Button";
import ListHeader from "@/components/atom/ListHeader";
import PointCard from "@/components/module/PointCard";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type CardType = {
  createDate:string;
  agency: string;
  number: string;
}

export default function CardManagePage() {
  const session = useSession();
  const [onlineCardList, setOnlineCardList] = useState<CardType[]>();
  const thisUrl = `http://3.35.193.212:8000/api/v1/point-card?UUID=${session.data?.user.uuid}`;
  console.log(session.data);

  useEffect(() => {
    const thisCardFetch = async (url: string) => {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
      });
      const data = await res.json();
      console.log(data);
      setOnlineCardList(data);
    };

    if (session.data && thisUrl) {
      thisCardFetch(thisUrl);
    }
  }, []);

  return (
    <>
      <div className="mt-[36px]">
        <PointCard type="cardNumber" />
      </div>

      <div className="px-5">
        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            온라인 카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              {onlineCardList?.map((card, index) => (
                <tr key={index}>
                  <td className="text-xs">
                    {card.number.replace(
                      /(\d{4})(\d{4})(\d{4})(\d{4})/,
                      "$1-****-****-$4"
                    )}
                  </td>
                  <td>{card.agency}</td>
                  <td>{card.createDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            제휴 신용카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              <tr>
                <td colSpan={3}>
                  <div className="py-12">
                    <p className="relative pt-16 text-center text-gray-500 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[48px] after:h-[48px] after:bg-[url('/images/resources/no_content.png')] after:bg-no-repeat after:bg-[100%_auto]">
                      보유하신 제휴 신용카드가 없습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pb-12">
          <ListHeader className="text-base font-medium" border>
            오프라인 카드
          </ListHeader>

          <table className="basic_table">
            <thead className="center">
              <tr className=" border-b text-[13px]">
                <th className="w-[40%]">카드번호</th>
                <th className="">발급처</th>
                <th className="w-[81px]">발급일자</th>
              </tr>
            </thead>
            <tbody className="center text-gray-500">
              <tr>
                <td colSpan={3}>
                  <div className="py-12">
                    <p className="relative pt-16 text-center text-gray-500 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[48px] after:h-[48px] after:bg-[url('/images/resources/no_content.png')] after:bg-no-repeat after:bg-[100%_auto]">
                      보유하신 제휴 신용카드가 없습니다.
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-col gap-y-4 pb-10">
          <Link href={"/myPoint/regPntCard"}>
            <Button>신규 포인트 카드 등록하기</Button>
          </Link>
          <Button>임시 발급 카드 인증하기</Button>
          <Button bgColor="primary">포인트 비밀번호 변경하기</Button>
        </div>
      </div>

      <div className="relative px-5 pb-20">
        <div className="relative h-[80vw] ">
          <Image
            src={
              "https://storage.googleapis.com/ssg-images/myPoint/cardManage_banner.jpg"
            }
            fill
            alt=""
          />
        </div>
      </div>
    </>
  );
}
