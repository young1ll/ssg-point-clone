import Button from "@/components/atom/Button";
import Checkbox from "@/components/atom/Checkbox";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Dropdown from "@/components/atom/Dropdown";
import Input from "@/components/atom/Input";
import Subtitle from "@/components/atom/Subtitle";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import InputCard from "@/components/module/InputCard";
import Image from "next/image";

export default function RegAffiliatePntCardPage() {
  const afilliTab = "affiliTab";
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <ContentTitle>
          신세계포인트에{" "}
          <span className="text-benefits font-bold">제휴사 포인트 </span>{" "}
          더하기!
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          이마트 제휴 멤버십 포인트 카드를 등록하면
          <br />
          신세계포인트와 제휴사 포인트를
          <br />
          모두 적립할 수 있어요.
        </Subtitle>
      </ContentHeader>

      <Tabs>
        <Tab
          className={`relative p-3`}
          id={afilliTab}
          label="samsungMembership"
          activeColor="benefits"
          initValue
        >
          삼성전자
          <br />
          멤버십
        </Tab>
        <Tab
          className="relative p-3"
          id={afilliTab}
          label="koreanAir"
          activeColor="benefits"
        >
          대한항공
        </Tab>
        <Tab
          className="relative p-3"
          id={afilliTab}
          label="asiana"
          activeColor="benefits"
        >
          아시아나항공
        </Tab>
      </Tabs>

      <TabPannel id={afilliTab} label="samsungMembership">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/samsung_membership.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적용상품</dt>
          <dd>
            삼성전자가 공급한 제품
            <br />
            (이마트 내 삼성전자 매장)
          </dd>
        </dl>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>구매 금액의 0.2% 신세계포인트와 동시적립</dd>
        </dl>
      </TabPannel>
      <TabPannel id={afilliTab} label="koreanAir">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/korean_air.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>
            최종 7만원 이상 결제 시 3,000원당
            <br />
            1마일 신세계포인트와 동시 적립
            <p className="text-[11px] text-gray-500">
              ※ 항공사 마일리지간 선택 적립/월 1,000마일 한도
            </p>
          </dd>
        </dl>
      </TabPannel>
      <TabPannel id={afilliTab} label="asiana">
        <p className="pb-4">
          <Image
            src={"/images/resources/myPoint/asiana.png"}
            width={120}
            height={32}
            alt=""
          />
        </p>
        <dl className="flex text-[13px] leading-[21px]">
          <dt className="min-w-[64px] font-medium">적립</dt>
          <dd>
            최종 7만원 이상 결제 시 3,000원당
            <br />
            1마일 신세계포인트와 동시 적립
            <p className="text-[11px] text-gray-500">
              ※ 항공사 마일리지간 선택 적립/월 1,000마일 한도
            </p>
          </dd>
        </dl>
      </TabPannel>

      <div className="mb-10 p-5 space-y-2 border-b">
        <div className="flex items-center justify-between">
          <p className="text-sm">
            [필수] 제휴 멤버십 포인트 개인정보 수집 및 이용 동의
          </p>
          <span className="block text-xs indent-[-99em] w-6 h-full opacity-50 bg-[url('/images/arrow_left.png')] bg-[7px_auto] bg-center rotate-180 bg-no-repeat">
            내용보기
          </span>
        </div>
        <Checkbox
          className="text-sm"
          id={"samsungmembership_chk"}
          name={`동의합니다.`}
        />
      </div>

      <div className="px-5 pb-10">
        <div className="pb-4">
          <p className="text-[13px] pb-2 leading-[21px]">제휴 멤버십 선택</p>
          <Dropdown
            className="w-full h-12 border rounded-lg"
            id=""
            options={[]}
          />
        </div>

        <InputCard id="regAffiliCard" />

        <div className="pt-10">
          <Button bgColor="primary">등록하기</Button>
        </div>
      </div>

      <div className="p-5 pb-20">유의사항...</div>
    </>
  );
}
