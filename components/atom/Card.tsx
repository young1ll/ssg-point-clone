import IconButton from "./IconButton";

export default function Card({
  id,
  className,
  shadow = false,
  border = false,
  fit = false,
  children,
}: {
  id?: string;
  className?: string;
  shadow?: boolean;
  border?: boolean;
  fit?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} relative bg-white rounded-lg ${
        shadow ? "drop-shadow-[0_3px_8px_rgba(0,0,0,0.08)]" : ""
      } ${border ? "border" : ""} ${fit ? "" : "p-5"}`}
    >
      {children}
    </div>
  );
}
