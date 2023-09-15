import Card from "@/components/atom/Card";
import ContentHeader from "@/components/atom/ContentHeader";
import Grid from "@/components/atom/Grid";
import Image from "next/image";
import Link from "next/link";
import cardLinkList from "@/data/onlineCard.json";

export default function CombinePage() {
  return (
    <>
      <div className="relative w-full max-h-[1436px] mb-[30px] bg-black">
        <div className="w-full max-h-[1216px] mx-auto">
          <Image
            className="w-full"
            src={"/images/resources/universe/bg_universe.png"}
            width={750}
            height={1267}
            alt=""
          />
        </div>
        <div className="mx-6 -mt-5 pb-20 w-[calc(100%-44px);]">
          <iframe
            className="w-full max-h-[185px]"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kOmsPrux7T0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="absolute w-full text-center bottom-[3.678%]">
          <p className="text-gray-400 tracking-[-.25px]">
            한 곳만 가입해도 모든 혜택을 함께!
          </p>
        </div>
      </div>

      <ContentHeader className="text-xl text-center">
        최초 가입 시, 1개월 무료 체험
        <br />
        지금 바로 가입해보세요!
      </ContentHeader>
      <Grid cols={3}>
        {cardLinkList.map((link) => (
          <li key={link.id} className="flex justify-center text-center">
            <Card border>
              <Link href={link.href} target="_blank">
                <Card className="relative w-20 h-20 mx-auto">
                  <Image src={link.src} fill alt={link.name} />
                </Card>
                <span className="text-xs leading-5">{link.name}</span>
              </Link>
            </Card>
          </li>
        ))}
      </Grid>
    </>
  );
}
