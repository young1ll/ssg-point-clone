import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import StepNavigation from "@/components/atom/StepNavigation";
import Subtitle from "@/components/atom/Subtitle";
import FormInfo from "@/components/organisam/FormInfo";

export default function FormPage() {
  return (
    <>
      <ContentHeader>
        <StepNavigation />
        <ContentTitle>정보입력</ContentTitle>
        <Subtitle>필수 정보를 입력해주세요.</Subtitle>
      </ContentHeader>
      <FormInfo />
    </>
  );
}
