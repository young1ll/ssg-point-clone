import Button from "@/components/atom/Button";
import ContentHeader from "@/components/atom/ContentHeader";
import ContentTitle from "@/components/atom/ContentTitle";
import Input from "@/components/atom/Input";
import Subtitle from "@/components/atom/Subtitle";
import FormPntGift from "@/components/organisam/FormPntGift";

export default function PntGiftPage() {
  return (
    <>
      <ContentHeader className="mt-9">
        <ContentTitle>선물하기</ContentTitle>
        <Subtitle>
          신세계포인트를 선물 받으실 분의
          <br />
          정보를 정확하게 입력해 주세요.
        </Subtitle>
      </ContentHeader>

      <FormPntGift />
    </>
  );
}
