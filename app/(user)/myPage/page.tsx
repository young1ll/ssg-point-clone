import TabbarHeader from "@/components/TabbarHeader";
import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import Underline from "@/components/atom/UnderLine";
import PointCard from "@/components/module/PointCard";
import { staticPageFetch } from "@/utils/StaticFetch";
import Image from "next/image";
import Link from "next/link";

export default function MyPagePage() {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "마이 포인트",
          "마이 라운지",
          "마이 혜택",
          "마이 회원정보",
          "포인트 전환",
        ])}
        activeTab="underline-primary"
        activeColor="benefits"
        justify="start"
        hideByScroll
      />
      <div className="mt-9  pt-5 px-5">
        <Card
          className="flex items-center justify-between text-white !bg-mypoint !px-2 !py-5"
          fit
        >
          <div className="flex gap-x-2">
            <div className="relative w-[32px] h-[32px]">
              <Image src={"/images/icon_sms.png"} fill alt="" />
            </div>
            <div className="w-[180px]">
              <p className="text-sm">문자로도 소통해요!</p>
              <p className="text-xs tracking-tighter">
                수신 동의 하시고 더 다양한 혜택과 이벤트·쿠폰 소식을 받으세요
              </p>
            </div>
          </div>
          <div className="relative w-[75px] h-[48px]">
            <Image src={"/images/icon_toggleOn.png"} fill alt="" />
          </div>
        </Card>
      </div>

      <PointCard type="barcode" />

      <div className="pt-[108px] pb-20 px-5 -mt-16 bg-[#f0f0f0]">
        <ContentHeader className="!px-0">
          <ContentTitle className="text-[18px] whitespace-nowrap">
            <Underline
              color="after:bg-[#fed6e8]"
              className="font-medium "
            >{`조영일`}</Underline>
            님,
            <br />
            통합ID로 더 다양한 멤버십을 만나보세요!
          </ContentTitle>
        </ContentHeader>

        {/* TODO: 링크 지정 */}
        <ListBody className="space-y-5 mb-10">
          <li className="relative rounded-[16px] min-w-[150px] overflow-hidden shadow-md">
            <Link className="" href={"/"}>
              <Image
                className="min-w-[150px]"
                src={`https://storage.googleapis.com/ssg-images${`/event/ssgdutyfreemembership_banner.jpg`}`}
                width={750}
                height={660}
                alt=""
              />
            </Link>
          </li>

          <li className="relative rounded-[16px] min-w-[150px] overflow-hidden shadow-md">
            <Link className="" href={"/"}>
              <Image
                className="min-w-[150px]"
                src={`https://storage.googleapis.com/ssg-images${`/event/ssgdutyfreemembership_banner.jpg`}`}
                width={750}
                height={660}
                alt=""
              />
            </Link>
          </li>

          <li className="relative rounded-[16px] min-w-[150px] overflow-hidden shadow-md">
            <Link className="" href={"/"}>
              <Image
                className="min-w-[150px]"
                src={`https://storage.googleapis.com/ssg-images${`/event/ssgdutyfreemembership_banner.jpg`}`}
                width={750}
                height={660}
                alt=""
              />
            </Link>
          </li>

          <li className="relative rounded-[16px] min-w-[150px] overflow-hidden shadow-md">
            <Link className="" href={"/"}>
              <Image
                className="min-w-[150px]"
                src={`https://storage.googleapis.com/ssg-images${`/event/ssgdutyfreemembership_banner.jpg`}`}
                width={750}
                height={660}
                alt=""
              />
            </Link>
          </li>
        </ListBody>
      </div>
    </>
  );
}
