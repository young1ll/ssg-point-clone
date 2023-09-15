"use client";
import Button from "@/components/atom/Button";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import ListBody from "@/components/atom/ListBody";
import ListItem from "@/components/atom/ListItem";
import TabPannel from "@/components/atom/TabPannel";
import { useSession } from "next-auth/react";

export default function CunsultWritePage() {
  const session = useSession();
  return (
    <>
      <TabPannel className="px-5" id="ConsultTab" label="consultWrite">
        <Input
          className="rounded-lg"
          id="consultUserName"
          title={`이름`}
          disabled
        >
          {session.data?.user?.name}
        </Input>

        <Input
          className="rounded-lg"
          id="consultUserName"
          title={
            <>
              {`연락처 `}
              <span className="text-gray-700 font-bold">
                (필수 기재 사항이 아닙니다.)
              </span>
            </>
          }
        >
          {session.data?.user.user.phone}
        </Input>

        <div className="">
          <p className="text-[13px]">유형</p>
          <div className="flex justify-between w-full gap-x-2">
            <Dropdown
              className="flex-1 h-12 w-full border rounded-lg"
              wrapper="flex-1"
              id="ConsultTypeMain"
              options={[]}
            />
            <Dropdown
              className="flex-1 h-12 w-full border rounded-lg"
              wrapper="flex-1"
              id="ConsultTypeSub"
              options={[]}
            />
          </div>
        </div>

        <Input
          className="rounded-lg"
          id="consultTitle"
          title={`제목`}
        >{`제목을 입력해 주세요.(50자 이내)`}</Input>

        <>
          <p className="text-[13px]">내용</p>
          <div className="relative w-full" data-state>
            <label
              className="py-3 px-4 absolute table left-0 top-0 box-border w-full h-12 px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
              htmlFor="consultTextArea"
            >
              <span className="align-middle text-left break-all leading-5">
                {
                  <>
                    문의하실 내용을 입력해주세요.
                    <br />
                    최대 10,000자까지 입력가능합니다.
                    <br />
                    ※기재 시 주민등록번호 등 개인정보가
                    <br />
                    포함되지 않도록 유의하시기 바랍니다.
                  </>
                }
              </span>
            </label>
            <span className="absolute text-xs right-[15px] bottom-[15px] text-gray-400">
              ({`0`}/10,000 자)
            </span>
            <textarea
              className="w-full h-[200px] border rounded-lg resize-none caret-cscenter focus-visible:relative peer"
              name="consultTextArea"
              id="consultTextArea"
              maxLength={10000}
            ></textarea>
          </div>

          <ListBody className="space-y-1">
            <ListItem className="!text-xs text-gray-500" bullet>
              <span className="text-[#be5e00]">*</span> 표는 필수입력
              사항입니다.
            </ListItem>
            <ListItem className="!text-xs text-gray-500" bullet>
              문의 사항 답변 완료 시 APP PUSH로 답변 완료 알림을 드립니다.
            </ListItem>
            <ListItem className="!text-xs text-gray-500" bullet>
              통화로 답변 받기를 원하시는 경우 연락처 정보를 입력해 주세요.
            </ListItem>
          </ListBody>

          <div className="py-10 flex gap-x-2">
            <Button className="text-gray-500">취소</Button>
            <Button bgColor="primary">저장</Button>
          </div>
        </>
      </TabPannel>

      <TabPannel className="px-0" id="ConsultTab" label="consultHistory">
        test2
      </TabPannel>
    </>
  );
}
