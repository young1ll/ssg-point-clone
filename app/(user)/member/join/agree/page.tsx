import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import StepNavigation from "@/components/atom/StepNavigation";
import Subtitle from "@/components/atom/Subtitle";
import FormAgree from "@/components/organisam/FormAgree";

export default function AgreePage() {
  return (
    <>
      <ContentHeader>
        <StepNavigation />
        <ContentTitle>약관동의</ContentTitle>
      </ContentHeader>

      <FormAgree />
    </>
  );
}
