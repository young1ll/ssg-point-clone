import React from "react";

export const InputText = ({
  type,
  title,
  placeholder,
}: Pick<HTMLInputElement, "type" | "title" | "placeholder">) => {
  return (
    <div
      data-state
      className="inoput_box relative inline-block w-full h-[48px] align-top box-border border border-inherit rounded-full"
    >
      <label
        className="absolute table left-0 top-0 box-border w-full h-full px-[16px] text-[#767676] text-[14px] leading-[24px] peer-focus:opacity-0 transition-opacity peer-data-[state]:hidden"
        htmlFor={type}
      >
        <span className="table-cell align-middle text-left break-all">
          {placeholder}
        </span>
      </label>
      <input
        className="h-full w-full overflow-hidden peer"
        id={type}
        type={type}
        title={title}
      />
    </div>
  );
};
