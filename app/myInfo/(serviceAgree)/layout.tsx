import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import ClubAgreePage from "./clubAgree/page";
import ServiceAgreePage from "./serviceAgree/page";

export default function ServiceAgreeLayout() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">서비스 동의 관리 </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          신세계포인트의 다양한 서비스 혜택을 받을 수 있습니다.
        </Subtitle>
      </ContentHeader>

      <Tabs>
        <Tab
          id="serviceAgreeTag"
          label="service"
          urlBased="/myInfo/serviceAgree"
          activeColor="benefits"
        >
          서비스 동의
        </Tab>
        <Tab
          id="serviceAgreeTag"
          label="club"
          urlBased="/myInfo/clubAgree"
          activeColor="benefits"
        >
          클럽 동의
        </Tab>
      </Tabs>

      <TabPannel className="px-0" id="serviceAgreeTag" label="service">
        <ServiceAgreePage />
      </TabPannel>

      <TabPannel className="px-0" id="serviceAgreeTag" label="club">
        <ClubAgreePage />
      </TabPannel>
    </>
  );
}
