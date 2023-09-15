import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import Tab from "@/components/atom/Tab";
import TabPannel from "@/components/atom/TabPannel";
import Tabs from "@/components/atom/Tabs";
import PointServiceTabHeader from "@/components/organisam/PointServiceTabHeader";
import Image from "next/image";

export default function PointServicePage() {
  const tabKey = "spointService";
  const tab1 = "emart";
  const tab2 = "shinsegae";
  const tab3 = "ssg";
  const tab4 = "emart_everyday";
  const tab5 = "emart24";
  const tab6 = "etc";

  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            포인트 적립·사용부터
            <br />
            <span className="font-bold text-spoint">
              나의 라이프스타일에 딱 맞는 서비스까지
            </span>
          </ContentTitle>
          <Subtitle>
            신세계포인트는 일상에서 특별한 경험까지 고객과 함께 합니다.
          </Subtitle>
        </ContentHeader>
      </div>

      <PointServiceTabHeader />

      {/* ------ Tab 시작 ------ */}
      <Tabs className="h-16 border-y border-gray-200">
        <Tab
          className={`relative p-[2px] rounded-none`}
          id={tabKey}
          label={tab1}
          activeColor="spoint"
          initValue
        >
          <Image
            className="mx-auto"
            src={"/images/resources/sPoint/emart.png"}
            width={60}
            height={60}
            alt={tab1}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab2}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={"/images/resources/sPoint/shinsegae.png"}
            width={60}
            height={60}
            alt={tab2}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab3}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={"/images/resources/sPoint/ssg.png"}
            width={60}
            height={60}
            alt={tab3}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab4}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={"/images/resources/sPoint/emart_everyday.png"}
            width={60}
            height={60}
            alt={tab4}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab5}
          activeColor="spoint"
        >
          <Image
            className="mx-auto"
            src={"/images/resources/sPoint/emart24.png"}
            width={60}
            height={60}
            alt={tab5}
          />
        </Tab>
        <Tab
          className="relative p-[2px] rounded-none"
          id={tabKey}
          label={tab6}
          activeColor="spoint"
        >
          <span className="text-[10px] whitespace-nowrap">기타제휴사</span>
        </Tab>
      </Tabs>

      {/* ------ Tab Pannels ------ */}

      <TabPannel id={tabKey} label={tab1}>
        <ListHeader className="text-sm font-medium" border>
          이마트/이마트 트레이더스
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={10}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드/KB국민카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>일반 직불카드</td>
            </tr>
            <tr>
              <td>현금 IC카드</td>
            </tr>
            <tr>
              <td>우리제휴직불카드</td>
            </tr>
            <tr>
              <td>신한제휴직불카드</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[이마트] 신한카드</td>
              <td className="bold">7포인트</td>
            </tr>
          </tbody>
        </table>
        <dl className="border-b px-[10px] py-[15px]">
          <dt className="text-xs pb-1">
            이마트 전문점에서도 동일하게 적용됩니다.
          </dt>
          <dd className="text-xs break-keep text-gray-500">
            노브랜드, 데이즈, 몰리스, 베이비서클, 쇼앤탤, PK마켓, 이마트
            문화센터, 일렉트로마트, 토이킹덤, 하우디
          </dd>
        </dl>
      </TabPannel>
      <TabPannel id={tabKey} label={tab2}>
        <ListHeader className="text-sm font-medium" border>
          신세계백화점
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={4}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드/신한카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
              <td className="bold" rowSpan={2}>
                2포인트
              </td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>직불카드 (일반/우리제휴카드)</td>
              <td className="bold">10포인트</td>
            </tr>
            <tr>
              <td>직불카드 (신한제휴카드)</td>
              <td className="bold">15포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab3}>
        <ListHeader className="text-sm font-medium" border>
          SSG.COM
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={5}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] SC카드</td>
            </tr>
            <tr>
              <td>[신세계] SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티(체크,신용)카드</td>
              <td className="bold">2포인트</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
              <td className="bold" rowSpan={2}>
                7포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 신한카드/삼성카드/e카드</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab4}>
        <ListHeader className="text-sm font-medium" border>
          이마트 에브리데이
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td>현금, 상품권, 일반 신용카드</td>
              <td className="bold" rowSpan={7}>
                1포인트
              </td>
            </tr>
            <tr>
              <td>[이마트] 삼성카드/e카드/SC카드</td>
            </tr>
            <tr>
              <td>[신세계] 씨티카드/SC체크카드/하나카드/신한카드/BC바로카드</td>
            </tr>
            <tr>
              <td>[신세계/트레이더스] 삼성카드</td>
            </tr>
            <tr>
              <td>[SSG.COM] SSG.COM카드</td>
            </tr>
            <tr>
              <td>[SSGPAY] SSG카드</td>
            </tr>
            <tr>
              <td>현금 IC카드</td>
            </tr>
            <tr>
              <td>직불카드 (일반/우리제휴카드)</td>
              <td className="bold">5포인트</td>
            </tr>
            <tr>
              <td>[이마트] 우리체크카드</td>
              <td className="bold">6포인트</td>
            </tr>
            <tr>
              <td>[이마트] 신한카드</td>
              <td className="bold">7포인트</td>
            </tr>
            <tr>
              <td>직불카드 (신한제휴카드)</td>
              <td className="bold">10포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab5}>
        <ListHeader className="text-sm font-medium" border>
          이마트24
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-25px]"
                  src={"/images/resources/sPoint/emart24.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">현금, 상품권, 일반 신용카드</span>
              </td>
              <td className="bold">5포인트</td>
            </tr>
          </tbody>
        </table>
      </TabPannel>
      <TabPannel id={tabKey} label={tab6}>
        <ListHeader className="text-sm font-medium" border>
          기타 제휴사
        </ListHeader>
        <table className="basic_table">
          <tbody>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/starbucks.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스타벅스</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/outlets.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">프리미엄 아울렛</span>
              </td>
              <td className="bold" rowSpan={7}>
                1포인트
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/dutyfree.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="block leading-[14px]">
                  신세계면세점
                  <br />
                  (신세계온라인면세점)
                </span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={"/images/resources/sPoint/factorystore.png"}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">신세계팩토리스토어</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/starfield.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스타필드</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={"/images/resources/sPoint/tvshopping.png"}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">신세계TV쇼핑</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/resort.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">조선호텔</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/youngrangho.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">신세계 영랑호리조트</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/food.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">신세계푸드</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/casa.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">CASAMIA</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/smoothieking.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">스무디킹</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto pb-2"
                  src={"/images/resources/sPoint/chicor.png"}
                  width={70}
                  height={40}
                  alt=""
                />
                <span className="">시코르</span>
              </td>
            </tr>
            <tr>
              <td className="text-center">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/gmarket.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">G마켓</span>
              </td>
              <td className="text-center border-l">
                <Image
                  className="mx-auto my-[-15px]"
                  src={"/images/resources/sPoint/aution.png"}
                  width={90}
                  height={40}
                  alt=""
                />
                <span className="">옥션</span>
              </td>
            </tr>
          </tbody>
        </table>
        <dl className="border-b px-[10px] py-[15px]">
          <dt className="text-xs pb-1">신세계푸드 브랜드</dt>
          <dd className="text-xs break-keep text-gray-500">
            그래머시홀, 데블스도어, 데블스도어 다이너, 딘앤델루카, 베키아에누보,
            보노보노스시, 보노보노플러스, 셀렉더테이블, 셰프투고, 오슬로, 올반,
            쟈니로켓
          </dd>
        </dl>
      </TabPannel>

      {/* TODO: 내용 보충 필요 */}
    </>
  );
}
