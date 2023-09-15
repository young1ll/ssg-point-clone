"use client";
import Image from "next/image";
import Collapse from "../atom/Collapse";
import ListBody from "../atom/ListBody";
import { useEffect, useState } from "react";

import faqList from "@/data/faq.json";
import { useAppContext } from "@/provider/AppContextProvider";

type FaqType = {
  id: number; main_category: string; sub_category: string; q: string; a: string;
}

export default function FaqList() {
  const [thisFaqList, setThisFaqList] = useState<FaqType[]>();
  const { appValueList, handleAppRecord } = useAppContext();
  const faqAll = async () => {
    const res = await fetch("http://3.35.193.212:8000/api/v1/faq", {
      method: "GET",
    });
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  };

  useEffect(() => {
    faqAll();

    const mainCatFaqList = faqList.filter(
      (i) => i.main_category == appValueList["faqBoardMainCate"]
    );
    const subCatFaqList = mainCatFaqList.filter(
      (i) => i.sub_category == appValueList["faqBoardSubCate"]
    );
    if (appValueList["faqBoardSubCate"] !== "소분류") {
      setThisFaqList(subCatFaqList);
    } else if (appValueList["faqBoardMainCate"] === "대분류") {
      setThisFaqList(faqList);
    } else {
      setThisFaqList(mainCatFaqList);
    }
  }, [appValueList["faqBoardMainCate"], appValueList["faqBoardSubCate"]]);

  return (
    <ListBody className="!pt-12">
      {thisFaqList?.map((i) => (
        <li key={i.id} className="">
          <Collapse
            className="px-6"
            buttonClass="h-full"
            id={String(i.id)}
            title={
              <div className="flex gap-x-3 pt-5 pb-5">
                <Image
                  className="my-auto mt-1"
                  src={"/images/resources/cscenter/q_mark.png"}
                  width={24}
                  height={24}
                  alt=""
                />
                <div className="text-[13px] w-5/6 text-ellipsis overflow-hidden">
                  <p>[{i.main_category}]</p>
                  <p className="text-gray-600">
                    {`[${i.sub_category}] ${i.q}`}
                  </p>
                </div>
              </div>
            }
          >
            <div className="flex gap-x-3 pb-5">
              <Image
                className="my-auto mt-0"
                src={"/images/resources/cscenter/a_mark.png"}
                width={24}
                height={24}
                alt=""
              />
              <div className="text-[13px] text-ellipsis overflow-hidden ">
                <p dangerouslySetInnerHTML={{ __html: i.a }} />
              </div>
            </div>
          </Collapse>
        </li>
      ))}
    </ListBody>
  );
}
