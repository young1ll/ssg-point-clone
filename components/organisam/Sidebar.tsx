"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import NavLogo from "../NavLogo";
import Button from "../atom/Button";
import SidebarFavoBox from "../SidebarFavoBox";

import { staticPageFetch } from "@/utils/StaticFetch";
import { signOut, useSession } from "next-auth/react";
import Collapse from "../atom/Collapse";
import ImageList from "../atom/ImageList";
import ListHeader from "../atom/ListHeader";
import { scrollHider } from "@/utils/CommonHelper";
import Underline from "../atom/UnderLine";
import CloseButton from "../atom/CloseButton";
import Modal from "../atom/Modal";

const getAPageByName = staticPageFetch.getAPageByName;
const getChildrenPageByParentName = staticPageFetch.getChildrenPageByParentName;

export default function Sidebar() {
  const session = useSession();

  const termsPages =
    staticPageFetch.getChildrenPageByParentName("서비스 이용약관");

  const { appValueList, handleAppRecord } = useAppContext();
  const hiddenRef = useRef<HTMLDivElement | null>(null);
  const currPathname = usePathname();

  const handleHidden = () => {
    handleAppRecord("sidebar", false);
    appValueList["sidebar"] &&
      setTimeout(() => {
        hiddenRef.current!.className += " hidden";
      }, 300);
  };

  useEffect(() => {
    handleHidden();
  }, [currPathname]);

  useEffect(() => {
    scrollHider(appValueList["sidebar"] as boolean);
  }, [appValueList]);

  return (
    <nav className="fixed left-0 top-0 z-[100]">
      <div
        className={`fixed block top-0 w-[85%] min-w-[320px] h-full z-20 bg-white overflow-y-auto ease-in-out duration-300 ${
          appValueList["sidebar"] ? "left-0" : "left-[-100vw]"
        }`}
      >
        {/* <NavLogo /> */}
        <div className="block h-[60px] pt-[16px] pl-[20px] box-border">
          <NavLogo
            className="inline-block"
            onClick={() => handleHidden()}
            nav
          />
        </div>

        {/* User Status Box */}
        {session.status == "authenticated"
          ? UserStatusOn({ session })
          : UserStatusOff()}

        {/* Favorite Menus */}
        <SidebarFavoBox />

        {/* MenuList */}
        <div className="relative flex flex-col gap-5 pt-6 px-5">
          {session.status == "authenticated" && UserMenuOn()}
          {UserMenuDefault()}
        </div>

        {/* Terms */}
        <ul className="space-x-5 mt-[20px] mb-[80px] ml-5">
          {staticPageFetch
            .getChildrenPageByParentName("서비스 이용약관")
            .map((page) => (
              <li key={page.id} className="inline-block">
                <Link
                  className={`block text-[13px] leading-[13px] text-[#767676] py-[5px] ${
                    page.name === "개인정보 처리방침" ? "text-[#eb0000]" : ""
                  }`}
                  href={page.pathname as string}
                >
                  {page.name}
                </Link>
              </li>
            ))}
        </ul>

        {/* Close Button */}
        <CloseButton onClick={handleHidden} />
      </div>

      {/* TODO: Background */}
      <div
        className={`fixed w-full h-full min-w-[320px] bg-black transition-all ease-linear duration-300 ${
          appValueList["sidebar"] ? "bg-opacity-50" : "bg-opacity-0 hidden"
        }`}
        onClick={handleHidden}
        ref={hiddenRef}
      ></div>
    </nav>
  );
}

const UserStatusOn = ({ session }: { session: any }) => {
  const pointIcon =
    "after:inline-block after:w-[33px] after:h-[30px] after:bg-[100%_auto] after:bg-[url('/images/resources/point_gradi.png')] after:bg-no-repeat";

  const { appValueList, handleAppRecord } = useAppContext();
  const handleLogout = () => {
    signOut({ callbackUrl: "/" });
  };
  const handleLogoutModal = {
    on: () => {
      handleAppRecord("logoutModal", true);
    },
    off: () => {
      handleAppRecord("logoutModal", false);
    },
  };

  return (
    <>
      <div className="px-5 pt-[18px] pb-6">
        <div className="flex flex-col justify-start">
          <p className="text-[18px] leading-[26px]">
            <Underline>{session.data?.user?.user?.name}</Underline>님
            반갑습니다.
          </p>
          <p className="text-[18px] leading-[26px]">
            <span
              className={`flex justify-end text-2xl leading-7 font-bold ${pointIcon}`}
            >
              {session?.data?.user?.user?.point}
            </span>
          </p>
        </div>
        <div className="flex gap-2 mt-[25px]">
          <Button
            className="h-9"
            bgColor="primary"
            onClick={handleLogoutModal.on}
          >
            로그아웃
          </Button>

          <Link
            className="flex justify-center items-center h-9 leading-6 font-bold rounded-lg w-full text-white bg-black"
            href={getAPageByName("마이 페이지")?.pathname as string}
          >
            마이페이지
          </Link>
        </div>
      </div>
      <Modal id="logoutModal" center>
        <p className="text-lg text-center pb-5">
          정말로 로그아웃 하시겠습니까?
        </p>
        <div className="flex gap-x-2">
          <Button bgColor="black" onClick={handleLogout}>
            확인
          </Button>
          <Button onClick={handleLogoutModal.off}>취소</Button>
        </div>
      </Modal>
    </>
  );
};
const UserStatusOff = () => {
  return (
    <>
      <div className="px-5 pt-[18px] pb-6">
        <div className="flex items-center justify-between">
          <p className="text-[18px] leading-[26px]">로그인해 주세요.</p>
        </div>
        <div className="flex gap-2 mt-[25px]">
          <Link
            className="flex justify-center items-center h-9 leading-6 font-bold rounded-lg w-full bg-gradient-primary"
            href={getAPageByName("로그인")?.pathname as string}
          >
            로그인
          </Link>
          <Link
            className="flex justify-center items-center h-9 leading-6 font-bold rounded-lg w-full text-white bg-black"
            href={getAPageByName("회원가입")?.pathname as string}
          >
            회원가입
          </Link>
        </div>
      </div>
    </>
  );
};
const UserMenuOn = () => {
  return (
    <div className="relative pb-2 font-medium text-base leading-[26px]">
      <ListHeader border>마이페이지</ListHeader>

      <Collapse id="sidebar_myPoint" title="마이 포인트" open>
        <ImageList pages={getChildrenPageByParentName("마이 포인트")} />
      </Collapse>

      <Collapse id="sidebar_myBenefits" title="마이 혜택">
        <ImageList pages={getChildrenPageByParentName("마이 혜택")} />
      </Collapse>

      <Collapse id="sidebar_myLounge" title="마이 라운지">
        <ImageList pages={getChildrenPageByParentName("마이 라운지")} />
      </Collapse>

      <Collapse id="sidebar_myInfo" title="마이 회원정보">
        <ImageList pages={getChildrenPageByParentName("마이 회원정보")} />
      </Collapse>
    </div>
  );
};
const UserMenuDefault = () => {
  return (
    <>
      {/* 신세계포인트 */}
      <ListHeader border>신세계포인트</ListHeader>
      <ImageList pages={getChildrenPageByParentName("신세계포인트")} />

      {/* 멤버십 서비스 */}
      <ListHeader border>멤버십 서비스</ListHeader>
      <ImageList pages={getChildrenPageByParentName("멤버십 서비스")} />

      {/* 고객센터 */}
      <ListHeader border>고객센터</ListHeader>
      <ImageList pages={getChildrenPageByParentName("고객센터")} />
    </>
  );
};
