"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect } from "react";

export default function Dropdown({
  className,
  id,
  title,
  titleClass,
  initValue,
  border,
  wrapper,
  options,
  onChange,
  disabled = false,
  disabledOption,
}: {
  className?: string;
  id: string;
  title?: React.ReactNode;
  titleClass?: string;
  initValue?: string;
  border?: boolean;
  wrapper?: string;
  options: string[];
  onChange?: () => void;
  disabled?: boolean;
  disabledOption?: number[];
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const thisValue = appValueList[id];

  const handleThisValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    handleAppRecord(id, e.target.value);
  };

  useEffect(() => {
    console.log(appValueList[id]);
    if (!thisValue) handleAppRecord(id, options[0]);
  }, [thisValue]);

  return (
    <>
      {title && (
        <p className={`${titleClass} text-[13px] leading-5 pb-2`}>{title}</p>
      )}
      <div className={wrapper}>
        <select
          className={`${className} px-4 ${border ? "border rounded-lg" : ""}`}
          name={"dropdown_" + id}
          id={id}
          value={thisValue as string}
          onChange={onChange || handleThisValue}
          disabled={disabled}
        >
          {initValue && <option value={initValue}>{initValue}</option>}
          {options.map((opt) =>
            disabledOption?.includes(options.indexOf(opt)) ? (
              <option key={opt} value={opt} disabled>
                {opt.includes("-") ? opt.split("-")[1] : opt}
              </option>
            ) : (
              <option key={opt} value={opt}>
                {opt.includes("-") ? opt.split("-")[1] : opt}
              </option>
            )
          )}
        </select>
      </div>
    </>
  );
}
