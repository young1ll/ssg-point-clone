"use client";
import { usePathname } from "next/navigation";
import { ReactElement, useEffect } from "react";
import NavLogo from "./NavLogo";

export default function HeaderNavBox() {
  const currPathname = usePathname();
  const root = "/";

  const TITLES: { [key: string]: string } = {
    "/login": "로그인",

    "/couponPage": "쿠폰",
    "/ingevents": "이벤트 - 진행 이벤트",
    "/endevents": "이벤트 - 종료 이벤트",
    "/winevents": "이벤트 - 당첨 확인",
    "/membership": "멤버십 서비스",

    "/myPoint": "마이 포인트",
    "/myLounge": "마이 라운지",
    "/myPage": "마이 페이지",
    "/myInfo": "마이 회원정보",
    "/withdrawal": "마이 회원정보",

    "/benefits": "마이 혜택",
    "/mylounge": "마이 라운지",
    "/sPoint": "신세계포인트",

    "/cscenter": "고객센터",

    "/member/findIdPw": "아이디 찾기 본인인증",
    "/member/findPw": "비밀번호 찾기 본인인증",
    "/member/findIdResult": "아이디 찾기",

    "/member/join": "회원가입",
    "/member/join/cert": "회원가입 본인인증",
    "/member/join/form": "회원가입 정보입력",

    "/stplat/policy": "개인정보 처리방침",
  };

  const getTitle = () => {
    const pathSegments = currPathname.split("/").filter(Boolean);

    while (pathSegments.length > 0) {
      const key = `/${pathSegments.join("/")}`;
      if (TITLES[key]) {
        return TITLES[key];
      }
      pathSegments.pop();
    }

    return "/(정의되지 않은 페이지)";
  };

  const NavIconComp: { [key: string]: () => ReactElement } = {
    "/": () => <NavLogo nav />,
    default: () => <NavH2>{getTitle()}</NavH2>,
  };

  const getComponent = () => {
    return NavIconComp[currPathname]
      ? NavIconComp[currPathname]()
      : NavIconComp.default();
  };

  return <>{getComponent()}</>;
}

const NavH2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <button
        className="absolute indent-[-999em] w-[48px] h-[56px] left-0 top-0 bg-[url('/images/arrow_left.png')] bg-[length:8px_auto] bg-center bg-no-repeat"
        onClick={() => window.history.back()}
      >
        뒤로가기
      </button>
      <h2 className="text-[16px] leading-[28px] font-medium text-center">
        {children}
      </h2>
    </>
  );
};
