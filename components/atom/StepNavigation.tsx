"use client";
import { usePathname } from "next/navigation";
import { joinSteps } from "@/app/(user)/member/join/page";

export default function StepNavigation() {
  const currPath = usePathname();
  const currentStepIndex = joinSteps.findIndex((item) => currPath === item.url);
  const check =
    "bg-[url('/images/icon_step_bg.png')] bg-[100%_auto] bg-no-repeat after:absolute after:top-1/2 after:left-1/2 after:translate-x-[-50%] after:translate-y-[-50%] after:w-[10px] after:h-[8px] after:bg-[url('/images/icon_check.png')] after:bg-[98%_auto] after:bg-no-repeat";
  const done = "!bg-[#f8b404]";
  return (
    <ol className="flex gap-2 relative mb-4">
      {joinSteps.map((item, index) => (
        <li
          key={item.id}
          className={`relative w-5 h-5 bg-[#e8e8e8] box-border rounded-full  ${
            index === currentStepIndex
              ? check
              : index < currentStepIndex
              ? done
              : ""
          }`}
        >
          <span className="indent-[-99em] opacity-0">{item.id}</span>
          <i className="absolute w-[1px] h-[1px] left-1/2 translate-x-[-50%] overflow-hidden">
            {item.id}단계
          </i>
        </li>
      ))}
    </ol>
  );
}
