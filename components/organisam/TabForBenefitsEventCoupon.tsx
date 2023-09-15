"use client";
import { usePathname } from "next/navigation";
import Tab from "../atom/Tab";
import Tabs from "../atom/Tabs";

export default function TabForBenefitsEventCoupon() {
  const pathName = usePathname();
  const couponPagelist = ["/benefits/myCoupon", "/benefits/endCoupon"];
  const eventPagelist = ["/benefits/myEvent", "/benefits/winEvent"];

  if (couponPagelist.includes(pathName)) {
    return (
      <Tabs className="mt-[36px]">
        <Tab
          id="pntPlusPage"
          label="attend"
          activeColor="benefits"
          urlBased="/benefits/myCoupon"
        >
          사용가능 쿠폰
        </Tab>
        <Tab
          id="pntPlusPage"
          label="roulette"
          activeColor="benefits"
          urlBased="/benefits/endCoupon"
        >
          사용완료/기간만료 쿠폰
        </Tab>
      </Tabs>
    );
  } else if (eventPagelist.includes(pathName)) {
    return (
      <>
        <Tabs className="mt-[36px]">
          <Tab
            id="pntPlusPage"
            label="attend"
            activeColor="benefits"
            urlBased="/benefits/myEvent"
          >
            참여한 이벤트
          </Tab>
          <Tab
            id="pntPlusPage"
            label="roulette"
            activeColor="benefits"
            urlBased="/benefits/winEvent"
          >
            당첨 확인
          </Tab>
        </Tabs>
      </>
    );
  }
}
