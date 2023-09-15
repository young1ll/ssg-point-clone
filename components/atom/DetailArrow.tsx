export default function DetailArrow({
  rotate = "rotate-180",
  bgUrl = "bg-[url('/images/arrow_left.png')]",
  onClick,
}: {
  rotate?: string;
  bgUrl?: string;
  onClick?: () => void;
}) {
  return (
    <span
      className={`block text-xs overflow-hidden indent-[-99em] w-6 h-full opacity-50 ${
        bgUrl ?? ""
      } ${
        rotate ?? ""
      } bg-[7px_auto] bg-center rotate-180 bg-no-repeat cursor-pointer`}
      onClick={onClick}
    >
      내용보기
    </span>
  );
}
