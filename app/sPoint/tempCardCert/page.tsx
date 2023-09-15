import FormCert from "@/components/organisam/FormCert";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Subtitle from "@/components/atom/Subtitle";
import Image from "next/image";

export default function TempCardCertPage() {
  const beforeArrow =
    "before:absolute before:block before:w-[15px] before:h-2 before:top-8 before:left-1/3 before:ml-[-4%] before:bg-[url('/images/spoint_arrow.png')] before:bg-[100%_auto]";
  const afterArrow =
    "after:absolute after:block after:w-[15px] after:h-2 after:top-8 after:right-1/3 after:mr-[-4%] after:bg-[url('/images/spoint_arrow.png')] after:bg-[100%_auto]";
  return (
    <>
      <div className="mt-9">
        <ContentHeader>
          <ContentTitle className="text-xl !leading-8 tracking-[-.5px]">
            <span className="font-bold text-spoint">임시 발급 카드</span>를
            인증하고
            <br />
            다양한 서비스를 이용해 보세요.
          </ContentTitle>
          <Subtitle className="!pt-3 leading-5">
            본인 인증 없이 발급받은 카드를 한 번만 본인 인증하면
            <br />
            온/오프라인 통합 관리, 제휴 신용카드 연동 등<br />
            더욱 편리한 서비스 이용이 가능합니다.
          </Subtitle>
        </ContentHeader>
      </div>

      {/* --- 3 step --- */}
      <ul
        className={`px-5 pb-10 relative flex justify-between ${beforeArrow} ${afterArrow}`}
      >
        <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/sPoint/issuecard_step.png')] before:bg-[100%_auto]">
          <div className="pt-2 text-center text-spoint">
            <span className="block text-xs">STEP 1</span>
            <span className="block text-sm">본인인증</span>
          </div>
        </li>

        <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/sPoint/issuecard_step.png')] before:bg-[100%_auto] before:bg-center">
          <div className="pt-2 text-center text-spoint">
            <span className="block text-xs">STEP 2</span>
            <span className="block text-sm">카드정보 입력</span>
          </div>
        </li>

        <li className="flex flex-col before:w-20 before:h-20 before:block before:bg-[url('/images/resources/sPoint/issuecard_step.png')] before:bg-[100%_auto] before:bg-bottom">
          <div className="pt-2 text-center text-spoint">
            <span className="block text-xs">STEP 3</span>
            <span className="block text-sm">인증요정 클릭</span>
          </div>
        </li>
      </ul>

      <FormCert />

      {/* TODO: 유의 사항 추가 */}
    </>
  );
}
