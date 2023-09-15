"use client";
import { ImageLinkPropTest } from "@/types/LinkProps";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useState } from "react";

/**
 * @version 0.1
 * @interface ImageLinkPropTest
 * @param {ImagePropTest} image ImageProp type.
 * @returns ReactFC
 */
const LinkImageWithFallback = ({
  _id,
  _href,
  name,
  image,
  fontSize,
  fontHidden,
}: ImageLinkPropTest) => {
  const [errFallback, setErrFallback] = useState(true); //인자로 받은 src

  const ImageFallback = () => {
    const width = image.size?.w ? `w-[${image.size.w}px]` : "w-full";
    const height = image.size?.h ? `h-[${image.size.h}px]` : "h-full";
    return (
      <div
        className={`relative ${width} ${height} p-10 rounded-lg bg-gray-300 dark:bg-gray-700`}
      >
        <svg
          className="w-full h-full text-gray-200 dark:text-gray-600 mx-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
          width={image.size?.w}
          height={image.size?.h}
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>
    );
  };

  console.log(fontSize);
  //TODO: 현재 image.size의 nullish 여부에 따라 유사한 <Image /> 가 반복되고 있는데, 가능하면 수정.
  return errFallback ? (
    <Suspense fallback={<ImageFallback />}>
      <Link
        // 완성된 클래스명을 위해 복잡해졌는데... 개선하든 말든
        className={`block w-full text-center ${
          fontSize == "xs"
            ? "text-xs"
            : fontSize == "sm"
            ? "text-sm"
            : fontSize
            ? "base"
              ? "text-base"
              : fontSize == "lg"
              ? "text-lg"
              : fontSize == "xl"
            : "text-xl"
        }`}
        href={_href}
      >
        {image.size ? (
          <Image
            className="block mx-auto"
            alt={name}
            src={image._src}
            width={image.size.w}
            height={image.size.h}
            onError={() => setErrFallback(false)}
          />
        ) : (
          <Image
            className="block mx-auto"
            alt={name}
            src={image._src}
            fill={true}
            onError={() => setErrFallback(false)}
          />
        )}
        {fontHidden ?? name}
      </Link>
    </Suspense>
  ) : (
    <ImageFallback />
  );
};

export default LinkImageWithFallback;
