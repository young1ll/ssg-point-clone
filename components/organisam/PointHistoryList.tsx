"use client";
import IndexIcon from "../atom/IndexIcon";
import IndexStat from "../atom/IndexStat";
import ListBody from "../atom/ListBody";
import Paper from "../atom/Paper";
import Subtitle from "../atom/Subtitle";
import Tab from "../atom/Tab";
import TabPannel from "../atom/TabPannel";
import Tabs from "../atom/Tabs";
import BoardListHeader from "../module/BoardListHeader";

import { KEY } from "@/utils/KeyHelper";
import pntHistoryJson from "@/data/pointTest.json";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useAppContext } from "@/provider/AppContextProvider";
import { PointType } from "./MyPointList";

export default function PointHistoryList() {
  const session = useSession();
  const [pageNum, setPageNum] = useState(1);
  const [thisPntList, setThisPntList] = useState<PointType>();

  const { appValueList, handleAppRecord } = useAppContext();
  const UUID = session.data?.user?.user?.uuid;
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();
  const thisDate = new Date(year, month, day + 2).toISOString().split("T")[0];
  const aWeekAgo = new Date(year, month, day - 5).toISOString().split("T")[0];
  const aMonthAgo = new Date(year, month - 1, day).toISOString().split("T")[0];
  const thMonthAgo = new Date(year, month - 3, day).toISOString().split("T")[0];
  const sixMonthAgo = new Date(year, month - 6, day)
    .toISOString()
    .split("T")[0];

  const thisFetchList = [
    {
      name: "1주일",
      pathname: "",
      url: `http://3.35.193.212:8000/api/v1/point-list?UUID=${UUID}&startDate=${aWeekAgo}&endDate=${thisDate}&pointUse=${"0"}&pointType=${"0"}`,
    },
    {
      name: "1개월",
      pathname: "",
      url: `http://3.35.193.212:8000/api/v1/point-list?UUID=${UUID}&sartDate=${aMonthAgo}&endDate=${thisDate}&pointUse=${"0"}&pointType=${"0"}`,
    },
    {
      name: "3개월",
      pathname: "",
      url: `http://3.35.193.212:8000/api/v1/point-list?UUID=${UUID}&sartDate=${thMonthAgo}&endDate=${thisDate}&pointUse=${"0"}&pointType=${"0"}`,
    },
    {
      name: "6개월",
      pathname: "",
      url: `http://3.35.193.212:8000/api/v1/point-list?UUID=${UUID}&sartDate=${sixMonthAgo}&endDate=${thisDate}&pointUse=${"0"}&pointType=${"0"}`,
    },
    {
      name: "직접입력",
      pathname: "",
      url: ``,
    },
  ];

  const fetchPntList = async (url: any) => {
    const res = await fetch(url, {
      // mode: "no-cors",
      method: "GET",
      headers: {
        "Content-Type": "Application/json",
        Authorization: `Bearer ${session.data?.user?.access_token}`,
      },
    });
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const param = thisFetchList.find(
      (i) => i.name === appValueList[KEY.PNTDROPDOWN]
    );
    const startDate = appValueList["pntHistoryStartDate"];
    const endDate = appValueList["pntHistoryEndtDate"];
    const pointUse = 0;
    const pointType = 0;

    if (param && param.url) {
      const res = fetchPntList(param.url);
      res.then((i) => {
        console.log(i);
        setThisPntList(i);
      });
    }
  }, [appValueList[KEY.PNTDROPDOWN]]);

  return (
    <>
      <div className="pt-5 px-5">
        <Tabs className="border-gray-500 border-b -z-10">
          <Tab
            id="pntHistorySort"
            label="pntHistoryAll"
            activeColor="benefits"
            initValue
            noBg
          >
            전체
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryAccum"
            activeColor="benefits"
            noBg
          >
            적립/사용
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryGift"
            activeColor="benefits"
            noBg
          >
            선물
          </Tab>
          <Tab
            id="pntHistorySort"
            label="pntHistoryConv"
            activeColor="benefits"
            noBg
          >
            전환
          </Tab>
        </Tabs>

        <BoardListHeader
          dropdownId={KEY.PNTDROPDOWN}
          options={thisFetchList.map((i) => i.name)}
          rightButton
          buttonUrl="/images/icon_filter.png"
        />

        <TabPannel className="!p-0" id="pntHistorySort" label="pntHistoryAll">
          <Paper className="felx py-3 !px-0" bgColor="bg-[#f8f8f8]">
            {/* TODO: 적립, 사용 포인트 props */}
            <IndexStat className="inline-flex" type="accumulate" />
            <IndexStat className="inline-flex" type="consumption" />
          </Paper>

          <ListBody className="pb-20">
            {/* {pntHistoryJson.content.map((content) => ( */}
            {thisPntList?.content?.map((item) => (
              <li
                key={item.pointId}
                className="flex justify-between py-3 border-b"
              >
                <div className={`flex gap-x-2 text-benefits`}>
                  <IndexIcon className="mt-1" type="accumulate" />
                  <p className="text-[13px] leading-[21px] font-medium w-[80px]">
                    {item.point}P
                    <span className="block text-[11px]">
                      {item.type}
                      {item.statusType}
                    </span>
                  </p>
                </div>

                <div className="w-4/6">
                  <p className="text-sm">{item.title}</p>
                  <Subtitle className="!pt-1 !text-[10px]">
                    {item.content}
                  </Subtitle>
                </div>

                <div className="min-w-[62px]">
                  <Subtitle className="!pt-1 !text-[10px]">
                    {item.createdDate?.split("T")[0] }
                  </Subtitle>
                </div>
              </li>
            ))}
            {thisPntList?.last != false ? "more" : ""}
          </ListBody>
        </TabPannel>
      </div>
    </>
  );
}
