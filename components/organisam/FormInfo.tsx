"use client";
import { useEffect, useState } from "react";
import Input from "../atom/Input";
import PostCodeDaum from "react-daum-postcode";
import { DaumAddressType } from "@/type/DaumAddressType";
import Button from "../atom/Button";
import DaumPostCode from "../module/DaumPostCode";
import ListBody from "../atom/ListBody";
import ListHeader from "../atom/ListHeader";
import Checkbox from "../atom/Checkbox";
import DetailArrow from "../atom/DetailArrow";
import { useAppContext } from "@/provider/AppContextProvider";
import Modal from "../atom/Modal";
import Subtitle from "../atom/Subtitle";
import { useRouter } from "next/navigation";

type UserInfo = {
  name: string
  phoneNumber: string
}


export default function FromInfo() {
  const router = useRouter();
  const { appValueList, handleAppRecord } = useAppContext();
  const [activeChk, setActiveChk] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [address, setAddress] = useState<DaumAddressType[]>();

  const termChkList = [
    { id: "RvcEmail", name: "이메일" },
    { id: "RvcSMS", name: "문자" },
    { id: "RvcDM", name: "DM" },
    { id: "RvcTM", name: "TM" },
  ];
  const chkList = termChkList.map((i) => appValueList[i.name + "_chk"]);

  useEffect(() => {
    if (!appValueList["sel2_chk"]) {
      setActiveChk(true);
    } else {
      setActiveChk(false);
    }
  }, [appValueList["sel2_chk"]]);

  useEffect(() => {
    if (chkList.every((term) => term == true)) {
      handleAppRecord("RvcAll_chk", true);
    } else handleAppRecord("RvcAll_chk", false);
  }, [chkList[0], chkList[1], chkList[2], chkList[3]]);

  const handleAllCheck = () => {
    const allChecked = !chkList.every((term) => term === true);
    termChkList.map((item) => handleAppRecord(item.id + "_chk", allChecked));
  };

  useEffect(() => {
    if (localStorage.getItem("registerUser")) {
      setUserInfo(JSON.parse(localStorage.getItem("registerUser") as string));
    }
  }, []);

  useEffect(() => {
    if (address) {
      handleAppRecord("userZipCode", address[0] as unknown as string);
      handleAppRecord("userAddress", address[1] as unknown as string);
    }
  }, [address]);

  const handleSubmit = () => {
    // null validation
    if (!appValueList["userId"]) {
      console.log("아이디", appValueList["userId"]);
      alert("아이디는 필수 입니다.");
      document.getElementById("userId")?.focus();
      return null;
    } else if (!appValueList["idCheck"]) {
      console.log("아이디 중복확인", appValueList["idCheck"]);
      alert("아이디 중복확인은 필수 입니다.");
      document.getElementById("idCheck")?.focus();
      return null;
    } else if (!appValueList["userPassword"]) {
      console.log("비밀번호", appValueList["userPassword"]);
      alert("비밀번호는 필수 입니다.");
      document.getElementById("userPassword")?.focus();
      return null;
    } else if (!appValueList["userPasswordCheck"]) {
      console.log("비밀번호 확인", appValueList["userPasswordCheck"]);
      alert("비밀번호 확인은 필수 입니다.");
      document.getElementById("userPasswordCheck")?.focus();
      return null;
    } else if (!appValueList["userZipCode"]) {
      console.log("자택주소", appValueList["userZipCode"]);
      alert("자택주소는 필수 입니다.");
      document.getElementById("userZipCode")?.focus();
      return null;
    } else if (!appValueList["userAddress"]) {
      console.log("자택주소", appValueList["userAddress"]);
      alert("자택주소는 필수 입니다.");
      document.getElementById("userAddress")?.focus();
      return null;
    } else if (!appValueList["userAddressDetail"]) {
      console.log("자택주소", appValueList["userAddressDetail"]);
      alert("자택주소는 필수 입니다.");
      document.getElementById("userAddressDetail")?.focus();
      return null;
    }

    if (appValueList["userPassword"] !== appValueList["userPasswordCheck"]) {
      handleAppRecord("passwordValidModal", true);
      return null;
    }

    const requestForm = {
      loginId: appValueList["userId"] as string,
      password: appValueList["userPassword"] as string,
      name:
        appValueList["userName"] ||
        JSON.parse(localStorage.getItem("registerUser") as string)["name"] as string,
      email:
        appValueList["userEmail"] ||
        JSON.parse(localStorage.getItem("registerUser") as string)["email"] as string ||
        "",
      phone:
        appValueList["userPhone"] ||
        JSON.parse(localStorage.getItem("registerUser") as string)["phoneNumber"] as string ||
        "",
      address:
        appValueList["userZipCode"] as string +
        " " +
        appValueList["userAddress"] as string +
        " " +
        appValueList["userAddressDetail"] as string,
      term: {
        이메일: appValueList["RvcEmail_chk"] as boolean,
        문자: appValueList["RvcSMS_chk"] as boolean,
        DM: appValueList["RvcDM_chk"] as boolean,
        TM: appValueList["RvcTM_chk"] as boolean,
        "APP PUSH": false,
      },
    };
    const res = requestJoin(requestForm );
    console.log(res);
    res.then((i) => {
      localStorage.setItem(
        "registeredUserAccount",
        JSON.stringify(requestForm)
      );
      if (i !== null) router.push("/member/join/success");
    });
  };

  // 현재 회원가입 안됨. token? (auth)?
  const requestJoin = async (member: { loginId: string | number; password: string | number; name: any; email: any; phone: any; address: string; term: { 이메일: string | number | boolean | Date; 문자: string | number | boolean | Date; DM: string | number | boolean | Date; TM: string | number | boolean | Date; "APP PUSH": boolean; }; }) => {
    const res = await fetch(`http://3.35.193.212:8000/api/v1/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    if (res.ok) return console.log("ok"); // push
  };

  const requestValidId = async (loginId: string) => {
    const res = await fetch(
      `http://3.35.193.212:8000/api/v1/user/check-loginId?loginId=${loginId}`
    );
    console.log(res);
    return res;
  };

  const handleIdValid = () => {
    const res = requestValidId(appValueList["userId"] as string);
    res.then((i) => {
      if (i.status == 200) {
        console.log("ok");
        handleAppRecord("idCheck", true);
        handleAppRecord("idPassModal", true);
      } else {
        handleAppRecord("idCheckModal", true);
        handleAppRecord("idCheck", false);
      }
    });
  };

  return (
    <>
      <div className="flex flex-col gap-y-5 py-10 px-5">
        <div className="flex items-end gap-x-2">
          <div className="w-full">
            <Input className="rounded-lg" id="userId" title={"아이디"}>
              아이디
            </Input>
          </div>
          <Button
            id="idCheck"
            className="max-w-[110px]"
            onClick={handleIdValid}
          >
            중복확인
          </Button>
          <Modal id="idPassModal" center>
            <h3>사용할 수 있는 아이디입니다.</h3>
            <Subtitle>입력하신 아이디는 사용할 수 있는 아이디입니다.</Subtitle>
          </Modal>
          <Modal id="idCheckModal" center>
            <h3>중복되는 아이디가 존재합니다!</h3>
            <Subtitle>다른 아이디를 사용해주세요.</Subtitle>
          </Modal>
        </div>
        <div>
          <Input
            className="rounded-lg"
            id="userPassword"
            title={"비밀번호"}
            type="password"
          >
            비밀번호
          </Input>
        </div>
        <div>
          <Input
            className="rounded-lg"
            id="userPasswordCheck"
            title={"비밀번호 확인"}
            type="password"
          >
            입력하신 비밀번호를 다시 한번 입력해주세요.
          </Input>
        </div>
        <Modal id="passwordValidModal" center>
          <h2>비밀번호를 확인해주세요.</h2>
          <Subtitle>입력하신 비밀번호가 서로 일치하지 않습니다.</Subtitle>
        </Modal>
        <div>
          <Input
            className="rounded-lg text-gray-500"
            id="userName"
            title={"이름"}
            type="text"
            disabled
          >
            {userInfo?.name}
          </Input>
        </div>
        <div>
          <Input
            className="rounded-lg"
            id="userPhoneNumber"
            title={"휴대폰번호"}
            type="text"
            disabled
          >
            {userInfo?.phoneNumber?.slice(0, 3)}-
            {userInfo?.phoneNumber?.slice(3, 7)}-
            {userInfo?.phoneNumber?.slice(7, 11)}
          </Input>
        </div>
        <div className="space-y-2">
          <Input
            className="rounded-lg"
            id="userZipCode"
            title={"자택주소"}
            type="text"
            disabled
          >
            우편번호
          </Input>
          <div className="flex gap-x-2">
            <Input
              className="w-full rounded-lg"
              id="userAddress"
              type="text"
              disabled
            />
            <DaumPostCode setAddress={setAddress} isView={false} setIsView={undefined} >우편번호 찾기</DaumPostCode>
          </div>
          <Input className="rounded-lg" id="userAddressDetail" type="text">
            상세주소
          </Input>
        </div>
      </div>

      <div>
        <ListBody className="space-y-3 pt-10 px-5">
          <li className="flex justify-between ">
            <Checkbox
              className="text-[14px]"
              id={"sel1_chk"}
              name={`[선택] 혜택제공 및 분석을 위한 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
          <li className="flex justify-between">
            <Checkbox
              className="text-[14px]"
              id={"sel2_chk"}
              name={`
            [선택] 이마트/신세계 공동 개인정보 수집 및 이용 동의`}
            />
            <Button id="termsbtn_1" className="h-[22px]" type="simple">
              <DetailArrow />
            </Button>
          </li>
        </ListBody>
        <ListBody className="ml-[31px] mt-5 mb-10 pl-5 border-black border-l w-[300px]">
          <ListHeader className="text-sm">
            신세계포인트 광고정보 수신동의
          </ListHeader>
          <li>
            <Checkbox
              className="text-[11px] mb-1"
              id={"RvcAll_chk"}
              name={`전체동의`}
              disabled={activeChk}
              onClick={handleAllCheck}
            />
          </li>
          <ul className="flex justify-start">
            {termChkList.map((i) => (
              <li key={i.id} className="w-full">
                <Checkbox
                  className="text-[11px]"
                  id={`${i.id}_chk`}
                  name={`${i.name}`}
                  disabled={activeChk}
                />
              </li>
            ))}
          </ul>
        </ListBody>
      </div>
      <div className="px-5">
        <Button bgColor="primary" onClick={handleSubmit}>
          확인
        </Button>
      </div>
    </>
  );
}
