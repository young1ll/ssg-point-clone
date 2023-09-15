"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../ui/NavLogo";
import { useState } from "react";

//TODO: 전역 상태 또는 세션,쿠키 확인해서 로그인 상태 가져오기 -> 컴포넌트로 빼고 Header는 use server
export default function Header() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
    console.log("toggle: ", toggle);
  };

  return (
    <header>
      <div className="fixed left-0 top-0 w-full h-[56px] bg-white z-10">
        <div className="flex justify-between items-center h-full relative pr-[60px] pl-[48px] z-2">
          <Logo />

          <Link
            className="flex items-center text-[14px] leading-[21px] whitespace-nowrap"
            href={"/login"}
          >
            로그인
          </Link>

          {/* LinkImageWithFallback 사용하지 않음(toggle 필요) */}
          <button
            className="absolute right-[2px] top-[2px] w-[56px] h-[52px]"
            onClick={toggleHandler}
          >
            <Image
              className="absolute left-[35%] top-[35%] mt-[-1px]"
              src="/images/align-justify.png"
              height={20}
              width={20}
              alt="전체메뉴"
              quality={100}
              sizes="(max-width: 22px)"
            />
          </button>
        </div>

        {/*
        TODO: Sidebar toggle 확인하고 스타일 적용(Sidebar 뒤에 화면 전체를 감싸는 요소로 비활성화시키기)
        <Sidebar toggle={toggle} />
        */}
      </div>
    </header>
  );
}
