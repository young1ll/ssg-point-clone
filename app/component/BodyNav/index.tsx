import { ImageLinkPropTest } from "@/types/LinkProps";
import LinkImageWithFallback from "../ui/LinkImageWithFallback";

const iconSize = 45; // 아이콘 사이즈 설정
const fontSize = "xs";
const bodyNavProps: Array<ImageLinkPropTest> = [
  {
    _id: 1,
    _href: "/ingevents",
    name: "이벤트",
    image: {
      _src: "/images/event.png",
      type: "icon",
      size: { w: iconSize, h: iconSize },
    },
    fontSize: fontSize,
  },
  {
    _id: 2,
    _href: "/benefits/pntPlus/attend",
    name: "출석체크",
    image: {
      _src: "/images/attend-check.png",
      type: "icon",
      size: { w: iconSize, h: iconSize },
    },
    fontSize: fontSize,
  },
  {
    _id: 3,
    _href: "/benefits/pntPlus/roulette",
    name: "럭키룰렛",
    image: {
      _src: "/images/lucky-roulette.png",
      type: "icon",
      size: { w: iconSize, h: iconSize },
    },
    fontSize: fontSize,
  },
  {
    _id: 4,
    _href: "/benefits/benefitMyLuck",
    name: "운세서비스",
    image: {
      _src: "/images/my-luck.png",
      type: "icon",
      size: { w: iconSize, h: iconSize },
    },
    fontSize: fontSize,
  },
  {
    _id: 4,
    _href: "/myLounge/receipt",
    name: "영수증",
    image: {
      _src: "/images/receipt.png",
      type: "icon",
      size: { w: iconSize, h: iconSize },
    },
    fontSize: fontSize,
  },
];

//FIXME: tailwind는 빌드 시점에 사용하지 않는 css를 제거한다.
//동적으로 값을 할당하는 경우 tailwind의 css가 빌드 이후에 값이
//반영되기 때문에 undefined 또는 클래스 명에만 값이 존재하고 css는 없을 것.
//SOLUTION: 완성된 클래스명을 동적으로 할당하거나, safelist로 설정할 것.
//LINK: https://tailwindcss.com/docs/content-configuration#dynamic-class-names
export default function BodyNav() {
  return (
    <div className="mt-[-24px] mx-[20px] mb-[24px] h-[88px] bg-white relative z-2 drop-shadow-[0_3px_8px_rgba(0,0,0,0.08)] rounded-lg">
      <ul className="flex justify-between items-center px-[19px] py-[10px]">
        {bodyNavProps.map(({ _id, _href, name, image, fontSize }) => (
          <li key={_id}>
            <LinkImageWithFallback
              _href={_href}
              name={name}
              image={image}
              fontSize={fontSize}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
