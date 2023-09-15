import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import FormCert from "@/components/organisam/FormCert";

export default function FindIdPwPage() {
  return (
    <>
      <ContentHeader>
        <ContentTitle>
          아이디가
          <br /> 생각나지 않으세요?
        </ContentTitle>
        <Subtitle>본인인증 후 아이디를 확인하실 수 있습니다.</Subtitle>
      </ContentHeader>

      <FormCert />
    </>
  );
}
