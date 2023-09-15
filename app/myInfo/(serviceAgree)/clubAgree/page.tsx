import Button from "@/components/atom/Button";
import Collapse from "@/components/atom/Collapse";
import DetailArrow from "@/components/atom/DetailArrow";
import Dropdown from "@/components/atom/Dropdown";
import Grid from "@/components/atom/Grid";
import Input from "@/components/atom/Input";
import ListBody from "@/components/atom/ListBody";
import ListHeader from "@/components/atom/ListHeader";
import ListItem from "@/components/atom/ListItem";
import Paper from "@/components/atom/Paper";
import Tab from "@/components/atom/Tab";
import Tabs from "@/components/atom/Tabs";
import Toggle from "@/components/atom/Toggle";

export default function ClubAgreePage() {
  return (
    <>
      <p className="px-5 text-[#eb0000] text-xs">
        ※ 각 클럽 서비스별 하단 확인 버튼을 눌러야 변경 내용이 저장됩니다.
      </p>

      <ServiceAgreeMomkids />
      <ServiceAgreeCar />
      <ServiceBeauty />
    </>
  );
}

const ServiceAgreeMomkids = () => {
  return (
    <>
      <ListHeader className="mt-5 px-5 font-medium border-b border-gray-300">
        맘키즈 클럽
      </ListHeader>

      <ListBody className="">
        <li className="flex flex-col justify-between py-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm break-keep">
              <p>[선택] 맘키즈 클럽 혜택을 위한 부가 정보 수집 및 이용 동의</p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="momkids_toggle" />
            </div>
          </div>
          <Collapse
            className="border-black"
            id="momkids"
            title="나의 자녀 정보 열기"
            position="top"
            center
          >
            {/* FormMomkids */}

            <Tabs className="felx w-full my-4 px-5">
              <p className="text-[13px] font-medium w-[60px]">자녀1</p>
              <div className="flex flex-col gap-y-2 w-full">
                <div className="flex gap-x-2 h-12">
                  <Tab id="child_1" label="male">
                    남자
                  </Tab>
                  <Tab id="child_1" label="female">
                    여자
                  </Tab>
                </div>
                <Input
                  className="w-full rounded-lg"
                  id="child_1_birth"
                  type="birth"
                  birthFormat="yyyymmdd"
                >
                  생년월일 ex)20170201
                </Input>
              </div>
            </Tabs>

            <Tabs className="felx w-full my-4 px-5">
              <p className="text-[13px] font-medium w-[60px]">자녀2</p>
              <div className="flex flex-col gap-y-2 w-full">
                <div className="flex gap-x-2 h-12">
                  <Tab id="child_2" label="male">
                    남자
                  </Tab>
                  <Tab id="child_2" label="female">
                    여자
                  </Tab>
                </div>
                <Input
                  className="w-full rounded-lg"
                  id="child_2_birth"
                  type="birth"
                  birthFormat="yyyymmdd"
                >
                  생년월일 ex)20170201
                </Input>
              </div>
            </Tabs>
          </Collapse>
        </li>
      </ListBody>

      <ListBody>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5" bullet>
          맘키즈 클럽은 만 13세 이하의 자녀를 두신 회원 대상입니다.
        </ListItem>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5" bullet>
          자녀 정보는 최대 2명까지 입력하실 수 있습니다.
        </ListItem>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5" bullet>
          맘키즈 클럽 혜택은 이마트에서 이용하실 수 있습니다.
          <br />
          (온·오프라인 옴니동의 시 SSG.COM 이용 가능)
        </ListItem>
      </ListBody>

      <div className="py-5 px-5">
        <Button bgColor="primary">확인</Button>
      </div>
    </>
  );
};

const ServiceAgreeCar = () => {
  return (
    <>
      <ListHeader className="mt-5 px-5 font-medium border-b border-gray-300">
        차량 서비스
      </ListHeader>

      <ListBody className="divide-y">
        <li className="flex flex-col justify-between py-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm break-keep">
              <p>[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의</p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="momkids_toggle" />
            </div>
          </div>
        </li>
        <li className="flex flex-col justify-between py-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm break-keep">
              <p>[선택] 차량 서비스 제공을 위한 부가 정보 수집 및 이용동의</p>
              <p className="text-xs text-gray-500 mt-1">
                내용보기
                <DetailArrow />
              </p>
            </div>
            <div>
              <Toggle id="car_toggle" />
            </div>
          </div>
          <Collapse
            className="border-black"
            id="car"
            title="나의 자녀 정보 열기"
            position="top"
            center
          >
            <div className="flex flex-col gap-y-2 px-10 py-5">
              {/* FormCarService */}
              <Dropdown
                className="w-full h-12"
                id="carService"
                border
                options={[]}
              />
              <div className="flex justify-between gap-x-2">
                <Input
                  className="!text-[13px] !tracking-[-0.2em] rounded-lg"
                  id="carNum1"
                >
                  차량 앞자리 번호
                </Input>
                <Input
                  className="!text-[13px] !tracking-[-0.2em] rounded-lg"
                  id="carNum2"
                >
                  차량 중간 글자
                </Input>
                <Input
                  className="!text-[13px] !tracking-[-0.2em] rounded-lg"
                  id="carNum3"
                >
                  차량 마지막 번호
                </Input>
              </div>
            </div>
          </Collapse>
        </li>
      </ListBody>
      <ListBody>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5" bullet>
          이마트, 신세계백화점 방문 시 구매 내역에 따라 등록하신 차량의 주차비가
          자동으로 정산됩니다.
        </ListItem>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5 pl-2">
          - 이마트 : 일부 점포 제외 (이마트앱 {">"} 주차 {">"} 무료주차
          가능점포)
        </ListItem>
        <ListItem className="text-xs text-gray-500 pt-1 mx-5 pl-2">
          - 백화점 : 경기점, 타임스퀘어점 제외
        </ListItem>
        <ListItem className="text-xs font-medium pt-1 mx-5" bullet>
          차량번호는 최대 1대까지 입력이 가능하며, 임시번호 및 외교차량 등 일부
          차량번호는 등록되지 않습니다.
        </ListItem>
      </ListBody>

      <div className="py-5 px-5">
        <Button bgColor="primary">확인</Button>
      </div>
    </>
  );
};

const ServiceBeauty = () => {
  return (
    <>
      <ListHeader className="mt-5 px-5 font-medium border-b border-gray-300">
        뷰티 클럽
      </ListHeader>

      <ListBody className="">
        <li className="flex flex-col justify-between py-5">
          <div className="flex justify-between px-5">
            <div className="flex flex-col gap-y-2 text-sm break-keep">
              <p>뷰티 클럽 가입</p>
            </div>
            <div>
              <Toggle id="momkids_toggle" />
            </div>
          </div>
        </li>

        <ListHeader className="text-sm px-5">해당 브랜드</ListHeader>
        <Grid className="px-5" cols={3}>
          <ListItem className="!text-[13px]" bullet>
            아모레퍼시픽
          </ListItem>
          <ListItem className="!text-[13px]" bullet>
            아모레퍼시픽
          </ListItem>
          <ListItem className="!text-[13px]" bullet>
            아모레퍼시픽
          </ListItem>
        </Grid>
      </ListBody>

      <ListBody className="pt-5">
        <ListItem className="text-xs text-gray-500 pt-1 mx-5" bullet>
          이마트 매장에서 브랜드 화장품 구매 시 신세계포인트 2~5% 추가 적립
          혜택을 받으실 수 있습니다.
        </ListItem>
      </ListBody>

      <div className="py-5 px-5">
        <Button bgColor="primary">확인</Button>
      </div>
    </>
  );
};
