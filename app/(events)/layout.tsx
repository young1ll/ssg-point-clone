import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "진행 이벤트",
          "종료 이벤트",
          "당첨 확인",
        ])}
        activeTab="underline-primary"
        activeColor="benefits"
        justify="between"
        hideByScroll
      />
      {children}
    </>
  );
}
