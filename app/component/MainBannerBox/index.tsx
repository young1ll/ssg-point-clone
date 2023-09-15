import { ImageLinkPropTest } from "@/types/LinkProps";
import LinkImageWithFallback from "../ui/LinkImageWithFallback";

const BannerList: ImageLinkPropTest[] = [
  {
    _id: 1,
    _href: "/",
    name: "8월의 맘키즈클럽 플러스",
    image: {
      _src: "/images/main-banners-01.png",
      type: "image",
    },
  },
  {
    _id: 2,
    _href: "/",
    name: "9월의 맘키즈클럽 플러스",
    image: {
      _src: "/images/main-banners-02.png",
      type: "image",
    },
  },
  {
    _id: 3,
    _href: "/",
    name: "10월의 맘키즈클럽 플러스",
    image: {
      _src: "/images/main-banners-03.png",
      type: "image",
    },
  },
];

export default function MainBannerBox() {
  return (
    <div>
      {BannerList ? (
        BannerList.map((item) => (
          <div key={item._id} className="relative min-h-[90.667vw]">
            <LinkImageWithFallback
              _href={item._href}
              name=""
              image={item.image}
            />
          </div>
        ))
      ) : (
        <></>
      )}
    </div>
  );
}
