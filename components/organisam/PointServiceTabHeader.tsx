"use client";
import ListBody from "../atom/ListBody";
import ListHeader from "../atom/ListHeader";
import ListItem from "../atom/ListItem";
import Modal from "../atom/Modal";
import Subtitle from "../atom/Subtitle";
import { useAppContext } from "@/provider/AppContextProvider";

export default function PointServiceTabHeader() {
  const { handleAppRecord } = useAppContext();
  const handleInfoModal = () => {
    handleAppRecord(`infoModal`, true);
  };
  return (
    <div className="px-5 pb-4">
      <ListHeader>
        포인트 적립/사용/소멸{" "}
        <Subtitle>
          <button
            className="relative pr-[10px] after:absolute after:right-0 after:top-1/2 after:w-[6px] after:h-[10px] after:mt-[-4.5px] after:bg-[url('/images/arrow_left.png')] after:bg-[100%_auto] after:rotate-180 after:opacity-40"
            onClick={handleInfoModal}
          >
            유의사항 보기
          </button>
        </Subtitle>
      </ListHeader>
      <Modal id="infoModal">
        <h2 className="text-lg font-medium">유의사항</h2>
        <div className="py-5">
          <p className="font-medium">신세계포인트 적립</p>
          <ListBody className="relative gap-y-2">
            <ListItem bullet>
              상품 및 서비스 구매 금액의 1,000원 단위로 적립되며 1,000원 미만
              결제 시 적립되지 않습니다.
            </ListItem>
            <ListItem bullet>
              결제 시 적립된 포인트는 적립된 다음 날부터 사용하실 수 있습니다.
            </ListItem>
            <ListItem bullet>
              포인트 적립률은 결제 수단에 따라 상이하며 결제 시 사용한 포인트
              금액은 제외됩니다.
            </ListItem>
            <ListItem bullet>
              일부 매장 및 구매 상품/서비스에 따라 포인트 적립/사용하실 수
              없습니다.
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 담배 상품, 서비스 제공(배송료, 수선비 등), 임대 매장(병원, 약국,
              안경점 등 각 가맹점/매장별 상이)
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 각 가맹사별/매장별 제휴 정책이 다를 수 있습니다. 자세한 사항은
              해당 가맹사에 문의해 주세요.
            </ListItem>

            <ListItem bullet>
              제휴 신용카드는 카드사별로 적립률 및 적립 수단이 다를 수 있습니다.
              자세한 사항은 해당 카드 신청서 확인 또는 해당 카드사에 문의해
              주세요.
            </ListItem>
            <ListItem bullet>
              현금 IC 기능을 가진 제휴 직불카드의 경우, 현금 IC 기능을 이용하여
              결제 시 현금 IC 카드의 적립률로 적립됩니다.
            </ListItem>
            <ListItem bullet>
              제휴 신용카드의 경우 기본 적립률로 표시되며 추가 적립률 및 상세
              혜택은 해당 카드사에서 확인하실 수 있습니다.
            </ListItem>
            <ListItem bullet>
              신세계포인트 클럽 회원에 한해 제공되는 포인트 혜택은 기본 적립
              포인트와 별도로 적립됩니다.
            </ListItem>
          </ListBody>
        </div>
        <div className="py-5">
          <p className="font-medium">신세계포인트 사용</p>
          <ListBody className="relative gap-y-2">
            <ListItem bullet>
              보유하신 포인트에 한해 포인트를 사용하실 수 있습니다.
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 오프라인 가맹점 : 10포인트 이상 보유 시 10포인트 단위
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 온라인 가맹점 : 1포인트 이상 보유 시 1포인트 단위
            </ListItem>

            <ListItem bullet>
              이마트 및 신세계백화점 상품권샵에서 신세계상품권으로 교환이
              가능하며 신세계포인트 앱에서 포인트를 선물하실 수 있습니다.
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 신세계상품권 전환 : 5,000포인트 이상 보유시 5,000포인트 단위 (※
              상품권샵 점포별 운영시간을 확인해 주세요. 무인 발급 키오스크 운영
              시 키오스크 이용이 가능합니다.)
            </ListItem>
            <ListItem className="pl-4 text-xs text-gray-500">
              - 포인트 선물 : 1포인트 이상 보유시 1포인트 단위 (※ 신세계포인트
              앱에서만 선물하기가 가능합니다.)
            </ListItem>

            <ListItem bullet>
              포인트 사용 시 포인트 비밀번호(숫자 4자리) 입력 후 사용하실 수
              있습니다.
              <br />
              (※ 제휴 정책에 따라 포인트 사용 비밀번호 입력 기준이 다를 수
              있습니다.)
            </ListItem>
            <ListItem bullet>
              결제 시 사용한 포인트 금액에 대해서는 포인트가 적립 되지 않습니다.
            </ListItem>
            <ListItem bullet>
              담배, 의약품, 장바구니 등 일부 상품 구매 시 포인트 사용이
              제한됩니다.
            </ListItem>
          </ListBody>
        </div>
        {/* TODO: 내용 보충 필요 */}
      </Modal>

      <ListHeader>적립 안내</ListHeader>

      <Subtitle className="!pt-1">
        결제수단별 결제금액에 따라 1천원당 기본 포인트가 적립되며, 결제 제휴
        브랜드 또는 결제수단에 따라 적립 포인트가 달라 집니다.
      </Subtitle>
    </div>
  );
}
