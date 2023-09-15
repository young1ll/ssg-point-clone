"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import FallbackImage from "../atom/FallbackImage";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { useRouter } from "next/navigation";
import myEventList from "@/data/event.json";

export async function fetchEventMain() {
  const res = await fetch(`http://3.35.193.212:8000/api/v1/events`, {
    method: "GET",
  });
  const data = await res.json();
  console.log(data);
  return data;
}

export default function MainBanner() {
  const router = useRouter();
  const [mainBanners, setMainBanners] = useState([]);

  const mainBannersPromise = fetchEventMain();
  useEffect(() => {
    mainBannersPromise
      .then((v) => setMainBanners(v))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="relative z-0">
      {/* TODO: 이벤트 리스트 표시(api) */}
      <Swiper
        className="mainBannerSwiper group "
        pagination={{
          type: "fraction",
        }}
        autoHeight
        scrollbar
        modules={[Scrollbar, Pagination]}
      >
        {myEventList &&
          myEventList
            .filter((main) => main.display == "main")
            .map((slide) => (
              <SwiperSlide
                key={slide.id}
                className="relative w-full min-h-[90.667vw]"
              >
                {slide.banner_thumb && (
                  <Image
                    src={`https://storage.googleapis.com/ssg-images${slide.banner_thumb}`}
                    fill
                    alt={`${slide.name} 배너 이미지`}
                    onError={() => <FallbackImage />}
                    onClick={() =>
                      router.push(`/ingevents/detail?eventNo=${slide.id}`)
                    }
                  />
                )}
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
