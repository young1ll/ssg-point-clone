import Subtitle from "@/components/atom/Subtitle";
import EventList from "@/data/event.json";

export default function NoticeDetailPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const thisEvent = EventList.find(
    (event) => event.id == searchParams?.eventNo
  );

  return (
    <>
      <div className="mt-9 px-5">
        <div className="py-5">
          <p className="text-lg">{thisEvent?.name}</p>
          <Subtitle className="!text-base">
            {thisEvent?.start_date}~{thisEvent?.end_date}
            {thisEvent?.win_date && thisEvent?.win_date !== "null"
              ? `당첨일: ${thisEvent.win_date}`
              : ""}
          </Subtitle>
        </div>
        <div dangerouslySetInnerHTML={{ __html: thisEvent.content }} />
      </div>
    </>
  );
}
