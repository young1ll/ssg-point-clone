export default function Paper({
  className,
  bgColor = "bg-[#fff9ea]",
  children,
}: {
  className?: string;
  bgColor?: string;
  children?: React.ReactNode;
}) {
  return <div className={`${className} ${bgColor} relative`}>{children}</div>;
}
