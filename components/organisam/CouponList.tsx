"use client";
import Image from "next/image";
import Button from "../atom/Button";
import Dropdown from "../atom/Dropdown";
import ListHeader from "../atom/ListHeader";
import { useEffect, useState } from "react";
import { useAppContext } from "@/provider/AppContextProvider";
import { dateFormatter, getDDay } from "@/utils/FormatHelpers";
import ListBody from "../atom/ListBody";
import Subtitle from "../atom/Subtitle";

import thisCouponList from "@/data/coupon.json";

type CouponType = {
  id: number;
  name: string;
  thumb: string;
  coupon_icon: string;
  coupon_desc: string;
  fc_icon: string;
  fc_desc: string;
  barcode: string | number;
  start_date: string;
  end_date: string;
};

const dropdownId = "coupon_sort";

export default function CouponList() {
  const { appValueList } = useAppContext();
  const [couponList, setCouponList] = useState<CouponType[]>();
  const [jCouponList, setJCouponList] = useState<CouponType[]>();

  const fetchValue = appValueList[dropdownId];

  const fetchList = [
    {
      name: "마감임박",
      pathname: "/couponPage",
      // url: `http://localhost:3030/coupon?_sort=end_date&_order=asc`,
    },
    {
      name: "최신순",
      pathname: "/couponPage",
      // url: `http://localhost:3030/coupon?_sort=start_date&_order=desc`,
    },
  ];

  useEffect(() => {
    if (fetchValue == "최신순") {
      const sortThiCouponList = thisCouponList.sort(function (a, b) {
        return (
          new Date(b.start_date).getTime() - new Date(a.start_date).getTime()
        );
      });
      setJCouponList(sortThiCouponList);
    } else if (fetchValue == "마감임박") {
      const sortThiCouponList = thisCouponList.sort(function (a, b) {
        return new Date(a.end_date).getTime() - new Date(b.end_date).getTime();
      });
      setJCouponList(sortThiCouponList);
    }
  }, [fetchValue]);

  return (
    <>
      {/* list header */}
      <ListHeader border>
        {/* dropdown */}
        <Dropdown
          id={dropdownId}
          options={fetchList.map((item) => item.name)}
        />

        {/* TODO: download all */}
        <Button type="simple">
          전체다운
          <Image
            width={19}
            height={19}
            src={"/images/icon_download.png"}
            alt="전체다운"
          />
        </Button>
      </ListHeader>

      {/* list body */}
      {/* TODO: ListBody 컴포넌트 */}
      <ListBody>
        {jCouponList &&
          jCouponList.map((coupon) => (
            <li
              key={coupon.id}
              className="flex justify-between gap-x-2 pt-4 border-b"
            >
              <div className="relative h-20">
                {/* coupon list header */}
                <Image
                  src={`https://storage.googleapis.com/ssg-images${coupon.thumb}`}
                  width={80}
                  height={80}
                  // fill
                  alt={coupon.name}
                />
                <div className="relative flex items-center w-full h-10">
                  <Image
                    src={`https://storage.googleapis.com/ssg-images${coupon.coupon_icon}`}
                    width={79}
                    height={40}
                    // fill
                    alt={coupon.name}
                  />
                </div>
              </div>

              {/* coupon list body */}
              <div className="flex flex-col justify-between w-4/5 overflow-hidden">
                <div className="h-20 border-b">
                  <Subtitle className="!pt-0 whitespace-nowrap text-ellipsis overflow-hidden">
                    {coupon.fc_desc}
                  </Subtitle>
                  <p className="pb-3 text-base font-medium whitespace-nowrap text-ellipsis overflow-hidden">
                    {coupon.name}
                  </p>
                  <p className="pb-3 text-gray-500 text-[11px] whitespace-nowrap overflow-hidden text-ellipsis">
                    {dateFormatter(coupon.start_date)} ~{" "}
                    {dateFormatter(coupon.end_date)}
                    {getDDay(coupon.end_date) <= 30 && (
                      <span className="inline-block pl-3 w-1/6 text-red-600 whitespace-nowrap before:inline-block before:mr-3 before:w-[1px] before:h-[10px] before:bg-gray-500">
                        {getDDay(coupon.end_date)}일 남음
                      </span>
                    )}
                  </p>
                </div>

                {/* coupon list body bottom */}
                <div className="flex justify-between py-2">
                  <Image
                    src={`https://storage.googleapis.com/ssg-images${coupon.fc_icon}`}
                    width={20}
                    height={20}
                    alt={coupon.fc_desc}
                  />

                  <Button type="simple">
                    <Image
                      width={18}
                      height={18}
                      src={"/images/icon_download.png"}
                      alt="전체다운"
                    />
                  </Button>
                </div>
              </div>
            </li>
          ))}
      </ListBody>
    </>
  );
}
