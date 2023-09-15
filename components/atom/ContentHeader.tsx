export default function ContentHeader({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={`${className} px-5 py-10`}>{children}</div>;
}
