import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import Subtitle from "@/components/atom/Subtitle";
import InputCard from "@/components/module/InputCard";

export default function RegPntCardPage() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          신세계포인트 카드를
          <br />
          <span className="text-benefits font-bold">직접 바로 등록</span>
          하실 수 있어요.
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          아직 등록되지 않은 신세계포인트 카드를
          <br />
          직접 등록하실 수 있습니다.
          <br />
          수령하신 포인트 카드 정보를 입력해 주세요.
        </Subtitle>
      </ContentHeader>

      {/* ------ FormRegPnt ------ */}
      <div className="px-5">
        <InputCard id="regPntCard" name="카드번호를 입력해주세요." />

        <Input
          title="카드 CVC"
          className="rounded-lg mb-5"
          id="pntCardCvc"
          type="cardNumber"
        >
          3자리 숫자를 입력하세요
        </Input>

        <Dropdown
          className="w-full border h-12 rounded-lg mb-5"
          title="카드 수령 제휴사"
          id="pntCardAffili"
          options={[]}
        />

        <Dropdown
          className="w-full border h-12 rounded-lg"
          title="등록 매장"
          id="pntCardRegStore"
          options={[]}
        />

        <div className="flex gap-x-2 py-10">
          <Button className="text-gray-500">취소</Button>
          <Button bgColor="primary">등록하기</Button>
        </div>
      </div>
    </>
  );
}
