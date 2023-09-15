import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function MyPointLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "포인트 내역",
          "포인트 카드 관리",
          "제휴포인트 카드 관리",
          "포인트 선물",
          "포인트 전환",
          "영수증으로 적립",
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
