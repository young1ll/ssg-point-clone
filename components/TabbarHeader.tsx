"use client";
import { PageType } from "@/type/Page";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function TabbarHeader({
  className,
  justify = "center",
  pages,
  activeTab = "point",
  activeColor = "black",
  hideByScroll = false,
}: {
  className?: string;
  justify?: "center" | "start" | "between";
  pages?: PageType[];
  activeTab?: "point" | "underline-primary";
  activeColor?: "black" | "spoint" | "benefits" | "cscenter" | "membership";
  hideByScroll?: boolean;
}) {
  // TODO: 자식 페이지만 현재페이지로 표시...
  const pathname = usePathname();
  let modifiedPathname = pathname;
  switch (pathname) {
    case "/benefits/pntPlus/roulette":
      modifiedPathname = "/benefits/pntPlus/attend";
      break;
    case "/benefits/endCoupon":
      modifiedPathname = "/benefits/myCoupon";
      break;
    case "/benefits/winEvent":
      modifiedPathname = "/benefits/myEvent";
      break;
  }

  const uniquePntPlus = "/benefits/pntPlus/attend";

  const currJustify = () => {
    switch (justify) {
      case "center":
        return "justify-center";
      case "start":
        return "justify-start";
      case "between":
        return "justify-between text-center";
    }
  };

  const currActive = () => {
    switch (activeTab) {
      case "point": {
        return "before:absolute before:top-[-2px] before:left-1/2 before:translate-x-[-50%] before:w-1 before:h-1 before:bg-black before:rounded-full";
      }
      case "underline-primary": {
        return `${
          justify == "between" && "before:!mx-0 before:w-full"
        } before:absolute before:mx-5 before:w-[calc(100%-40px)] before:left-0 before:bottom-0 before:h-[2px] before:bg-gradient-primary`;
      }
    }
  };

  const currColor = () => {
    switch (activeColor) {
      case "black":
        return "text-black !font-medium";
      case "spoint":
        return "text-spoint !font-medium";
      case "benefits":
        return "text-benefits !font-medium";
      case "cscenter":
        return "text-cscenter !font-medium";
      case "membership":
        return "text-membership !font-medium";
    }
  };

  const [showHeader, setShowHeader] = useState(true);
  const [scrollState, setScrollState] = useState(0);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isScrollDown = scrollTop > scrollState;

      if (isScrollDown) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      if (!isScrollDown && scrollTop <= 40) {
        setShowHeader(true);
      }
      setScrollState(scrollTop); // 스크롤 위치 갱신
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollState]);

  return (
    <div className="fixed h-14 w-full z-10">
      <div
        className={`${className ?? ""} absolute ${
          hideByScroll && (showHeader ? "top-0" : "!-top-14")
        } w-full h-9 bg-white border-b border-gray overflow-hidden z-10 transition-all duration-300 ease-in-out`}
      >
        <ul
          className={`flex flex-nowrap ${currJustify()} w-full h-full box-border font-normal text-gray-600 overflow-x-auto scrollbar-hide pt-[2px] transition-all duration-300 ease-in-out`}
        >
          {pages!.map(
            (each) =>
              each && (
                <li
                  key={each.id}
                  className={`relative flex basis-auto px-5 text-[15px] transition-all duration-300 ease-in-out ${
                    modifiedPathname.includes(each.pathname as string) && currActive()
                  } ${
                    modifiedPathname.includes(each.pathname as string) && currColor()
                  } ${justify == "between" ? "w-full" : "px-5"}`}
                >
                  <Link
                    className="relative block w-full whitespace-nowrap"
                    href={
                      each.pathname == "/benefits/pntPlus"
                        ? uniquePntPlus
                        : (each.pathname as string)
                    }
                  >
                    {each.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
}
