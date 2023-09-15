"use client";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Modal from "@/components/atom/Modal";
import StepNavigation from "@/components/atom/StepNavigation";
import Subtitle from "@/components/atom/Subtitle";
import Underline from "@/components/atom/UnderLine";
import { useAppContext } from "@/provider/AppContextProvider";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const { appValueList, handleAppRecord } = useAppContext();
  const [userInfo, setUserInfo] = useState({});

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();

  useEffect(() => {
    if (localStorage.getItem("registeredUserAccount")) {
      handleAppRecord("successModal", true);
      setUserInfo(
        JSON.parse(localStorage.getItem("registeredUserAccount") as string)
      );
    }
    console.log(userInfo);
  }, []);

  const handleSubmit = () => {
    localStorage.setItem("registeredUserAccount", "");
  };

  return (
    <>
      <Modal id="successModal" center>
        <h3>환영합니다!</h3>
        <Subtitle>신세계포인트에 가입하신 것을 환영합니다!</Subtitle>
      </Modal>
      <ContentHeader className="mt-9">
        <StepNavigation />
        <ContentTitle className="leading[30px]">
          <span className="font-bold text-mypoint">가입완료</span>
        </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          <Underline>{userInfo.name}</Underline>님,
          <br />
          <span className="font-medium">{userInfo.loginId}</span> ID로
          신세계포인트 통합 회원가입이
          <br />
          완료되었습니다.
        </Subtitle>
      </ContentHeader>

      <div className="px-5">
        <ListHeader border>
          <ContentTitle className="font-semibold">회원정보</ContentTitle>
        </ListHeader>
        <ListBody className="gap-y-4 py-5">
          <li>
            <p>휴대폰 번호</p>
            <Subtitle className="!pt-2 !text-sm">
              {userInfo.phone?.replace(
                /(\d{3})(\d{2})(\d{2})(\d{2})/,
                "$1-$2**-$3**"
              )}
            </Subtitle>
          </li>
          <li>
            <p>주소</p>
            <Subtitle className="!pt-2 !text-sm">{userInfo.address}</Subtitle>
          </li>
          <li>
            <p>이메일</p>
            <Subtitle className="!pt-2 !text-sm">
              {userInfo.email || "없음"}
            </Subtitle>
          </li>
        </ListBody>
      </div>

      <div className="px-5 pt-14">
        <ListHeader className="!block !justify-start !h-full" border>
          <ContentTitle className="font-semibold">
            광고정보 수신동의
          </ContentTitle>
          <ContentTitle className="font-semibold">
            동의일자{" "}
            <span className="tracking-wide">{`${year}.${month}.${date}`}</span>
          </ContentTitle>
        </ListHeader>
        <ListBody className="gap-y-4 py-5">
          <li>
            <p>동의</p>
            <Subtitle className="!pt-2 !text-sm space-x-2">
              {userInfo.term &&
                Object.keys(userInfo.term).map((i) =>
                  userInfo.term[i] ? (
                    <>
                      <span key={i}>{i}</span>,
                    </>
                  ) : (
                    ""
                  )
                )}
            </Subtitle>
          </li>
        </ListBody>
      </div>

      <div className="px-5 py-10">
        <Link
          href={"/login"}
          onClick={handleSubmit}
          className="flex justify-center items-center font-semibold h-12 w-full rounded-lg bg-gradient-primary"
        >
          신세계포인트 로그인하기
        </Link>
      </div>
    </>
  );
}
