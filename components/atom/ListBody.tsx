export default function ListBody({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <ul className={`${className} flex flex-col gap-y-1 mt-1`}>{children}</ul>
  );
}
