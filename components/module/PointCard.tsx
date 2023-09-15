"use client";
import Image from "next/image";
import Card from "../atom/Card";
import IconButton from "../atom/IconButton";
import Button from "../atom/Button";
import DetailArrow from "../atom/DetailArrow";
import Barcode from "@/utils/Barcode/Barcode";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Modal from "../atom/Modal";
import { useAppContext } from "@/provider/AppContextProvider";
import ListItem from "../atom/ListItem";
import CloseButton from "../atom/CloseButton";
import { KEY } from "@/utils/KeyHelper";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function PointCard({
  type = "simple",
}: {
  type?: "simple" | "cardNumber" | "barcode";
}) {
  const session = useSession();
  const router = useRouter();
  const { appValueList, handleAppRecord } = useAppContext();
  const pointIcon =
    "after:inline-block after:w-[33px] after:h-[30px] after:bg-[100%_auto] after:bg-[url('/images/resources/point_gradi.png')] after:bg-no-repeat";
  const barcodeNumber = session.data?.user?.user?.bardCode;

  const handleThisModal = {
    infoOn: () => handleAppRecord("myPointInfoModal", true),
    infoOff: () => handleAppRecord("myPointInfoModal", false),

    copyOn: async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        handleAppRecord("copySuccessAlert", true);
      } catch (e) {
        handleAppRecord("copyFailAlert", true);
      }
    },
  };

  useEffect(() => {
    if (appValueList["copySuccessAlert"] !== false) {
      setTimeout(() => {
        handleAppRecord("copySuccessAlert", false);
      }, 800);
    }
  }, [appValueList["copySuccessAlert"]]);

  useEffect(() => {
    if (appValueList["copyFailAlert"] !== false) {
      setTimeout(() => {
        handleAppRecord("copyFailAlert", false);
      }, 800);
    }
  }, [appValueList["copyFailAlert"]]);

  const handleCardNumber = {
    onOff: () => handleAppRecord(KEY.BARCORDBOX, !appValueList[KEY.BARCORDBOX]),
  };

  const handleBarcodeIcon = () => {
    router.push("/myPoint/pntHistory");
  };

  // Card Number
  const dividedArray = barcodeNumber?.match(/.{1,4}/g);
  return (
    <div className="p-5 pb-5">
      <Card
        className="max-w-[327px] mx-auto p-[2px] bg-gradient-primary !rounded-3xl transition-all duration-200 ease-in-out"
        shadow
        fit
      >
        <div
          className={`relative flex justify-between items-center mx-5 py-2 ${
            type == "barcode" ? "mr-2" : ""
          }`}
        >
          <Image
            src={"/images/resources/ssgpoint.png"}
            width={105}
            height={20}
            alt=""
          />
          {type == "simple" ? (
            <IconButton
              name="point card info"
              className="!w-4 !h-4"
              src="/images/icon_info.png"
              onClick={handleThisModal.infoOn}
            />
          ) : type == "cardNumber" ? (
            <IconButton
              name="point card info"
              className="!w-14 !h-6 !mr-[-10px]"
              src="/images/icon_barcode_md.png"
              onClick={handleCardNumber.onOff}
            />
          ) : (
            type == "barcode" && (
              <DetailArrow
                bgUrl="bg-[url('/images/arrow_right_white.png')]"
                rotate="!rotate-0"
                onClick={handleBarcodeIcon}
              />
            )
          )}
        </div>

        {/* ------ Card Body Top ------ */}
        <Card className="!rounded-[21px] transition-all duration-200 ease-in-out">
          {type == "simple" ? (
            <dl className="flex justify-between items-center pt-2 pb-4">
              <dt className="text-[13px] leading-[21px] font-medium">
                사용가능
              </dt>
              <dd
                className={`flex justify-end text-2xl leading-7 font-bold ${pointIcon}`}
              >
                {session.data?.user?.user?.point}
              </dd>
            </dl>
          ) : type == "cardNumber" ? (
            <div className="relative flex justify-between min-h-[60px] pt-8">
              <p className="text-lg font-bold tracking-widest">
                {barcodeNumber &&
                <>
                {dividedArray![0]}
                <span className="inline-block font-normal text-[10px] text-[#bcbcbc] px-[2px] align-top">
                -
                </span>
                {dividedArray![1]}
                <span className="inline-block font-normal text-[10px] text-[#bcbcbc] px-[2px] align-top">
                -
                </span>
                {dividedArray![2]}
                <span className="inline-block font-normal text-[10px] text-[#bcbcbc] px-[2px] align-top">
                -
                </span>
                {dividedArray![3]}
                </>
              }
              </p>
              <Button
                className="!w-9 !h-[28px] !text-[11px] !rounded-md !pb-[1px]"
                onClick={() => handleThisModal.copyOn(barcodeNumber as string)}
              >
                복사
              </Button>
            </div>
          ) : (
            type == "barcode" && (
              <div className="">
                <p
                  className={`flex items-center justify-start text-[32px] leading-7 font-bold ${pointIcon} after:ml-2 after:!h-[41px] after:!w-[44px]`}
                >
                  {session.data?.user?.user?.point}
                </p>
                <ul className="mt-3 mb-5 flex text-[12px] divide-x">
                  <li className="inline-block px-4 pl-0">
                    내일 적립 예정 <span className="font-bold">{`0`}P</span>
                  </li>
                  <li className="inline-block px-4">
                    다음달 소멸 예정 <span className="font-bold">{`0`}P</span>
                  </li>
                </ul>
              </div>
            )
          )}

          {/* ------ Card Body Bottom ------ */}
          {type == "simple" ? (
            <>
              <dl className="flex justify-between items-center">
                <dt className="text-[12px] leading-[21px] font-medium text-[#505050]">
                  적립 예정
                </dt>
                <dd
                  className={`flex justify-end text-[13px] leading-7 font-bold`}
                >
                  {session.data?.user?.user?.point}P
                </dd>
              </dl>
              <dl className="flex justify-between ">
                <dt className="flex-[1.3] text-[12px] text-left leading-[21px] font-medium text-[#505050]">
                  소멸 예정
                </dt>
                <dd className={`flex-[3.7]`}>
                  <span className="flex items-center text-left">
                    <em className="text-[11px] leading-5 text-[#767676] font-normal mr-auto">
                      {`2023-01-01`}
                    </em>
                    <em className="text-[13px] leading-5 font-bold">{`0`}P</em>
                  </span>
                  <span className="flex items-center text-left">
                    <em className="text-[11px] leading-5 text-[#767676] font-normal mr-auto">
                      {`2023-01-01`}
                    </em>
                    <em className="text-[13px] leading-5 font-bold">{`0`}P</em>
                  </span>
                </dd>
              </dl>
            </>
          ) : type == "cardNumber" ? (
            <dl className="flex justify-between items-center pt-4">
              <dt className="text-[13px] leading-[21px] font-medium">
                사용가능
              </dt>
              <dd
                className={`flex justify-end text-base leading-7 font-medium ${pointIcon} after:!w-[27px] after:!h-[25px] after:!ml-1`}
              >
                {session.data?.user?.user?.point}
              </dd>
            </dl>
          ) : (
            type == "barcode" && (
              <>
                <Barcode height={45} value={barcodeNumber as string} />

                <ul className="flex justify-between items-center mt-6 px-[10px] py-[10px]">
                  {staticPageFetch
                    .getPageListByEachName([
                      "포인트 선물",
                      "포인트 전환",
                      "영수증으로 적립",
                    ])
                    .map(
                      (page) =>
                        page && (
                          <li key={page.id}>
                            <Link
                              className="block w-full text-xs items-center text-center text-gray-600"
                              href={page.pathname as string}
                            >
                              <Image
                                className="block mx-auto"
                                src={page?.primary_icon as string}
                                width={45}
                                height={45}
                                alt={page.name}
                              />
                              {page.name}
                            </Link>
                          </li>
                        )
                    )}
                </ul>
              </>
            )
          )}
        </Card>
      </Card>

      <Modal id="copySuccessAlert" center>
        <p className="text-center text-base">✌ 카드 번호가 복사되었습니다.</p>
      </Modal>
      <Modal id="copyFailAlert" center>
        <p className="text-center text-base">
          ✌ 카드번호를 복사할 수 없습니다.
          <br />
          다시 시도해주세요.
        </p>
      </Modal>

      <Modal id="myPointInfoModal" center>
        <div className="relative flex items-center w-full min-h-[50px] mb-2 z-[2]">
          신세계포인트 상세 안내
          <CloseButton
            className="!w-[50px] !h-[50px]"
            onClick={handleThisModal.infoOff}
          />
        </div>
        <div>
          <p className="mb-1 text-sm">사용 가능 포인트</p>
          <p className="text-xs text-gray-500 mb-4">
            신세계포인트 가맹점에서 사용할 수 있도록{" "}
            <span className="text-black">사용 가능 상태로 전환된 포인트</span>
            입니다.
          </p>

          <p className="mb-1 text-sm">적립 예정 포인트</p>
          <p className="text-xs text-gray-500 mb-4">
            결제 시 적립된 포인트로,{" "}
            <span className="text-black">내일부터 사용할 수 있는 포인트</span>
            입니다.
          </p>

          <p className="mb-1 text-sm">소멸 예정 포인트</p>
          <ListItem className="text-xs text-gray-500 pb-2 list-none" bullet>
            신세계포인트의 유효기간은{" "}
            <span className="text-black">적립일로부터 24개월</span>이며,
            <span className="text-black">
              사용되지 않은 포인트는 매월 1일에 소멸
            </span>
            됩니다.
          </ListItem>
          <ListItem className="text-xs text-gray-500 pb-2 list-none" bullet>
            <span className="text-black">
              소멸 예정일 전까지 사용해 주세요.
            </span>
            <br />
            (예를 들어, 10월 1일 소멸 예정 포인트는 9월 30일까지 사용
            가능합니다.)
          </ListItem>
          <ListItem className="text-xs text-gray-500 pb-2 list-none" bullet>
            매월 1일 기준으로 소멸 예정 포인트가 조회되며, 포인트 사용 여부와
            상관없이 월 단위로 반영됩니다.
          </ListItem>
          <ListItem className="text-xs text-gray-500 pb-2 list-none" bullet>
            소멸 예정 포인트가 0보다 큰 경우에만 실제 소멸이 발생하며, 0 또는
            마이너스인 경우에는 소멸되지 않습니다.
          </ListItem>
        </div>
      </Modal>
    </div>
  );
}
