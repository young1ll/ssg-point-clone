import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import Underline from "@/components/atom/UnderLine";

export default function HistoryPage() {
  const pointIcon =
    "after:inline-block after:ml-2 after:w-[33px] after:h-[30px] after:bg-[100%_auto] after:bg-[url('/images/resources/point_gradi.png')] after:bg-no-repeat";
  return (
    <>
      <ContentHeader className="mt-[36px]">
        <Subtitle className="!pt-2 leading-[1.71] !text-sm tracking-[-.25px] !mb-2">
          <Underline className="">{"조영일"}</Underline>
          님과 신세계포인트는
          <br />
          올해 이렇게 함께했어요.
        </Subtitle>
        <div className="pt-4">
          <Subtitle className="text-sm !tracking-wide">
            2023-01-01 ~ 2023-09-05
          </Subtitle>
        </div>
      </ContentHeader>

      <div className="px-5">
        <ListHeader className="border-t h-[74px]">
          <div className="pl-2 text-[13px]">
            <p>신세계포인트</p>
            <p>(사용가능)</p>
          </div>
          <p
            className={`flex justify-end text-2xl leading-7 font-bold ${pointIcon}`}
          >
            1
          </p>
        </ListHeader>

        <Card
          className="w-full mx-auto p-[2px] bg-gradient-primary-line !rounded-3xl"
          shadow
          fit
        >
          <Card className="!rounded-[21px] !p-4 !h-[200px] flex">
            <div className="flex-1 flex flex-col justify-between h-full pl-2 text-[13px]">
              <div>
                <p>신세계포인트</p>
                <p>이용</p>
              </div>
              <p>2023년</p>
            </div>

            <div className="flex-1 flex gap-x-14 text-[13px]">
              <div className="flex flex-col justify-end h-full pt-[30px]">
                <div className="relative h-full w-6 mb-4 rounded-[30px] bg-mypoint">
                  <span className="absolute block top-[-30px] left-1/2 -translate-x-1/2 h-[22px] text-[11px] rounded-md px-2 pt-[2px] text-white bg-mypoint z-[1]">
                    13P
                  </span>
                </div>
                <p>적립</p>
              </div>
              <div className="flex flex-col justify-end h-full pt-[30px]">
                <div className="relative h-full w-6 mb-4 rounded-[30px] bg-[#5c1880]">
                  <span className="absolute block top-[-30px] left-1/2 -translate-x-1/2 h-[22px] text-[11px] rounded-md px-2 pt-[2px] text-white bg-[#5c1880] z-[1]">
                    12P
                  </span>
                </div>
                <p>사용</p>
              </div>
            </div>
          </Card>
        </Card>

        <ListBody>
          <li className="flex justify-between items-center h-[74px] border-b">
            <div className="pl-2 text-[13px]">
              <p>신세계포인트</p>
              <p>방문 일수</p>
            </div>
            <div className="pr-5">
              <p className={`flex justify-end items-end leading-7 text-xs`}>
                <span className="text-2xl font-bold mr-1">0</span>일
              </p>
            </div>
          </li>
          <li className="flex justify-between items-center h-[74px] border-b">
            <div className="pl-2 text-[13px]">
              <p>신세계포인트</p>
              <p>구매 금액</p>
            </div>
            <div className="pr-5">
              <p className={`flex justify-end items-end leading-7 text-xs`}>
                <span className="text-2xl font-bold mr-1">0</span>원
              </p>
            </div>
          </li>
        </ListBody>
      </div>

      <ContentHeader className="">
        <ContentTitle className="leading-[30px]">
          <Underline className="">{"조영일"}</Underline>고객님이
          <br />
          자주 방문하는 브랜드
        </ContentTitle>
      </ContentHeader>
      <ListBody>{}</ListBody>

      <ContentHeader className="">
        <ContentTitle className="leading-[30px]">
          <Underline className="">{"조영일"}</Underline>고객님이
          <br />
          많이 쇼핑하는 브랜드
        </ContentTitle>
      </ContentHeader>
      <ListBody>{}</ListBody>
    </>
  );
}
