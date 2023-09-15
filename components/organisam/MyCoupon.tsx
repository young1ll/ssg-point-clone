"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ListHeader from "../atom/ListHeader";
import Dropdown from "../atom/Dropdown";
import ListBody from "../atom/ListBody";
import Image from "next/image";
import Subtitle from "../atom/Subtitle";
import {
  dateFormatter,
  getDDay,
  dateHyphenSlashConverter,
} from "@/utils/FormatHelpers";
import { FetchListByFetchItem } from "@/utils/Fetch";
import { useAppContext } from "@/provider/AppContextProvider";

import { KEY } from "@/utils/KeyHelper";
import Button from "../atom/Button";

type CouponType = {
  id: number;
  name: string;
  thumb: string;
  coupon_icon: string;
  coupon_desc: string;
  fc_icon: string;
  fc_desc: string;
  barcode: number;
  start_date: string;
  end_date: string;
};

export default function MyCoupon() {
  const currPathname = usePathname();
  const { appValueList } = useAppContext();
  const [couponList, setEventList] = useState([]);

  const myCouponFetchValue = appValueList[KEY.MYCOUPONS];

  const today = dateHyphenSlashConverter(new Date());

  const couponFetchList = [
    // myCoupon
    {
      name: "사용가능 쿠폰-마감임박",
      pathname: "/benefits/myCoupon",
      url: `http://localhost:3030/coupon?_sort=end_date&_order=asc&end_date_gte=${today}`,
    },
    {
      name: "사용가능 쿠폰-최신순",
      pathname: "/benefits/myCoupon",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc&end_date_lte=${today}`,
    },

    // endCoupon
    {
      name: "사용완료/기간만료-전체",
      pathname: "/benefits/endCoupon",
      url: `http://localhost:3030/coupon?_sort=end_date&_order=asc&end_date_gte=${today}`,
    },
    {
      name: "사용완료/기간만료-사용완료",
      pathname: "/benefits/endCoupon",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc&end_date_lte=${today}`,
    },
    {
      name: "사용완료/기간만료-기간만료",
      pathname: "/benefits/endCoupon",
      url: `http://localhost:3030/coupon?_sort=start_date&_order=desc&end_date_lte=${today}`,
    },
  ];

  const whiteList = [...new Set(couponFetchList.map((i) => i.pathname))];
  const usableList = couponFetchList.filter((i) => i.pathname == whiteList[0]);
  const expirationList = couponFetchList.filter(
    (i) => i.pathname == whiteList[1]
  );

  useEffect(() => {
    if (currPathname == whiteList[0]) {
      const thisFetchValue = FetchListByFetchItem(
        myCouponFetchValue as string,
        usableList
      );
      thisFetchValue
        .then((v) => {
          setEventList(v);
        })
        .catch((e) => console.log(e));
    } else if (currPathname == whiteList[1]) {
      const thisFetchValue = FetchListByFetchItem(
        myCouponFetchValue as string,
        expirationList
      );
      thisFetchValue
        .then((v) => {
          setEventList(v);
        })
        .catch((e) => console.log(e));
    }
  }, [myCouponFetchValue]);

  return (
    <>
      <div className={`px-5`}>
        {currPathname === whiteList[0] ? (
          <>
            {/* list header */}
            <ListHeader border>
              {/* dropdown */}
              <Dropdown
                id={KEY.MYCOUPONS}
                options={usableList.map((i) => i.name)}
              />
            </ListHeader>
          </>
        ) : currPathname === whiteList[1] ? (
          <>
            {/* list header */}
            <ListHeader border>
              {/* dropdown */}
              <Dropdown
                id={KEY.MYCOUPONS}
                options={expirationList.map((i) => i.name)}
              />
            </ListHeader>
          </>
        ) : (
          ""
        )}
      </div>

      {/* ------ My Coupon List Body ------ */}
      <div className="px-5">
        <ListBody>
          {couponList ? (
            couponList.map((coupon: CouponType) => (
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

                {/* my coupon list body */}
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

                  {/* my coupon list body bottom */}
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
            ))
          ) : (
            <div>
              <div className="py-12">
                <p className="relative pt-16 text-center text-gray-500 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[48px] after:h-[48px] after:bg-[url('/images/resources/no_content.png')] after:bg-no-repeat after:bg-[100%_auto]">
                  보유하신 제휴 신용카드가 없습니다.
                </p>
              </div>
            </div>
          )}
        </ListBody>
      </div>
    </>
  );
}
