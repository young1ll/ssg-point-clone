"use client";
import Image from "next/image";
import Card from "@/components/atom/Card";
import { staticPageFetch } from "@/utils/StaticFetch";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import FallbackImage from "@/components/atom/FallbackImage";
import MainBanner from "@/components/organisam/MainBanner";

export default function Home() {
  return (
    <>
      <div className="mt-[36px]">
        <MainBanner />
      </div>

      <Card className="mt-[-24px] mx-5 mb-[24px] h-[88px] z-2" fit shadow>
        <ul className="flex justify-between items-center px-[19px] py-[10px]">
          {staticPageFetch
            .getPageListByEachName([
              "이벤트",
              "출석체크",
              "럭키룰렛",
              "운세서비스",
              "영수증",
            ])
            .map(
              (page) =>
                page && (
                  <li key={page.id}>
                    <Link
                      className="block w-full text-xs items-center text-center text-gray-600"
                      href={page.pathname as string}
                    >
                      <Image
                        className="block mx-auto"
                        src={page?.primary_icon as string}
                        width={45}
                        height={45}
                        alt={page.name}
                      />
                      {page.name}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </Card>

      <div className="bg-white">
        <div className="relative z-0">
          <Swiper
            className="mainBannerSwiper group "
            pagination={{
              type: "fraction",
            }}
            autoHeight
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/home/ssg_body_banner_01.jpg`}
                  fill
                  alt={`body_banner_01`}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/home/ssg_body_banner_02.png`}
                  fill
                  alt={`body_banner_02`}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/ingevents/detail?eventNo=3"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/home/ssg_body_banner_03.jpg`}
                  fill
                  alt={`body_banner_03`}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="relative z-0">
          <Swiper
            className="mainBannerSwiper group "
            pagination={{
              type: "fraction",
            }}
            autoHeight
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/event/event_momkids_banner_09.png`}
                  fill
                  alt={`body_banner_momkids`}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/event/event_speedmate_banner_2023.jpg`}
                  fill
                  alt={`body_banner_speedmate`}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="relative z-0">
          <Swiper
            className="mainBannerSwiper group "
            pagination={{
              type: "fraction",
            }}
            autoHeight
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/club/club_momkids_banner.jpg`}
                  fill
                  alt={`body_club_momkids`}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/club/club_carService_banner.jpg`}
                  fill
                  alt={`body_club_carService`}
                />
              </Link>
            </SwiperSlide>
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link href={"http://localhost:3000/couponPage"}>
                <Image
                  src={`https://storage.googleapis.com/ssg-images/club/club_beauty.jpg`}
                  fill
                  alt={`body_club_beauty`}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="relative z-0">
          <Swiper
            className="mainBannerSwiper group "
            pagination={{
              type: "fraction",
            }}
            autoHeight
            scrollbar
            modules={[Scrollbar, Pagination]}
          >
            <SwiperSlide className="relative w-full min-h-[90.667vw]">
              <Link
                href={
                  "https://www.shinsegaegroupnewsroom.com/category/newsletter/"
                }
              >
                <Image
                  src={`https://storage.googleapis.com/ssg-images/home/newsletter.jpg`}
                  fill
                  alt={`body_newsletter`}
                />
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
