"use client";
import { generateCalendar } from "@/utils/FormatHelpers";
import { useEffect, useState } from "react";

export default function AttendCheck() {
  const today = new Date();
  const currDateDigit = today.getDate();
  const [thisMonth, setThisMonth] = useState<(string | number)[]>([]);

  useEffect(() => {
    const calendar = generateCalendar(today);
    setThisMonth(calendar);
    console.log(calendar);
  }, []);

  const handleAttend = () => {
    // TODO: POST 출석 요청
    alert("hi");
  };

  return (
    <div className="bg-white w-full p-5">
      <ul className="grid grid-cols-7 grid-rows-7 gap-2">
        {thisMonth.map((i) =>
          i == "" ? (
            <></>
          ) : (
            <li key={i}>
              {i == currDateDigit ? (
                <div
                  className={`relative flex justify-center items-center w-[10vw] h-[10vw] p-[2px] rounded-full bg-gradient-primary cursor-pointer`}
                  onClick={handleAttend}
                >
                  <div
                    className={`relative flex justify-center items-center w-full h-full rounded-full bg-white`}
                  >
                    <span className="block text-[3.75vw] text-gray-600 pb-[2px]">
                      {i}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className={`relative flex justify-center items-center w-[10vw] h-[10vw] p-[2px] rounded-full bg-gray-200`}
                >
                  <div
                    className={`relative flex justify-center items-center w-full h-full rounded-full ${
                      (i as number) < currDateDigit ? "" : "bg-white"
                    }`}
                  >
                    <span className="block text-[3.75vw] text-gray-600 pb-[2px]">
                      {i}
                    </span>
                  </div>
                </div>
              )}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
