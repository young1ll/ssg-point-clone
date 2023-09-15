import Link from "next/link";
import LinkImageWithFallback from "../ui/LinkImageWithFallback";
import { ImagePropTest } from "@/types/LinkProps";

const imageTest: ImagePropTest = {
  _src: "/images/wa_mark.144ed89e.png",
  size: { w: 67, h: 46 },
  type: "icon",
};

const termsList = [
  {
    id: 1,
    name: "서비스 이용약관",
    href: "",
  },
  {
    id: 2,
    name: "개인정보 처리방침",
    href: "",
  },
];

export default function Footer() {
  return (
    <footer className="mb-[75px]">
      <div className="relative px-6 pt-6 pb-8 border-t-[1px]">
        <ul className="terms pb-5 space-x-5">
          {termsList.map((item) => (
            <li key={item.id} className="inline-block">
              <Link
                className={`block text-base leading-6 font-medium h-6 ${
                  item.name == "개인정보 처리방침" ? "text-red-500" : ""
                }`}
                href={item.href}
              >
                {item.name}
              </Link>
            </li>
          ))}
          {/* 개인정보 처리방침: red */}
        </ul>

        <div className="info mb-4">
          <p className="block text-[14px] leading-[1em] tracking-[0.5px] pb-[10px]">
            신세계포인트 고객센터
          </p>
          <button className="inline-block cursor-pointer text-3xl leading-[1em] tracking-normal align-top">
            1899-4349
          </button>
          <p className="inline-block mt-[-27px] ml-[16px] text-[12px] leading-[18px]">
            운영시간<span className="mx-1">:</span>
            <em>09</em>시 - <em>18</em>시<br />
            점심시간<span className="mx-1">:</span>
            <em>12</em>시 - <em>13</em>시<br />
            (공휴일 제외)
          </p>
        </div>

        <div className="txt_cnt">
          <p className="pt-1 pb-2">
            <span className="block text-[12px]">
              ㈜이마트 서울시 중구 세종대로 7길 37(순화동)
            </span>
            <span className="inline-block mr-2 text-[12px]">
              대표자: 강희석
            </span>
            <span className="inline-block mr-2 text-[12px]">
              사업자등록번호 : 206-86-50913
            </span>
          </p>
          <p className="text-[10px] leading-[1em]">
            COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="watermark absolute right-[15px] top-[158px]">
          <div className="w-[90px]">
            <LinkImageWithFallback
              _id={1}
              _href=""
              image={imageTest}
              name="test"
              fontSize="base"
              fontHidden={false}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
