"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { useEffect } from "react";

export default function Checkbox({
  className,
  id,
  name,
  children,
  onClick,
  disabled = false,
}: {
  className?: string;
  id: string;
  name?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  useEffect(() => {
    const ls_value = localStorage.getItem(id);
    if (ls_value) {
      handleAppRecord(id, ls_value);
    }

    // Initialize
    if (!appValueList[id]) {
      handleAppRecord(id, false);
    }
  }, []);

  const checked =
    "before:bg-[url('/images/icon_check.png')] before:bg-no-repeat before:bg-center before:bg-[length:12px_auto] before:bg-black";

  return (
    <>
      <div className={`${className} relative inline-block text-[10px]`}>
        <input
          className={`${
            disabled ? "bg-gray-200" : ""
          } absolute left-0 top-0 w-6 h-6 rounded-xl border-0 appearance-none`}
          id={id}
          type="checkbox"
          onChange={() => handleAppRecord(id, !appValueList[id])}
          disabled={disabled}
          onClick={onClick}
        />
        <label
          className={`${disabled ? "text-gray-700" : ""} ${
            appValueList[id] === true ? checked : ""
          } block min-h-[22px] pt-[1px] pl-[30px] leading-[18px] align-middle whitespace-nowrap break-keep before:absolute before:left-0 before:top:0 before:w-[22px] before:h-[22px] before:border before:border-[#505050] before:rounded-[50%] before:z-[2]`}
          htmlFor={id}
        >
          {name && (
            <span className="table-cell align-middle break-keep">{name}</span>
          )}
        </label>
      </div>
      {children}
    </>
  );
}
