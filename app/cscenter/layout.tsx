import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function CscenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        hideByScroll
        justify="between"
        pages={staticPageFetch.getPageListByEachName([
          "공지사항",
          "FAQ",
          "1:1상담",
        ])}
        activeTab="underline-primary"
        activeColor="cscenter"
      />
      {children}
    </>
  );
}
