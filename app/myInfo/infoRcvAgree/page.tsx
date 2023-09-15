import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import FormRcvAgree from "@/components/organisam/FormRcvAgree";

export default function InfoRcvAgreePage() {
  const linkRightArrow =
    "before:absolute before:right-0 before:top-1/2 before:w-[6px] before:h-[10px] before:mt-[-4.5px] before:bg-[url('/images/arrow_left.png')] before:bg-[100%_auto] before:rotate-180 before:opacity-40";

  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <span className="font-bold text-mypoint">나에게 딱 알맞는 정보</span>
          를 원한다면!
        </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          광고정보 수신동의를 하시면 신세계포인트의
          <br />
          다양한 혜택과 소식을 받으실 수 있습니다.
        </Subtitle>
      </ContentHeader>

      <div className="px-5 pb-10">
        <ListHeader border>등록된 연락처 정보를 확인하세요.</ListHeader>
        <ListBody className="space-y-2">
          <dl>
            <dt>휴대폰 번호</dt>
            <dd>
              <Subtitle className="!pt-1">{`010-49**-89**`}</Subtitle>
            </dd>
          </dl>
          <dl>
            <dt>이메일</dt>
            <dd>
              <Subtitle className="!pt-1">{``}</Subtitle>
            </dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>
              <Subtitle className="!pt-1">{`부산 해운대구 양운로, *****`}</Subtitle>
            </dd>
          </dl>
        </ListBody>
      </div>

      <Card className="mx-5" border shadow>
        <p className="text-[13px]">
          <strong className="text-[14px]">
            연락처 정보 변경이 필요하시나요?
          </strong>
          <br />
          회원정보 수정 메뉴에서 변경하실 수 있습니다.
        </p>
        <button className={`relative text-sm mt-5 pr-3 ${linkRightArrow}`}>
          회원정보 수정
        </button>
      </Card>

      <FormRcvAgree />

      <div>유의사항...</div>
    </>
  );
}
