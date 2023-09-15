import Button from "@/components/atom/Button";
import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Paper from "@/components/atom/Paper";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";
import Link from "next/link";

export default function ClubPage() {
  const clubList = [
    {
      id: 1,
      mini_thumb: "/images/resources/club/club_momkids.png",
      textColor: "text-[#00635e]",
      paperColor: "bg-[#e6f3f3]",
      name: "맘키즈 클럽",
      subtitle:
        "아이와 엄마가 모두 행복한 라이프!<br />매월 다양한 이마트 맘키즈 클럽<br />혜택을 받아보세요.",
      link: "/membership/club/momkids",
    },
    {
      id: 2,
      mini_thumb: "/images/resources/club/club_parking.png",
      textColor: "text-[#623f00]",
      paperColor: "bg-[#f6f1e7]",
      name: "차량 서비스",
      subtitle:
        "​주차를 빠르고 편리하게!<br />이마트·신세계백화점에서<br />자동으로 주차 정산 받으세요.",
      link: "/membership/club/parking",
    },
    {
      id: 3,
      mini_thumb: "/images/resources/club/club_beauty.png",
      textColor: "text-[#d9044b]",
      paperColor: "bg-[#fde6ef]",
      name: "뷰티 클럽",
      subtitle:
        "​아름다움을 꿈꾸는 당신께!<br />이마트 뷰티 클럽에 가입하고<br />스마트하게 제품도 구매하세요.",
      link: "/membership/club/beauty",
    },
    {
      id: 4,
      mini_thumb: "/images/resources/club/club_biz.png",
      textColor: "text-[#5c1880]",
      paperColor: "bg-[#efe8f3]",
      name: "비즈 클럽",
      subtitle:
        "개인 사업자도 편리하게!<br />세금계산서 발행 서비스,<br />이제 모바일로 관리하세요.",
      link: "/membership/club/biz",
    },
  ];
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          <span className="text-membership font-medium">클럽 서비스</span>에
          가입하고
        </ContentTitle>
        <Subtitle className="!pt-2 leading-6">
          고객님의 취향에 따른 맞춤 클럽 혜택으로
          <br />
          더욱 알뜰하고 편리한 서비스를 경험하실 수
          <br />
          있습니다.
        </Subtitle>
      </ContentHeader>

      <div className="relative ">
        <h3 className="text-lg leading-7 font-normal px-5 pb-4">
          이런 클럽은 어때요?
        </h3>
        <ul className="space-y-2">
          {clubList.map((paper) => (
            <Paper key={paper.id} bgColor={paper.paperColor}>
              <Card className="!bg-transparent flex justify-between">
                <div className="">
                  <ContentTitle
                    className={`${paper.textColor} !text-base font-medium`}
                  >
                    {paper.name}
                  </ContentTitle>
                  <Subtitle
                    className={`${paper.textColor} pt-[10px] text-sm`}
                    type="__html"
                  >
                    {paper.subtitle}
                  </Subtitle>
                </div>
                <Image src={paper.mini_thumb} width={90} height={90} alt="" />
              </Card>
            </Paper>
          ))}
        </ul>
      </div>
    </>
  );
}
