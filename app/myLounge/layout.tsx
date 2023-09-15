import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function MyLoungeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "쇼핑 히스토리",
          "추천 서비스",
          "스마트 영수증",
          "매장 찾기",
          "자주 찾는 매장",
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
