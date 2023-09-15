import EventList from "@/components/organisam/EventList";
import { dateHyphenSlashConverter } from "@/utils/FormatHelpers";

export default function EndEventsPage() {
  const today = dateHyphenSlashConverter(new Date());
  const eventFetchList = [
    {
      name: "종료",
      pathname: "/endevents",
      url: `http://localhost:3030/event?start_date_gte=2022/01/01&end_date_lte=${today}`,
    },
  ];
  return <EventList eventFetchList={eventFetchList} />;
}
