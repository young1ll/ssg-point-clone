"use client";
import { staticPageFetch } from "@/utils/StaticFetch";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabbarFooter() {
  const currPath = usePathname();
  const active =
    "before:absolute before:!top-[5px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";
  return (
    <div className="tab_bar fixed left-0 bottom-0 bg-white w-full h-[75px] z-[99] border-t-[1px]">
      <ul className="flex">
        {staticPageFetch
          .getPageListByEachName([
            "마이 회원정보",
            "마이 포인트",
            "홈",
            "포인트 꿀팁",
            "유니버스",
          ])
          .map(
            (page) =>
              page && (
                <li
                  key={page.id}
                  className={`relative w-[20%] ${
                    currPath == page.pathname ? "pt-1" : ""
                  }`}
                >
                  <Link
                    className={`block w-full h-[60px] text-[9px] text-black text-center leading-[13px] box-border pt-[11px] before:block before:mx-auto before:mb-[4px] before:top-5 before:transition-all ${
                      page.pathname == currPath && active
                    }`}
                    href={page.pathname as string}
                  >
                    <div className="relative w-[24px] h-[24px] mx-auto mb-[4px] overflow-hidden">
                      <Image
                        className={`absolute ${
                          currPath == page.pathname ? "top-0" : "bottom-0"
                        }`}
                        src={page.tab_icon as string}
                        width={48}
                        height={96}
                        alt={page.name}
                      />
                    </div>
                    {page.name}
                  </Link>
                </li>
              )
          )}
      </ul>
    </div>
  );
}
