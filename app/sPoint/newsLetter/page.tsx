import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Link from "next/link";

export default function NewsLetterPage() {
  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            NEWS를 보면{" "}
            <span className="font-bold text-spoint">신세계가 보인다!</span>
          </ContentTitle>
          <p className="text-sm leading-6 text-gray-600 pt-2">
            유튜브, 칼럼, 신세계그룹의 다양한 정보와
            <br />
            컨텐츠를 즐겨보세요.
          </p>
        </ContentHeader>
      </div>

      <div className="px-5 pb-10">
        <Link
          className="block w-full h-12 font-semibold text-[14px] text-center py-3 bg-gradient-primary rounded-lg"
          href={"https://www.shinsegaegroupnewsroom.com/category/newsletter/"}
          target="_blank"
        >
          보러가기
        </Link>
      </div>
    </>
  );
}
