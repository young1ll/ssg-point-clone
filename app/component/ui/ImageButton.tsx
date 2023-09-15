import Image from "next/image";
import { ImageLink } from "@/types/LinkProps";
import Link from "next/link";

export const ImageButton = ({
  _href,
  _src,
  name,
  imgName,
  size,
  fontSize,
}: Omit<ImageLink, "key">) => {
  //TODO: 여기서 typecheck,  pops 파싱

  return (
    <Link className={`relative w-[${size}px] h-[${size}px]`} href={_href}>
      <Image
        className="block mx-auto"
        src={_src}
        // width={size}
        // height={size}
        fill={true}
        alt={imgName}
      />
      {name}
    </Link>
  );
};
