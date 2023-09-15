export default function CloseButton({
  className,
  onClick,
}: {
  className?: string;
  onClick: () => void;
}) {
  return (
    <button
      className={`${className} absolute top-0 right-0 w-[60px] h-[60px] bg-[url('/images/icon_close.png')] bg-[14px_auto] bg-center bg-no-repeat`}
      onClick={onClick}
    />
  );
}
