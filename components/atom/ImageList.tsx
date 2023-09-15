import { PageType } from "@/type/Page";
import Image from "next/image";
import Link from "next/link";

export default function ImageList({
  className,
  pages,
}: {
  className?: string;
  pages: PageType[];
}) {
  return (
    <ul
      className={`${
        className ?? ""
      } grid grid-cols-2 gap-x-1 gap-y-5 pb-[34px] mt-5 z[0]`}
    >
      {pages
        .filter((page) => page?.parent_id)
        .map((child) => (
          <li
            key={child?.id}
            className="flex-grow h-5 text-[13px] leading-[18px]"
          >
            <Link
              className="flex gap-1 items-center h-5 text-[13px] leading-[18px] text-ellipsis whitespace-nowrap"
              href={child?.pathname as string}
            >
              <Image
                width={20}
                height={20}
                src={child?.simple_icon as string}
                alt={child?.name as string}
              />
              {child?.name}
            </Link>
          </li>
        ))}
    </ul>
  );
}
