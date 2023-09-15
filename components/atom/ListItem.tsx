export default function ListItem({
  className,
  bullet = false,
  children,
}: {
  className?: string;
  bullet?: boolean;
  children: React.ReactNode;
}) {
  const bulletCss =
    "pl-[7px] before:content-['·'] before:absolute before:left-0 before:top-0 before:text-xs before:leading-5 before:font-bold";
  return (
    <li
      className={`relative ${className ?? ""} ${
        bullet ? bulletCss : "list-none"
      } text-sm`}
    >
      {children}
    </li>
  );
}
