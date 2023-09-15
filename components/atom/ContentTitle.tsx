export default function ContentTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p
      className={`${className} text-xl font-medium leading-8 tracking-[-.5px]`}
    >
      {children}
    </p>
  );
}
