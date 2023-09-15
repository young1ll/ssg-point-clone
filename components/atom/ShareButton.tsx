export default function ShareButton({
  className,
  color = "white",
  onClick,
}: {
  className?: string;
  color?: "white" | "black";
  onClick?: () => void;
}) {
  const whiteIcon =
    "text-white before:absolute before:left-0 before:w-[18px] before:h-[19px] before:bg-[url('/images/icon_share.png')] before:bg-[100%_auto] before:bg-center before:bg-no-repeat";
  const blackIcon =
    "text-black before:absolute before:left-0 before:w-[18px] before:h-[19px] before:bg-[url('/images/icon_share_black.png')] before:bg-[100%_auto] before:bg-center before:bg-no-repeat";
  return (
    <button
      className={`${className} absolute right-5 top-7 h-[25px] pl-6 text-[15px] z-10 ${
        color == "white" ? whiteIcon : color == "black" ? blackIcon : ""
      }`}
      onClick={onClick}
    >
      공유
    </button>
  );
}
