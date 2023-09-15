import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function RootSecondLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName(["쿠폰", "홈"])}
      />
      {children}
    </>
  );
}
