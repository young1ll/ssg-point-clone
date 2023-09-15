"use client";
import { useEffect } from "react";
import Button from "../atom/Button";
import Checkbox from "../atom/Checkbox";
import DetailArrow from "../atom/DetailArrow";
import ListBody from "../atom/ListBody";
import ListHeader from "../atom/ListHeader";
import ListItem from "../atom/ListItem";
import { useAppContext } from "@/provider/AppContextProvider";

export default function FormRcvAgree() {
  const { appValueList, handleAppRecord } = useAppContext();
  const chkList = [
    appValueList["RvcEmail_chk"],
    appValueList["RvcSMS_chk"],
    appValueList["RvcDM_chk"],
    appValueList["RvcTM_chk"],
  ];

  useEffect(() => {
    if (chkList.every((term) => term == true)) {
      handleAppRecord("RvcAll_chk", true);
    } else handleAppRecord("RvcAll_chk", false);
  }, [chkList[0], chkList[1], chkList[2], chkList[3]]);

  const handleAllCheck = () => {
    const allChecked = !chkList.every((term) => term === true);
    handleAppRecord("RvcEmail_chk", allChecked);
    handleAppRecord("RvcSMS_chk", allChecked);
    handleAppRecord("RvcDM_chk", allChecked);
    handleAppRecord("RvcTM_chk", allChecked);
  };

  return (
    <div>
      <ListBody className="space-y-3 pt-10 px-5">
        <li className="flex justify-between ">
          <Checkbox
            className="text-[11px]"
            id={"_chk"}
            name={`[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의`}
          />
          <Button id="termsbtn_1" className="h-[22px]" type="simple">
            <DetailArrow />
          </Button>
        </li>
        <li className="flex justify-between">
          <Checkbox
            className="text-[11px]"
            id={"_chk"}
            name={`
      [선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의`}
          />
          <Button id="termsbtn_1" className="h-[22px]" type="simple">
            <DetailArrow />
          </Button>
        </li>
      </ListBody>
      {/* TODO: 체크박스 확인 */}
      <ListBody className="ml-[31px] mt-5 mb-10 pl-5 border-black border-l w-[300px]">
        <ListHeader className="text-sm">
          신세계포인트 광고정보 수신동의
        </ListHeader>
        <li>
          <Checkbox
            className="text-[11px] mb-1"
            id={"RvcAll_chk"}
            name={`전체동의`}
            onClick={handleAllCheck}
          />
        </li>
        <ul className="flex justify-start">
          <li className="w-full">
            <Checkbox
              className="text-[11px]"
              id={"RvcEmail_chk"}
              name={`이메일`}
            />
          </li>
          <li className="w-full">
            <Checkbox className="text-[11px]" id={"RvcSMS_chk"} name={`문자`} />
          </li>
          <li className="w-full">
            <Checkbox className="text-[11px]" id={"RvcDM_chk"} name={`DM`} />
          </li>
          <li className="w-full">
            <Checkbox className="text-[11px]" id={"RvcTM_chk"} name={`TM`} />
          </li>
        </ul>
      </ListBody>

      <ListBody className="px-5">
        <ListItem className="text-xs leading-5 text-gray-500 pt-1">
          당사, 관계사, 신세계포인트 제휴사가 제공하는 상품 및 서비스 홍보,
          소식지 제공, 이벤트 정보 제공(할인 쿠폰, 포인트 추가 적립, 상품 할인
          포함), 제휴행사를 안내해 드립니다. 수신동의 변경은 신세계포인트
          고객센터 및 홈페이지(www.shinsegaepoint.com)에서 가능합니다. ※ 서비스
          주요 정책 및 공지사항 안내 등은 수신동의 여부와 관계없이 발송됩니다.
        </ListItem>
        <Button className="my-10" bgColor="primary">
          확인
        </Button>
      </ListBody>
    </div>
  );
}
