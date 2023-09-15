import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Grid from "@/components/atom/Grid";
import ListHeader from "@/components/atom/ListHeader";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";
import cardLinkList_1 from "@/data/onlineCard.json";

export default function PointCardPage() {
  const cardLinkList_2 = [
    {
      id: 1,
      name: "신세계 유니버스 클럽​",
      href: "/membership/combine",
      src: "/images/resources/sPoint/card_universe.png",
    },
  ];

  const cardLinkList_3 = [
    {
      id: 1,
      name: "SSG PAY",
      href: "https://www.ssgpay.com/",
      src: "/images/resources/sPoint/card_ssgpay.png",
    },
    {
      id: 2,
      name: "카카오페이​",
      href: "https://kakaopay.kakao.com/redirect/membership",
      src: "/images/resources/sPoint/card_kakaopay.png",
    },
    {
      id: 3,
      name: "시럽​",
      href: "https://www.syrup.co.kr/index.do",
      src: "/images/resources/sPoint/card_syrup.png",
    },
  ];

  const affiliCardList = [
    {
      id: 1,
      name: "이마트 e카드",
      href: "https://www.hyundaicard.com/cpc/cr/CPCCR0201_01.hc?cardWcd=EMTE2&eventCode=ERT15",
      src: "/images/resources/sPoint/card_emart_ecard.png",
    },
    {
      id: 2,
      name: "이마트II KB국민카드",
      href: "https://m.kbcard.com/CRD/DVIEW/MCAMCXHIACRC0002?mainCC=b&allianceCode=04361&solicitorcode=7029159060",
      src: "/images/resources/sPoint/card_KB_ecard.png",
    },
    {
      id: 3,
      name: "SSG.COM카드",
      href: "https://event.ssg.com/m/eventDetail.ssg?nevntId=1000000000858&siteNo=6005&recruitmentPath=L6007006&eventCode=KJH05",
      src: "/images/resources/sPoint/card_hyundai_ecard.png",
    },
    {
      id: 4,
      name: "BC바로카드",
      href: "https://paybooc.co.kr/mobile/BCBaroSHINSEGAE.html",
      src: "/images/resources/sPoint/card_ssgbcbaro_ecard.png",
    },
    {
      id: 5,
      name: "하나카드",
      href: "https://m.hanacard.co.kr/MPACMM101M.web?_frame=no&CD_PD_SEQ=13954",
      src: "/images/resources/sPoint/card_hana_ecard.png",
    },
    {
      id: 6,
      name: "삼성카드",
      href: "https://www.samsungcard.com/personal/card/simple-apply/UHPPCA0224M0.jsp?alncmpC=SDSTORE1",
      src: "/images/resources/sPoint/card_samsung_ecard.png",
    },
  ];
  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            언제 어디에서라도 신세계포인트를
            <br />
            만날 수 있는
            <span className="font-bold text-spoint">다양한 방법</span>
          </ContentTitle>
          <p className="text-sm leading-6 text-gray-600 pt-2">
            카드마다 차별화된 서비스·혜택을 즐기세요!
            <br />
            신세계포인트 앱 하나면 나의 포인트 카드를
            <br />한 번에 확인할 수 있어요.
          </p>
        </ContentHeader>
      </div>

      <div className="px-5 pt-6 pb-20">
        <ListHeader>온라인 카드</ListHeader>
        <Subtitle className="pb-5">
          통합ID로 로그인하는 모바일 앱과 홈페이지에서 신세계포인트
          <br />
          회원가입이 가능하며, 신세계포인트 카드와 다양한 혜택을 만날 수 있어요.
        </Subtitle>
        <Grid>
          {cardLinkList_1.map((link) => (
            <li key={link.id} className="flex justify-center">
              <Link href={link.href} target="_blank">
                <Card className="relative w-20 h-20 mx-auto">
                  <Image src={link.src} fill alt={link.name} />
                </Card>
                <span className="text-xs leading-5">{link.name}</span>
              </Link>
            </li>
          ))}
        </Grid>

        <Subtitle className="pb-5">
          신세계 유니버스 클럽에 가입하시면 신세계포인트 모바일 카드가
          발급됩니다.
        </Subtitle>

        <Grid>
          {cardLinkList_2.map((link) => (
            <li key={link.id} className="flex justify-center text-center">
              <Link href={link.href} target="_blank">
                <Card className="relative w-20 h-20 mx-auto">
                  <Image src={link.src} fill alt={link.name} />
                </Card>
                <span className="text-xs leading-5">{link.name}</span>
              </Link>
            </li>
          ))}
        </Grid>

        <Subtitle className="pb-5">
          모바일 월렛(지갑) 서비스에서 신세계포인트 카드 발급이 가능합니다.
        </Subtitle>

        <Grid>
          {cardLinkList_3.map((link) => (
            <li key={link.id} className="flex justify-center">
              <Link className="items-center" href={link.href} target="_blank">
                <Card className="relative w-20 h-20 mx-auto">
                  <Image src={link.src} fill alt={link.name} />
                </Card>
                <span className="text-xs leading-5">{link.name}</span>
              </Link>
            </li>
          ))}
        </Grid>

        <Subtitle className="pb-5">
          앱 이미지 클릭 시 해당 앱 다운로드 페이지로 연결됩니다.
        </Subtitle>
      </div>

      <div className="px-5 pt-6 pb-20 min-w-[360px]">
        <ListHeader>제휴 신용카드</ListHeader>
        <Subtitle className="pb-5">
          다양한 신세계포인트 제휴 신용카드를 확인하시고, 고객님의
          라이프스타일에 따라 풍성한 혜택을 누리세요.
        </Subtitle>
        <Grid className="!grid-cols-2 md:grid-cols-3" cols={2}>
          {affiliCardList.map((link) => (
            <li
              key={link.id}
              className="flex justify-center box-border px-auto text-center"
            >
              <Link
                className="flex flex-col justify-end min-w-[120px] "
                href={link.href}
                target="_blank"
              >
                <Image
                  className="min-h-[80px] max-h-[150px] w-fit mx-auto"
                  src={link.src}
                  width={150}
                  height={150}
                  // fill
                  alt={link.name}
                />
                <span className="text-sm leading-5 font-medium whitespace-nowrap">
                  {link.name}
                </span>
              </Link>
            </li>
          ))}
        </Grid>

        <Subtitle>
          신세계 유니버스 클럽에 가입하시면 신세계포인트 모바일 카드가
          발급됩니다.
        </Subtitle>
      </div>
    </>
  );
}
