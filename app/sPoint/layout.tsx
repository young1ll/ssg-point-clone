import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function SPointLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        hideByScroll
        justify="start"
        pages={staticPageFetch.getPageListByEachName([
          "가맹점 소개",
          "포인트 카드",
          "포인트 서비스",
          "임시 발급 카드 인증",
          "신세계그룹 뉴스레터",
        ])}
        activeTab="underline-primary"
        activeColor="spoint"
      />
      {children}
    </>
  );
}
