import FormCert from "@/components/organisam/FormCert";
import TabbarHeader from "@/components/TabbarHeader";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";

export default function CertLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">본인인증</ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          개인정보 보호를 위해 본인인증을 진행하고 있습니다. 자주 사용하시는
          인증수단을 선택해주세요.
        </Subtitle>
      </ContentHeader>

      <FormCert />
      {children}
    </>
  );
}
