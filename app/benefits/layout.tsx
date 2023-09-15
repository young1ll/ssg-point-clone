import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function BenefitsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "포인트 플러스",
          "나의 운세보기",
          "마이 쿠폰함",
          "마이 이벤트",
          "포인트 꿀팁",
        ])}
        activeTab="underline-primary"
        activeColor="benefits"
        justify="start"
        hideByScroll
      />
      {children}
    </>
  );
}
