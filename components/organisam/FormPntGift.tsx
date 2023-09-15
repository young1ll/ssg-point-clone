"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import Button from "../atom/Button";
import Input from "../atom/Input";
import Modal from "../atom/Modal";
import ContentTitle from "../atom/ContentTitle";
import Subtitle from "../atom/Subtitle";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FormPntGift() {
  const session = useSession();
  const router = useRouter();
  const { appValueList, handleAppRecord } = useAppContext();
  const handleAddressBook = () => {
    handleAppRecord("AddressBook", true);
  };

  const thisGift = async (phone: string | number, name: string) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/point/gift/user?phone=${phone}&name=${name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  const sendGift = async (uuid: string, body: {}) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/point/gift?UUID=${uuid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${session.data?.user.access_token}`,
        },
        body: JSON.stringify(body),
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  };

  const handleConfirm = () => {
    const letThisGift = thisGift(
      appValueList["addressBook"] as string,
      appValueList["targetUser"] as string
    );
    letThisGift.then((i) => {
      if (i.code == "error") {
        handleAppRecord("AddressBookFail", true);
        return null;
      } else {
        handleAppRecord("target_loginId", i.loginId);
        handleAppRecord("target_name", i.name);
        handleAppRecord("target_phone", i.phone);
        handleAppRecord("AddressBookOk", true);
      }
    });
  };

  const handleSendPoint = () => {
    const myUuid = session.data?.user?.user.uuid;

    const requestForm = {
      point: appValueList["targetPoint"] as string,
      message: appValueList["targetMessage"] as string,
      loginId: appValueList["target_loginId"] as string,
      name: appValueList["target_name"] as string,
    };
    console.log(requestForm);

    const letThisSend = sendGift(myUuid as string, requestForm);
    letThisSend.then((i) => {
      i && handleAppRecord("AddressBookOk", false);
      handleAppRecord("AddressBookComplete", true);
    });
    router.push("/myPoint/pntGiftMain");
  };

  return (
    <>
      <div className="px-5">
        <div className="flex gap-x-2 pb-2">
          <Input className="rounded-lg" id="addressBook" type="phone">
            - 없이 휴대폰 번호를 입력해주세요.
          </Input>
          <div>
            {/* TODO: 선물하기 api 확인 후 기능 추가 */}
            <Button className="w-1/4 min-w-[110px]" onClick={handleAddressBook}>
              주소록
            </Button>
          </div>
        </div>
        <Input className="rounded-lg" id="targetUser">
          실명을 정확하게 입력해주세요.
        </Input>
      </div>

      <div className="px-5 py-10">
        <Button bgColor="black" onClick={handleConfirm}>
          조회하기
        </Button>
      </div>

      <Modal id="AddressBook" center>
        <ContentTitle>
          현재 선물하기를 위한 주소록 기능을 사용할 수 없습니다.
        </ContentTitle>
        <Subtitle>모바일에서 이용해 주세요.</Subtitle>
      </Modal>

      <Modal id="AddressBookFail" center>
        <ContentTitle>선물하기 실패</ContentTitle>
        <Subtitle>선물을 받을 회원 정보를 다시 확인해주세요.</Subtitle>
      </Modal>

      <Modal id="AddressBookOk" center>
        <ContentTitle>
          {appValueList["target_name"] as string}(
          {appValueList["target_loginId"] as string})님에게 포인트 선물을
          보냅니다.
        </ContentTitle>
        <Input id="targetPoint">포인트</Input>
        <Input id="targetMessage">메시지</Input>
        <Button id="targetSendPoint" onClick={handleSendPoint}>
          보내기
        </Button>
      </Modal>
    </>
  );
}
