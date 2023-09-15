"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ListHeader from "../atom/ListHeader";
import Dropdown from "../atom/Dropdown";
import ListBody from "../atom/ListBody";
import Image from "next/image";
import Subtitle from "../atom/Subtitle";
import { dateHyphenSlashConverter, getDDay } from "@/utils/FormatHelpers";
import Link from "next/link";
import { FetchListByFetchItem, fetchThisItem } from "@/utils/Fetch";
import { useAppContext } from "@/provider/AppContextProvider";

import thisEventList from "@/data/event.json";

type EventType = {
  id: number;
  name: string;
  thumb: string;
  banner_thumb: string;
  win_date: string;
  start_date: string;
  end_date: string;
};

export default function EventList({
  eventFetchList,
}: {
  eventFetchList: any[];
}) {
  const currPathname = usePathname();
  const { appValueList } = useAppContext();
  const [eventList, setEventList] = useState<EventType[]>();
  const [jEventList, setJEventList] = useState<EventType[]>();

  useEffect(() => {
    if (currPathname == "/ingevents") {
      const fetching = FetchListByFetchItem(
        appValueList["event_dropdown"] as string,
        eventFetchList
      );
      fetching.then((i) => setEventList(i));

      const ingList = thisEventList.filter(
        (i) => new Date(i.end_date).getTime() - new Date().getTime() > 0
      );

      if (appValueList["event_dropdown"] == "최신순") {
        const sortList = ingList.sort(function (a, b) {
          return (
            new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
          );
        });
        setJEventList(sortList);
      } else if (appValueList["event_dropdown"] == "마감임박") {
        const sortList = ingList.sort(function (a, b) {
          return (
            new Date(a.end_date).getTime() - new Date(b.end_date).getTime()
          );
        });
        setJEventList(sortList);
      }
    } else {
      const fetching = FetchListByFetchItem(
        eventFetchList[0].name,
        eventFetchList
      );
      fetching.then((i) => setEventList(i));

      if (currPathname == "/endevents") {
        const endList = thisEventList.filter(
          (i) => new Date(i.end_date).getTime() - new Date().getTime() <= 0
        );
        setJEventList(endList);
      } else if (currPathname == "/winevents") {
        const endList = thisEventList.filter(
          (i) => i.win_date && i.win_date !== "null"
        );
        setJEventList(endList);
      }
    }
  }, [appValueList["event_dropdown"]]);

  const today = dateHyphenSlashConverter(new Date());

  return (
    <>
      <div className={`mt-[36px] `}>
        {currPathname === "/ingevents" ? (
          <>
            {/* list header */}
            <ListHeader>
              {/* dropdown */}
              <Dropdown
                id={"event_dropdown"}
                options={eventFetchList.map((i) => i.name)}
              />
            </ListHeader>
          </>
        ) : (
          <></>
        )}
      </div>

      {/* ------------------ Event List Body ------------------ */}
      <ListBody className="">
        {jEventList &&
          jEventList.map((item: EventType) => (
            <li className="group" key={item.id}>
              <Link
                className="relative"
                href={{
                  pathname: `${currPathname}/detail`,
                  query: { eventNo: item.id },
                }}
              >
                {item.end_date < dateHyphenSlashConverter(today, true) ? (
                  <div
                    className={`absolute flex items-center h-full w-full bg-black bg-opacity-50 ${
                      item.win_date !== "null"
                        ? "before:absolute before:block before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[120px] before:h-[120px] before:bg-[url('/images/resources/event_info_bg.png')] before:bg-no-repeat before:bg-[100%_auto] before:bg-top"
                        : ""
                    }`}
                  >
                    {item.win_date !== "null" ? (
                      <span className="relative flex justify-center bg-clip-text text-transparent items-center w-[100px] h-[100px] text-[20px] bg-gradient-primary-clip font-semibold mx-auto ">
                        당첨발표
                      </span>
                    ) : (
                      <span className="flex justify-center items-center text-[20px] text-white font-semibold w-[120px] h-[120px] mx-auto bg-[url('/images/resources/event_info_bg.png')] bg-no-repeat bg-[100%_auto] bg-bottom">
                        종료
                      </span>
                    )}
                  </div>
                ) : (
                  getDDay(item.end_date) <= 30 && (
                    <div className="flex w-[82px] h-[56px] justify-center absolute top-[10px] right-[5px] bg-[url('/images/resources/dday_box.png')] bg-[100%_auto]">
                      <span className="text-sm font-bold pt-3 bg-gradient-primary-clip bg-clip-text text-transparent">
                        {getDDay(item.end_date)}일 남음
                      </span>
                    </div>
                  )
                )}

                <Image
                  className="group-hover:max-w-[102%] group-hover:-ml-[1%] transition-all duration-200"
                  src={`https://storage.googleapis.com/ssg-images${item.thumb}`}
                  width={750}
                  height={450}
                  alt=""
                />
              </Link>
              <div className="px-5 pt-2 pb-5 group-hover:underline">
                <p className="text-base font-medium text-left whitespace-nowrap text-ellipsis overflow-hidden">
                  {item.name}
                </p>
                <Subtitle className="!pt-1">
                  {`${item.start_date} ~ ${item.end_date}`}
                </Subtitle>
              </div>
            </li>
          ))}
      </ListBody>
    </>
  );
}
