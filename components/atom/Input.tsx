"use client";
import { useAppContext } from "@/provider/AppContextProvider";
import { phonHyphenShow } from "@/utils/FormatHelpers";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import CloseButton from "./CloseButton";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Input({
  className,
  id,
  title,
  titleClass,
  type = "text",
  dateValueId,
  birthFormat,
  hyphenShow = false,
  ref,
  children,
  disabled = false,
  onChange,
  onKeyDown,
}: {
  className?: string;
  id: string;
  title?: React.ReactNode;
  titleClass?: string;
  type?:
    | "text"
    | "email"
    | "password"
    | "birth"
    | "cardNumber"
    | "phone"
    | "date";
  dateValueId?: string;
  birthFormat?: "yyyy-mm-dd" | "yyyymmdd" | "yy-mm-dd" | "yymmdd";
  hyphenShow?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
  children?: React.ReactNode;
  disabled?: boolean;
  onChange?: () => void;
  onKeyDown?: (e: any) => void;
}) {
  const { appValueList, handleAppRecord } = useAppContext();
  const [showPassword, setShowPassword] = useState(false);

  const initValue = () => {
    if (appValueList[id] == "") {
      handleAppRecord(id, "");
    }
  };

  const inputType = ["birth", "cardNumber", "phone"].includes(type)
    ? "number"
    : type;

  useEffect(() => {
    if (type == "birth" && !birthFormat) {
      throw new Error("'birth' 타입은 'birthFormat' 속성이 필수입니다.");
    } else if (type !== "birth" && birthFormat) {
      throw new Error(
        "'birthFormat' 속성은 오직 'birth' 타입에만 사용할 수 있습니다."
      );
    }
    return () => {
      initValue();
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const onlyNumber = value.replace(/[^0-9]/g, "");

    if (type === "phone") {
      handleAppRecord(id, onlyNumber.slice(0, 11));
    } else if (type === "birth") {
      handleAppRecord(id, onlyNumber.slice(0, 8));
    } else if (type === "cardNumber") {
      handleAppRecord(id, onlyNumber.slice(0, 4));
    } else {
      handleAppRecord(id, value);
    }
  };

  const handleDateModal = {
    on: () => {
      handleAppRecord("dateFilterModal", true);
    },
    off: () => handleAppRecord("dateFilterModal", false),
  };

  if (type == "date") {
    if (!dateValueId) {
      throw new Error("data 속성은 dataValueId가 필요합니다.");
    }
    return (
      <>
        <div className="relative w-full pr-[45px]">
          <div className="relative w-full inline-block align-top">
            <label
              className="absolute table left-0 top-0 h-10 w-full px-4 text-sm "
              htmlFor=""
            >
              <span className="table-cell align-middle text-left break-all">
                {children}
              </span>
            </label>
            <input
              className="block w-full h-10 px-4 border rounded-lg"
              type="text"
            />
          </div>
          <button
            className="absolute right-0 top-0 w-[40px] h-[40px] border rounded-lg after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[20px_auto] after:bg-center after:bg-no-repeat after:bg-[url('/images/icon_calendar.png')]"
            onClick={handleDateModal.on}
          />
          <div></div>
        </div>
        <Modal id="dateFilterModal" center>
          <div className="relative flex items-center w-full min-h-[50px] mb-2 z-[2]">
            날짜 설정
            <CloseButton
              className="!w-[50px] !h-[50px]"
              onClick={handleDateModal.off}
            />
          </div>

          {/* --- DatePicker --- */}
          <DatePicker
            selected={appValueList[dateValueId] as Date}
            onChange={(date) =>
              handleAppRecord(dateValueId as string, date as Date)
            }
            inline
          />
        </Modal>
      </>
    );
  }

  return (
    <>
      {title && (
        <p className={`${titleClass} text-[13px] leading-5 pb-2`}>{title}</p>
      )}
      <div
        data-state
        className={`${className} relative inline-block w-full h-[48px] align-top box-border border rounded-full`}
      >
        <label
          className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
          htmlFor={id}
        >
          <span className="table-cell align-middle text-left break-all">
            {hyphenShow
              ? phonHyphenShow(String(appValueList[id]))
              : !appValueList[id] && children}
            {type == "password" && (
              <input
                className={`absolute block w-[19px] h-[14px] translate-y-[-50%] right-[22px] top-1/2 z-[99] appearance-none ${
                  showPassword
                    ? "bg-[url('/images/icon_password_show.png')]"
                    : "bg-[url('/images/icon_password_hidden.png')]"
                } bg-no-repeat bg-[100%_auto]`}
                type="checkbox"
                checked={showPassword}
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
              />
            )}
          </span>
        </label>
        <input
          className={`${className} appearance-none block text-sm h-full w-full px-[16px] rounded-full overflow-hidden caret-black focus-visible:relative peer`}
          id={id}
          type={showPassword ? "text" : inputType}
          value={appValueList[id] as string}
          onChange={onChange || handleInputChange}
          onKeyDown={onKeyDown}
          disabled={disabled}
          ref={ref}
        />
      </div>
    </>
  );
}
