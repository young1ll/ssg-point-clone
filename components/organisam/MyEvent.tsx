type EventType = {
  id: number;
  name: string;
  thumb: string;
  banner_thumb: string;
  win_date: string;
  start_date: string;
  end_date: string;
};

export default function MyEvent() {
  return (
    <>
      <div className="py-12">
        <p className="relative pt-16 text-center text-gray-500 after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-[48px] after:h-[48px] after:bg-[url('/images/resources/no_content.png')] after:bg-no-repeat after:bg-[100%_auto]">
          보유하신 제휴 신용카드가 없습니다.
        </p>
      </div>
    </>
  );
}
