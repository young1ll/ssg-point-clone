import CouponList from "@/components/organisam/CouponList";
import FormRegCoupon from "@/components/organisam/FormRegCoupon";
import Paper from "@/components/atom/Paper";

export default function CouponPage() {
  const roundHB =
    "after:absolute after:block after:w-[calc(100%-20px)] after:h-[calc(100%-15px)] after:border-[2px] after:border-solid after:border-white after:border-b-0 after:bottom-0 after:left-[50%] after:-translate-x-[50%] after:rounded-t-[20px]";
  const roundF =
    "after:absolute after:block after:w-[calc(100%-20px)] after:h-[calc(100%-20px)] after:border-[2px] after:border-solid after:border-white after:border-t-0 after:top-0 after:left-[50%] after:-translate-x-[50%] after:rounded-b-[20px] after:z-[0]";
  const couponBgTop =
    "bg-[url('/images/resources/coupon_page_top.png')] bg-[100%_auto]";
  const couponBgBottom =
    "bg-[url('/images/resources/coupon_page_bottom.png')] bg-bottom bg-[100%_auto]";
  return (
    <>
      <div className="mt-[36px] ">
        <div className={`pt-[7%] ${couponBgTop}`}>
          <Paper
            className={`px-[10px] py-[30px] text-center border-b-2 border-white`}
            bgColor="bg-[#ff811d]"
          >
            <div className={`${roundHB}`}>
              <strong className="font-medium block mt-[15px] mb-[8px] text-[24px] leading-[34px] break-keep">
                쇼핑 할인에서 제휴 우대까지
                <br />
                신세계포인트 회원만
                <br />
                누릴 수 있는 혜택!
              </strong>
              <p className="text-[13px] leading-[21px] text-black">
                원하는 쿠폰을 다운로드하고
                <br />
                마이 쿠폰함에 쓱- 담아 사용해 보세요.
              </p>
            </div>
          </Paper>
        </div>

        <Paper
          className={`${roundF} px-[10px] pb-[30px] pt-[10px]`}
          bgColor="bg-[#ffc191]"
        />

        <div className={`pb-[7%] ${couponBgBottom}`}>
          <FormRegCoupon />
        </div>
      </div>

      {/* couponlist */}
      <div className="px-5 pt-2 pb-20">
        <CouponList />
      </div>
    </>
  );
}
