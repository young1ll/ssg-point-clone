import ListBody from "@/components/atom/ListBody";
import BoardList from "@/components/module/BoardList";
import PageNavigator from "@/components/module/PageNavigator";
import { dateHyphenSlashConverter } from "@/utils/FormatHelpers";
import { use } from "react";

import thisNotice from "@/data/notice.json";

export default function NoticePage() {

  return (
    <>
      <div className={`mt-9`}>
        <ListBody className="!gap-0">
          {thisNotice.map((i: any) => (
            <BoardList
              key={i.id}
              title={i.title}
              date={dateHyphenSlashConverter(i.reg_date)}
              url={{
                pathname: "/cscenter/notice/detail",
                query: { boardNo: i.id },
              }}
            />
          ))}
        </ListBody>
      </div>
      <PageNavigator />
    </>
  );
}
