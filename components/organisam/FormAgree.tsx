"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Button from "../atom/Button";
import Checkbox from "../atom/Checkbox";
import ContentHeader from "../atom/ContentHeader";
import DetailArrow from "../atom/DetailArrow";
import ListBody from "../atom/ListBody";
import Modal from "../atom/Modal";
import Subtitle from "../atom/Subtitle";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FormAgree() {
  const router = useRouter();
  const [activeBlack, setActiveBlack] = useState<undefined | "black">(
    undefined
  );
  const unActiveBtn = "";
  const { appValueList, handleAppRecord } = useAppContext();

  const termsList = [
    {
      id: "termsAgree_01",
      name: "신세계포인트 회원 이용약관",
      required: true,
      content_url: "",
    },
    {
      id: "termsAgree_02",
      name: "개인정보 수집 및 이용 동의",
      required: true,
      content_url: "",
    },
    {
      id: "termsAgree_03",
      name: "이마트/신세계 공동 개인정보 수집 및 이용 동의",
      required: true,
      content_url: "",
    },
    {
      id: "termsAgree_04",
      name: "통합회원 서비스 제공 개인정보 제3자 제공 동의",
      required: true,
      content_url: "",
    },
    {
      id: "termsAgree_05",
      name: "혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의",
      required: false,
      content_url: "",
    },
    {
      id: "termsAgree_06",
      name: "이마트/신세계 공동 개인정보 수집 및 이용 동의",
      required: false,
      content_url: "",
    },
  ];

  const chkList = termsList.map((i) => appValueList[i.id + "_chk"]);

  useEffect(() => {
    if (
      termsList
        .filter((i) => i.required == true)
        .every((i) => appValueList[i.id + "_chk"])
    ) {
      setActiveBlack("black");
    } else setActiveBlack(undefined);
  }, [chkList]);

  useEffect(() => {
    if (appValueList["allAgree"]) {
      termsList.map((i) => handleAppRecord(`${i.id}_chk`, true));
    } else if (!appValueList["allAgree"]) {
      termsList.map((i) => handleAppRecord(`${i.id}_chk`, false));
    }
  }, [appValueList["allAgree"]]);

  const handleAllAgree = () => {
    handleAppRecord("allAgree", !appValueList["allAgree"]);
  };

  return (
    <>
      <div className="px-5 pb-10">
        <Button
          id="allAgree"
          className={`border-none ${
            activeBlack == undefined ? "!bg-gray-100 " : ""
          }`}
          bgColor={activeBlack}
          onClick={handleAllAgree}
        >
          모두 동의합니다.
        </Button>
        <Subtitle className="relative before:content-['※'] before:absolute before:left-0 pl-[14px]">
          전체 동의에는 필수 및 선택 정보수집에 대한 동의가 포함되어 있으며,
          개별적인 동의 선택도 가능합니다. 선택항목에 대한 동의를 거부하시더라도
          필수 서비스 이용은 가능합니다.
        </Subtitle>
      </div>

      <ContentHeader className="pb-5">
        신세계포인트 통합회원
        <Subtitle className="!text-black">
          ㈜이마트, ㈜신세계, ㈜광주신세계, ㈜신세계동대구복합환승센터 귀중
        </Subtitle>
      </ContentHeader>
      <ListBody className="px-5 space-y-4">
        {termsList.map((term) => (
          <li key={term.id} className="flex items-center justify-between">
            <Checkbox
              className="text-sm"
              id={term.id + "_chk"}
              name={`${term.required ? "[필수]" : "[선택]"} ${term.name}`}
            />
            <Button
              id="termsbtn_1"
              className="h-[22px]"
              type="simple"
              onClick={() => handleAppRecord(term.id, true)}
            >
              <DetailArrow />
            </Button>
            {/* --- Terms Content Modal --- */}
            <Modal id={term.id} center>
              {term.content_url || "test"}
            </Modal>
            {/* ------ Validate Modal ------ */}
            <Modal id={`${term.id}_valid`} center>
              <p className="text-sm tracking-[-.3px]">
                {term.required ? "[필수]" : "[선택]"} {term.name}에
                동의해주세요.
              </p>
              <Button
                className="mt-5 !h-10"
                bgColor="black"
                onClick={() => handleAppRecord(`${term.id}_valid`, false)}
              >
                확인
              </Button>
            </Modal>
          </li>
        ))}
      </ListBody>
      <div className="px-5 py-10">
        <Button
          bgColor={activeBlack == "black" ? "primary" : activeBlack}
          disabled={activeBlack == undefined}
          onClick={() => router.push("/member/join/form")}
        >
          다음
        </Button>
      </div>
    </>
  );
}
