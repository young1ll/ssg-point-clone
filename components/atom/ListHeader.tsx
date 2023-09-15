export default function ListHeader({
  className,
  border = false,
  children,
}: {
  className?: string;
  border?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${className} flex justify-between items-center h-12 ${
        border && "border-b"
      } border-black`}
    >
      {children}
    </div>
  );
}
