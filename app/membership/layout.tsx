import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function MembershipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "신세계포인트 통합 ID 관리",
          "클럽",
          "신세계유니버스 클럽",
        ])}
        activeTab="underline-primary"
        activeColor="membership"
        justify="between"
        hideByScroll
      />
      {children}
    </>
  );
}
