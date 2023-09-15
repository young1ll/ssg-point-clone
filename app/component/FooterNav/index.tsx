import Link from "next/link";
import { IconLink } from "@/types/LinkProps";
import Image from "next/image";

const fontSize = 9;
const iconSize = 24;
const navLinks: Array<IconLink> = [
  {
    key: 1,
    _href: "/",
    _src: "/image/my-page.png",
    iconName: "k",
    name: "마이 회원정보",
    size: iconSize,
    fontSize: fontSize,
  },
  {
    key: 2,
    _href: "/",
    _src: "/images/my-point.png",
    iconName: "",
    name: "마이 포인트",
    size: iconSize,
    fontSize: fontSize,
  },
  {
    key: 3,
    _href: "/",
    _src: "/images/home.png",
    iconName: "",
    name: "홈",
    size: iconSize,
    fontSize: fontSize,
  },
  {
    key: 4,
    _href: "/",
    _src: "/images/point_tip.png",
    iconName: "",
    name: "포인트 꿀팁",
    size: iconSize,
    fontSize: fontSize,
  },
  {
    key: 5,
    _href: "/membership/combine",
    _src: "/images/universe-club.png",
    iconName: "",
    name: "유니버스 클럽",
    size: iconSize,
    fontSize: fontSize,
  },
];

export default function FooterNav() {
  return (
    <div className="fixed left-0 bottom-0 w-full h-[75px] z-[102] bg-white border-t-[1px]">
      <ul className="tab_list flex justify-center py-3">
        {navLinks.map(({ key, _href, _src, name, iconName }) => (
          <li className="relative box-content w-[20%] pb-2" key={key}>
            {/* TODO: ImageLink 컴포넌트 사용 */}
            <Link
              className="block text-center text-[9px] text-black leading-[13px]"
              href={_href}
            >
              <div className="block box-border w-[24px] h-[24px] overflow-hidden">
                <Image
                  className="mx-auto mb-1"
                  width={24}
                  height={24}
                  src={_src}
                  alt={iconName}
                />
              </div>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
