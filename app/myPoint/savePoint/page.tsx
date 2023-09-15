import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";

export default function SavePointPage() {
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          포인트 적립을 깜빡하셨나요?{" "}
          <span className="text-benefits font-bold">
            영수증 정보만 입력해 주세요.
          </span>
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          이마트, 신세계백화점, 이마트 에브리데이에서
          <br />
          구매하신 영수증 정보로 포인트 적립이 가능합니다.
        </Subtitle>
      </ContentHeader>

      <div className="pb-10 px-5">
        <ListHeader>영수증 정보 등록</ListHeader>
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg"
          id="affili"
          options={[]}
          title={`제휴사`}
        />
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg"
          id="affili"
          options={[]}
          title={`브랜드`}
        />
        <Dropdown
          className="mb-4 w-full h-12 border rounded-lg text-sm text-gray-600"
          id="affili"
          options={[]}
          title={`매장명`}
          initValue="매장을 선택하세요."
        />
        <Input
          className="mb-4 rounded-lg"
          id="recieptNumber"
          type="text"
          title={"영수증 일련번호"}
        />

        <Button className="mt-4" bgColor="primary">
          등록하기
        </Button>
      </div>

      <div className="p-5 pb-20">유의사항...</div>
    </>
  );
}
