export default function IndexIcon({
  className,
  type,
  children,
}: {
  className?: string;
  type: "accumulate" | "consumption";
  children?: React.ReactNode;
}) {
  const plus =
    "before:w-4 before:h-4 before:rounded-full before:bg-[#ea035c] before:bg-[url('/images/plus.png')] before:bg-[8px_auto] before:bg-center before:bg-no-repeat";
  const minus =
    "before:w-4 before:h-4 before:rounded-full before:bg-[url('/images/minus.png')] before:bg-[100%_auto] before:bg-center before:bg-no-repeat";
  return (
    <p
      className={`${className} flex items-center gap-x-1 pl-[19px] h-[14px] text-[13px] font-medium text-black ${
        type == "accumulate" ? plus : minus
      }`}
    >
      {children}
    </p>
  );
}
