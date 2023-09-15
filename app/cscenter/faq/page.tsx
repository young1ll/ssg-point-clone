"use client";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import ListHeader from "@/components/atom/ListHeader";
import PageNavigator from "@/components/module/PageNavigator";
import FaqList from "@/components/organisam/FaqList";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect, useState } from "react";

export default function FaqPage() {
  const [subDropdownList, setSubDropdownList] = useState<string[]>([]);
  const { appValueList, handleAppRecord } = useAppContext();
  const mainCat = [
    "회원",
    "신세계포인트",
    "신세계포인트카드",
    "이벤트/쿠폰",
    "가맹점",
    "개선사항",
    "신세계 유니버스 클럽",
    "이마트 EV 클럽",
    "기타",
  ];
  const subMember = ["회원가입/탈퇴", "정보수정", "비밀번호", "클럽서비스"];
  const subSsgPoint = ["적립/사용", "소멸", "선물", "전환"];
  const subSsgPointCard = ["신세계포인트 카드", "제휴 신용카드"];
  const subEventCoupon = ["이벤트", "쿠폰"];
  const subAffili = ["가맹점 이용문의"];
  const subFeedback = ["시스템오류", "서비스 개선사항"];
  const subUniverseClub = [
    "유니버스 클럽 혜택",
    "유니버스 클럽 가입/탈퇴",
    "포인트 특별 혜택",
    "포인트 카드/회원 계정",
    "기타",
  ];
  const subEmartEv = [
    "EV 클럽 혜택",
    "EV 클럽 가입/탈퇴",
    "EV 클럽 문의",
    "기타",
  ];
  const subEtc = ["기타"];

  useEffect(() => {
    if (appValueList["faqBoardMainCate"] == "회원") {
      setSubDropdownList(subMember);
    } else if (appValueList["faqBoardMainCate"] == "신세계포인트") {
      setSubDropdownList(subSsgPoint);
    } else if (appValueList["faqBoardMainCate"] == "신세계포인트카드") {
      setSubDropdownList(subSsgPointCard);
    } else if (appValueList["faqBoardMainCate"] == "이벤트/쿠폰") {
      setSubDropdownList(subEventCoupon);
    } else if (appValueList["faqBoardMainCate"] == "가맹점") {
      setSubDropdownList(subAffili);
    } else if (appValueList["faqBoardMainCate"] == "개선사항") {
      setSubDropdownList(subFeedback);
    } else if (appValueList["faqBoardMainCate"] == "신세계 유니버스 클럽") {
      setSubDropdownList(subUniverseClub);
    } else if (appValueList["faqBoardMainCate"] == "이마트 EV 클럽") {
      setSubDropdownList(subEmartEv);
    } else if (appValueList["faqBoardMainCate"] == "기타") {
      setSubDropdownList(subEtc);
    }
  }, [appValueList["faqBoardMainCate"]]);

  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
          자주 묻는 <span className="font-bold text-cscenter">질문과 답변</span>
          을
          <br />
          모아 두었어요.
        </ContentTitle>
      </ContentHeader>

      <ListHeader className="flex-col !items-start px-5">
        <p className="pb-4">질문 분류를 선택해주세요.</p>
        <div className="flex justify-between w-full gap-x-2">
          <Dropdown
            className="h-12 w-full border rounded-lg"
            wrapper="flex-1"
            id="faqBoardMainCate"
            options={mainCat}
            initValue="대분류"
          />
          <Dropdown
            className="h-12 w-full border rounded-lg"
            wrapper="flex-1"
            id="faqBoardSubCate"
            options={subDropdownList}
            initValue="소분류"
          />
        </div>
      </ListHeader>

      <FaqList />

      <PageNavigator />
    </>
  );
}
