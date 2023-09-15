import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Grid from "@/components/atom/Grid";
import ListBody from "@/components/atom/ListBody";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";

export default function MemberStorePage() {
  const affiliLinks = [
    {
      id: 1,
      name: "이마트",
      href: "https://store.emart.com/main/main.do?trcknCode=header_emart",
      src: "/images/resources/sPoint/emart.png",
    },
    {
      id: 2,
      name: "신세계백화점",
      href: "https://www.shinsegae.com/index.do",
      src: "/images/resources/sPoint/shinsegae.png",
    },
    {
      id: 3,
      name: "SSG.COM",
      href: "https://www.ssg.com/",
      src: "/images/resources/sPoint/ssg.png",
    },
    {
      id: 4,
      name: "이마트 에브리데이",
      href: "https://www.emarteveryday.co.kr/",
      src: "/images/resources/sPoint/emart_everyday.png",
    },
    {
      id: 5,
      name: "신세계아울렛",
      href: "https://www.premiumoutlets.co.kr/main/ko;jsessionid=5B96FFC45AFE184C98AF2B6A6CB6D8D5",
      src: "/images/resources/sPoint/outlets.png",
    },
    {
      id: 6,
      name: "스타필드",
      href: "https://www.starfield.co.kr/",
      src: "/images/resources/sPoint/starfield.png",
    },
    {
      id: 7,
      name: "이마트24",
      href: "https://www.emart24.co.kr/",
      src: "/images/resources/sPoint/emart24.png",
    },
    {
      id: 8,
      name: "스타벅스",
      href: "https://www.starbucks.co.kr/index.do",
      src: "/images/resources/sPoint/starbucks.png",
    },
    {
      id: 9,
      name: "CASAMIA",
      href: "https://www.guud.com/index",
      src: "/images/resources/sPoint/casa.png",
    },
    {
      id: 10,
      name: "신세계면세점",
      href: "https://www.shinsegaedf.com/store/kr/main",
      src: "/images/resources/sPoint/dutyfree.png",
    },
    {
      id: 11,
      name: "신세계쇼핑",
      href: "https://www.shinsegaetvshopping.com/broadcast/main",
      src: "/images/resources/sPoint/shopping.png",
    },
    {
      id: 12,
      name: "와인앤모어",
      href: "https://www.shinsegae-lnb.com/html/main/index.html",
      src: "/images/resources/sPoint/wnm.png",
    },
    {
      id: 13,
      name: "신세계푸드",
      href: "https://www.shinsegaefood.com/main.sf",
      src: "/images/resources/sPoint/food.png",
    },
    {
      id: 14,
      name: "조선호텔&리조트",
      href: "https://www.josunhotel.com/intro.do",
      src: "/images/resources/sPoint/resort.png",
    },
    {
      id: 15,
      name: "스무디킹",
      href: "https://www.shinsegaefood.com/smoothieking/index.sf",
      src: "/images/resources/sPoint/smoothieking.png",
    },
    {
      id: 16,
      name: "영랑호리조트",
      href: "https://www.yrhresort.com/?aspxerrorpath=/page/sub1_1_",
      src: "/images/resources/sPoint/youngrangho.png",
    },
    {
      id: 17,
      name: "G마켓",
      href: "https://m.gmarket.co.kr/",
      src: "/images/resources/sPoint/gmarket.png",
    },
    {
      id: 18,
      name: "옥션",
      href: "http://www.auction.co.kr/",
      src: "/images/resources/sPoint/aution.png",
    },
    {
      id: 19,
      name: "SSG랜더스",
      href: "https://www.ssglanders.com/main",
      src: "/images/resources/sPoint/ssg_landers.png",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            생활에서 취향까지
            <br />
            <span className="font-bold text-spoint">
              일상에 신세계를 더합니다.
            </span>
          </ContentTitle>
          <p className="text-sm leading-6 text-gray-600 pt-2">
            일상의 쇼핑부터 내 취향에 어울리는 맞춤 쇼핑까지
            <br />
            다양한 신세계포인트 가맹점을 만나보세요.
          </p>
        </ContentHeader>
      </div>

      <h3 className="text-lg px-5">신세계포인트 가맹점 안내</h3>
      <div className="px-5 pt-6 pb-20">
        <Grid>
          {affiliLinks.map((link) => (
            <li key={link.id} className="flex justify-center text-center">
              <Link href={link.href} target="_blank">
                <Card className="relative w-20 h-20 mx-auto" border>
                  <Image src={link.src} fill alt={link.name} />
                </Card>
                <span className="text-xs leading-5">{link.name}</span>
              </Link>
            </li>
          ))}
        </Grid>

        <Subtitle>
          · 가맹점 로고 클릭 시 해당 가맹점 홈페이지로 연결됩니다.
        </Subtitle>
      </div>
    </>
  );
}
