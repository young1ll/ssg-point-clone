import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";

export default function PntTipPages() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          <span className="text-benefits font-bold">포인트 적립</span>
          스마트하게!
        </ContentTitle>
        <Subtitle className="!pt-2">
          보기만 해도 쌓이는 초간단 꿀팁을
          <br />
          지금 바로 확인하세요.
        </Subtitle>
      </ContentHeader>
      <div className="px-5">
        <Button bgColor="primary">확인하기</Button>
      </div>
    </>
  );
}
