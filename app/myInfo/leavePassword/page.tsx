import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Input from "@/components/atom/Input";
import Subtitle from "@/components/atom/Subtitle";

export default function LeavePasswordPage() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle className="leading[30px]">
          개인정보 보호를 위해
          <br />
          <span className="font-bold text-mypoint">비밀번호를 확인</span>
          하고 있습니다.
        </ContentTitle>
        <Subtitle className="!pt-2 !text-sm">
          현재 사용 중인 비밀번호를 입력해주세요.
        </Subtitle>
      </ContentHeader>

      <div className="px-5">
        <Input
          className="mb-5 rounded-lg"
          id="leavePass"
          type="password"
          title={"비밀번호"}
        >
          비밀번호를 입력해주세요.
        </Input>
        <Button bgColor="primary">확인</Button>
      </div>
    </>
  );
}
