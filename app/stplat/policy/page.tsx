export default function PolicyPage() {
  return (
    <>
      <div className="px-5">
        <h2 className="text-base font-bold text-center pb-4">
          신세계포인트 개인정보 처리방침
        </h2>
        <p className="mt-5 pb-[10px] text-[13px] leading-[21px] text-gray-600">
          신세계포인트 운영사인 ㈜이마트와 참여사인 신세계백화점(㈜신세계,
          ㈜광주신세계, ㈜신세계동대구복합환승센터) (이하 당사라고 함)은
          정보주체의 자유와 권리 보호를 위해 「개인정보보호법」 및 관계 법령이
          정한 바를 준수하여, 적법하게 개인정보를 처리하고 안전하게 관리하고
          있습니다. 이에 「개인정보보호법」 제30조에 따라 정보주체에게 개인정보
          처리에 관한 절차 및 기준을 안내하고, 이와 관련한 고충을 신속하고
          원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을
          수립ㆍ공개합니다.
        </p>
      </div>

      <div className="px-5 pt-10">
        <h2 className="text-base font-bold pb-4">
          주요 개인정보 처리 표시(라벨링)
        </h2>
        <ul className="grid grid-cols-2">
          <li className="border">일반 개인정보 수집</li>
          <li className="border">개인정보 처리목적</li>
          <li className="border">개인정보의 보유 기간</li>
          <li className="border">개인정보 처리위탁</li>
          <li className="border">개인정보의 제공</li>
          <li className="border">개인정보 열람 청구</li>
        </ul>
      </div>
    </>
  );
}
