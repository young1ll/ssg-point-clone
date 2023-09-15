import TabbarHeader from "@/components/TabbarHeader";
import { staticPageFetch } from "@/utils/StaticFetch";

export default function MyInfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <TabbarHeader
        pages={staticPageFetch.getPageListByEachName([
          "광고정보 수신관리",
          "서비스 동의관리",
          "회원정보 수정",
          "비밀번호 변경",
          "회원 탈퇴",
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
