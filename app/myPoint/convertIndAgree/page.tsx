import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";

export default function ConvertIndAgreePage() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          포인트 전환을 위하여
          <br />
          아래 <span className="text-benefits font-medium">약관에 동의</span>해
          주세요.
        </ContentTitle>
      </ContentHeader>
    </>
  );
}
