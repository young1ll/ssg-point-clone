import Image from "next/image";
import Link from "next/link";

//TODO: 이 페이지(bannerList) 자체도 swiper 사용해야 함
const banners: Array<{ key: number; _src: string; _href: string }> = [
  //TODO: banner의 최소정보.
  //eventNo: 게시물 정보
  //details?: api상 단일 게시물 요청
  //key와 게시물 id를 일치시키는게 좋을 듯
  {
    key: 1,
    _src: "/images/main-banners-01.png",
    _href: "ingevents/detail?eventNo=3373",
  },
  {
    key: 2,
    _src: "/images/main-banners-01.png",
    _href: "ingevents/detail?eventNo=3373",
  },
];

export default function BannerList() {
  return (
    <div>
      <div className="touch-pan-y">
        <ul>
          {banners.map(({ key, _src, _href }) => (
            <li key={key}>
              <Link href={_href}>
                <Image src={_src} fill={true} alt={`${key}`} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
