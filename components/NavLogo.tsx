import Image from "next/image";
import Link from "next/link";

export default function MainLogo({
  className,
  nav = false,
  onClick,
}: {
  className?: string;
  nav?: boolean;
  onClick?: () => void;
}) {
  return nav ? (
    <Link
      className={`${className} relative w-[57px] h-[36px]`}
      href={"/"}
      onClick={onClick}
    >
      <Image
        className={`indent-[-999em] ml-[-28px]"`}
        fill
        src={"/images/logo_header.gif"}
        alt={"SHINSEAGAE POINT"}
      />
    </Link>
  ) : (
    <div className="relative mx-auto mb-[40px] w-[89px] h-[56px]">
      <Image
        className=""
        fill
        src={"/images/logo_large.gif"}
        alt={"SHINSEAGAE POINT"}
      />
    </div>
  );
}
