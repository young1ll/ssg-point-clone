"use client";
import Image from "next/image";
import Button from "../atom/Button";
import Dropdown from "../atom/Dropdown";
import ListHeader from "../atom/ListHeader";
import { useEffect, useState } from "react";
import ListBody from "../atom/ListBody";
import Modal from "../atom/Modal";
import Tabs from "../atom/Tabs";
import Tab from "../atom/Tab";
import { useAppContext } from "@/provider/AppContextProvider";
import { KEY } from "@/utils/KeyHelper";
import Input from "../atom/Input";

export default function BoardListHeader({
  dropdownId,
  options,
  disabledOption,
  handleDropdown,
  rightButton,
  buttonUrl,
  rightButtonOnClick,
  children,
}: {
  dropdownId: string;
  options?: string[];
  disabledOption?: number[];
  handleDropdown?: () => void;
  rightButton?: boolean;
  buttonUrl?: string;
  rightButtonOnClick?: () => void;
  children?: React.ReactNode;
}) {
  if (rightButton && !buttonUrl) {
    throw new Error("RightButton 속성은 buttonUrl이 필요합니다.");
  }
  const { appValueList, handleAppRecord } = useAppContext();
  const [startDate, setStarDate] = useState<string>("");
  useEffect(() => {
    if (!appValueList["startDate"]) {
      handleAppRecord("startDate", new Date());
    }
  }, []);

  const today = new Date();
  useEffect(() => {
    if (appValueList[KEY.PNTDROPDOWN] == "1주일") {
      const aWeekAgo = new Date(today);
      aWeekAgo.setDate(today.getDate() - 7);
      setStarDate(aWeekAgo.toISOString().split("T")[0]);
    } else if (appValueList[KEY.PNTDROPDOWN] == "1개월") {
      const aWeekAgo = new Date(today);
      aWeekAgo.setDate(today.getMonth() - 1);
      setStarDate(aWeekAgo.toISOString().split("T")[0]);
    } else if (appValueList[KEY.PNTDROPDOWN] == "3개월") {
      const threeMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 3,
        today.getDate()
      );
      setStarDate(threeMonthsAgo.toISOString().split("T")[0]);
    } else if (appValueList[`${KEY.PNTDROPDOWN}`] == "6개월") {
      const sixMonthsAgo = new Date(
        today.getFullYear(),
        today.getMonth() - 6,
        today.getDate()
      );
      setStarDate(sixMonthsAgo.toISOString().split("T")[0]);
    }
  }, [appValueList[KEY.PNTDROPDOWN]]);

  const handleFilterModal = {
    on: () => handleAppRecord("pntHistoryFilterModal", true),
    off: () => handleAppRecord("pntHistoryFilterModal", false),
  };

  return (
    <>
      <ListHeader className="gap-x-2">
        {/* dropdown */}
        <Dropdown
          className="text-[13px] h-[30px] w-[85px] pl-[6px]"
          id={dropdownId}
          options={options ?? []}
          onChange={handleDropdown}
          disabledOption={disabledOption}
        />
        <div className="text-xs w-4/6">
          <p>
            {startDate} ~ {today.toISOString().split("T")[0]}
          </p>
        </div>

        {rightButton && buttonUrl ? (
          <Button className="pr-2" type="simple" onClick={handleFilterModal.on}>
            <Image width={19} height={19} src={buttonUrl} alt="" />
          </Button>
        ) : null}
      </ListHeader>
      <Modal id="pntHistoryFilterModal">
        <h2 className="font-medium text-lg">필터</h2>
        <div className="mt-5">
          <ListHeader className="flex-1 !p-0 text-sm font-medium ">
            조회기간
          </ListHeader>

          <ListBody>
            <Tabs className="border-gray-500 border-b -z-10 flex-col !text-sm !border-0">
              <ul className="flex gap-x-3">
                <Tab
                  id="pntHistoryFilter_dropdown"
                  label="1주일"
                  initValue
                  noBg
                  checkbox
                >
                  1주일
                </Tab>
                <Tab id="pntHistoryFilter_dropdown" label="1개월" noBg checkbox>
                  1개월
                </Tab>
                <Tab id="pntHistoryFilter_dropdown" label="3개월" noBg checkbox>
                  3개월
                </Tab>
                <Tab id="pntHistoryFilter_dropdown" label="6개월" noBg checkbox>
                  6개월
                </Tab>
              </ul>
              <Tab
                className="mt-3"
                id="pntHistoryFilter_dropdown"
                label="직접입력"
                noBg
                checkbox
              >
                직접입력(최대 6개월)
              </Tab>
            </Tabs>
            <p className="mt-3 flex gap-x-2">
              <Input
                id="pntHistoryStartDate"
                type="date"
                dateValueId="startDate"
              >
                {startDate}
              </Input>
              <Input id="pntHistoryEndtDate" type="date" dateValueId="endtDate">
                {today.toISOString().split("T")[0]}
              </Input>
            </p>
          </ListBody>
        </div>

        <div className="mt-5">
          <ListHeader className="flex-1 !p-0 text-sm font-medium ">
            포인트 적립/사용 구분
          </ListHeader>

          <ListBody>
            <Tabs className=" border-gray-500 border-b -z-10 flex-col !text-sm !border-0">
              <ul className="flex gap-x-5">
                <Tab
                  id="pntHistoryAccum_dropdown"
                  label="전체"
                  initValue
                  noBg
                  checkbox
                >
                  전체
                </Tab>
                <Tab id="pntHistoryAccum_dropdown" label="적립" noBg checkbox>
                  적립
                </Tab>
                <Tab id="pntHistoryAccum_dropdown" label="사용" noBg checkbox>
                  사용
                </Tab>
              </ul>
            </Tabs>
          </ListBody>
        </div>

        <div className="mt-5">
          <ListHeader className="flex-1 !p-0 text-sm font-medium ">
            포인트 내역 구분
          </ListHeader>

          <ListBody>
            <Tabs className=" border-gray-500 border-b -z-10 flex-col !text-sm !border-0">
              <ul className="flex gap-x-5">
                <Tab
                  id="pntHistoryDivision_dropdown"
                  label="전체"
                  initValue
                  noBg
                  checkbox
                >
                  전체
                </Tab>
                <Tab
                  id="pntHistoryDivision_dropdown"
                  label="일반"
                  noBg
                  checkbox
                >
                  일반
                </Tab>
                <Tab
                  id="pntHistoryDivision_dropdown"
                  label="이벤트"
                  noBg
                  checkbox
                >
                  이벤트
                </Tab>
              </ul>
            </Tabs>
          </ListBody>
        </div>

        <div className="flex gap-x-2">
          <Button className="!h-10" onClick={handleFilterModal.off}>
            취소
          </Button>
          <Button className="!h-10" bgColor="black">
            조회
          </Button>
        </div>
      </Modal>
    </>
  );
}
