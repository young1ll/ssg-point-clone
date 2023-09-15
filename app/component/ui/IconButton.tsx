import Image from "next/image";
import { IconLink } from "@/types/LinkProps";
import Link from "next/link";

export const IconButton = ({
  _href,
  _src,
  name,
  iconName,
  size,
  fontSize,
}: Omit<IconLink, "key">) => {
  return (
    <>
      <Link
        className={`block text-[${fontSize}px] text-center leading-[${
          fontSize + 4
        }px] w-full text-[#505050]`}
        href={_href}
      >
        <Image
          className="block mx-auto"
          src={_src}
          width={size}
          height={size}
          // fill={true}
          alt={iconName}
        />
        {name}
      </Link>
    </>
  );
};
