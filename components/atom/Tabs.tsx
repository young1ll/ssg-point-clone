export default function Tabs({
  className,
  title,
  titleClass,
  children,
}: {
  className?: string;
  title?: React.ReactNode;
  titleClass?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {title && (
        <p className={`${titleClass} text-[13px] leading-5 pb-2`}>{title}</p>
      )}
      <ul className={`${className} flex min-h-[48px]`}>{children}</ul>
    </div>
  );
}
