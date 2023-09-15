export default function Underline({
  className,
  color = "after:bg-[#ffdfb5]",
  children,
}: {
  className?: string;
  color?: string;
  children?: React.ReactNode;
}) {
  return (
    <strong
      className={`${
        className ?? ""
      } relative inline-block align-top z-[1] pr-1 pl-[1px] font-medium text-black after:inline-block after:absolute after:w-full after:h-[12px] after:z-[-1] after:left-0 after:bottom-0 ${color}`}
    >
      {children}
    </strong>
  );
}
