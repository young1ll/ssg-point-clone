"use client";
import { useAppContext } from "@/provider/AppContextProvider";

export default function Toggle({
  className,
  id,
  children,
}: {
  className?: string;
  id: string;
  children?: React.ReactNode;
}) {
  const { appValueList, handleAppRecord } = useAppContext();

  const handleToggleValue = () => {
    handleAppRecord(id, !appValueList[id]);
  };

  const checkedCss = "before:bg-[#fc348c] after:left-7";

  return (
    <div className="relative inline-block ml-[10px]">
      <input
        type="checkbox"
        id={id}
        className="absolute left-0 top-0 w-full h-full opacity-[-1] z-[-1]"
        checked={appValueList[id] as boolean}
        onChange={handleToggleValue}
      />
      <label
        htmlFor={id}
        className={`block w-14 h-8 overflow-hidden indent-[-999em] select-none before:content-[''] before:block before:absolute before:w-full before:h-8 before:rounded-[2em] before:transition-all after:transition-all after:content-[''] after:block after:absolute after:cursor-pointer after:top-1 after:w-6 after:h-6 after:rounded-full after:bg-white ${
          appValueList[id] ? checkedCss : "before:bg-[#bcbcbc] after:left-[5px]"
        }`}
      >
        {children} {appValueList[id] ? "on" : "off"}
      </label>
    </div>
  );
}
