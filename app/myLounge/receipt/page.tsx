import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import FormReceipt from "@/components/organisam/FormReceipt";

export default function ReceiptPage() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <span className="text-benefits font-medium">가맹점 영수증</span> 모두
          모여라!
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          신세계포인트를 적립했다면?
          <br />
          가맹점에서 쇼핑한 영수증을
          <br />한 곳에 모아 스마트하게 확인하세요.
        </Subtitle>
      </ContentHeader>

      <FormReceipt />
    </>
  );
}
