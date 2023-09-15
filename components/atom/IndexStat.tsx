export default function IndexStat({
  className,
  type,
  textHidden = false,
}: {
  className?: string;
  type: "accumulate" | "consumption";
  textHidden?: boolean;
}) {
  const plus =
    "before:w-4 before:h-4 before:rounded-full before:bg-[#ea035c] before:bg-[url('/images/plus.png')] before:bg-[8px_auto] before:bg-center before:bg-no-repeat";
  const minus =
    "before:w-4 before:h-4 before:rounded-full before:bg-[url('/images/minus.png')] before:bg-[100%_auto] before:bg-center before:bg-no-repeat";
  switch (type) {
    case "accumulate": {
      return (
        <p
          className={`${className} flex items-center gap-x-1 pl-[19px] h-[14px] text-[13px] font-medium text-[#ea035c] ${plus}`}
        >
          {textHidden ? "" : "적립"}
          <span className="pl-1">{"0P"}</span>
        </p>
      );
    }
    case "consumption": {
      return (
        <p
          className={`${className} flex items-center gap-x-1 pl-[19px] h-[14px] text-[13px] font-medium text-black ${minus}`}
        >
          {textHidden ? "" : "사용"}
          <span className="pl-1">{"12P"}</span>
        </p>
      );
    }
  }
}
