import { staticPageFetch } from "@/utils/StaticFetch";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mb-[75px] min-w-[320px]">
      <div className="relative px-6 pt-6 pb-8 border-t-[1px]">
        <ul className="pb-5 space-x-5">
          {staticPageFetch
            .getChildrenPageByParentName("서비스 이용약관")
            .map((item) => (
              <li key={item.id} className="inline-block">
                <Link
                  className={`block text-base leading-6 font-medium h-6 ${
                    item.name == "개인정보 처리방침" ? "text-red-500" : ""
                  }`}
                  href={item.pathname}
                >
                  {item.name}
                </Link>
              </li>
            ))}
        </ul>

        {/* 개인정보 처리방침: red */}
        <div className="mb-4 min-w-[320px] flex">
          <div>
            <p className="block text-sm leading-[1em] tracking-[0.5px] pb-[10px]">
              신세계포인트 고객센터
            </p>
            <button className="inline-block cursor-pointer -ml-[2px] text-3xl leading-[1em] tracking-normal align-top">
              1899-4349
            </button>
          </div>
          <p className="-mt-1 ml-[16px] text-xs leading-[18px]">
            운영시간<span className="mx-1">:</span>
            <em>09</em>시 - <em>18</em>시<br />
            점심시간<span className="mx-1">:</span>
            <em>12</em>시 - <em>13</em>시<br />
            (공휴일 제외)
          </p>
        </div>

        <div className="txt_cnt">
          <p className="pt-1 pb-2 text-xs">
            <span className="block">
              ㈜이마트 서울시 중구 세종대로 7길 37(순화동)
            </span>
            <span className="inline-block mr-2">대표자: 강희석</span>
            <span className="inline-block mr-2">
              사업자등록번호 : 206-86-50913
            </span>
          </p>
          <p className="text-[10px] leading-[1em]">
            COPYRIGHT (c) EMART INC. ALL RIGHTS RESERVED.
          </p>
        </div>

        <div className="absolute right-[15px] bottom-8 w-[90px]">
          <Link
            className="block w-full text-center"
            href={"http://www.wa.or.kr/board/list.asp?BoardID=0006"}
          >
            <Image
              className="block mx-auto"
              width={67}
              height={46}
              src={"/images/wa_mark.png"}
              alt="(사)한국장애인단체총연합회 한국웹접근성인증평가원 웹 접근성 우수사이트 인증마크 (WA인증마크)"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
