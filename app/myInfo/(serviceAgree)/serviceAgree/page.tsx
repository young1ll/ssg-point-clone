import DetailArrow from "@/components/atom/DetailArrow";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import Paper from "@/components/atom/Paper";
import Toggle from "@/components/atom/Toggle";

export default function ServiceAgreePage() {
  return (
    <>
      <ListHeader className="px-5 border-gray-500 font-medium" border>
        신세계포인트 제휴사간 통합 서비스
      </ListHeader>
      <ListBody className="">
        <li className="flex flex-col justify-between my-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm">
              <p>
                [선택] 신세계포인트 ↔ SSG.COM 옴니서비스를 위한 개인정보 제공
                동의
              </p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="service_term1" />
            </div>
          </div>
          <Paper
            className="mt-5 py-2 px-5 text-xs text-gray-500"
            bgColor="bg-gray-100"
          >
            <p>변경일: {"2023년 07월 27일"}</p>
          </Paper>
        </li>
      </ListBody>

      <ListHeader className="px-5 border-gray-500 font-medium" border>
        사이트 이용 약관 동의
      </ListHeader>
      <ListBody className="">
        <li className="flex flex-col justify-between my-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm">
              <p>
                이마트 사이트 이용 약관
                <br />
                emart.com
              </p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="service_term2" />
            </div>
          </div>
          <Paper
            className="mt-5 py-2 px-5 text-xs text-gray-500"
            bgColor="bg-gray-100"
          >
            <p>변경일: {"2023년 08월 24일"}</p>
          </Paper>
        </li>

        <li className="flex flex-col justify-between my-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm">
              <p>
                신세계백화점 사이트 이용 약관
                <br />
                shinsegae.com
              </p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="service_term3" />
            </div>
          </div>
          <Paper
            className="mt-5 py-2 px-5 text-xs text-gray-500"
            bgColor="bg-gray-100"
          >
            <p>변경일: {""}</p>
          </Paper>
        </li>
      </ListBody>
    </>
  );
}
