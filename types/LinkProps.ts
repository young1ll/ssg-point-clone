export interface IconProp {
  key: number;
  _src: string;
  iconName: string;
}
/**
 * IconLink 인터페이스(Required)\
 * IconProp: { key: number, _src: string, iconName: stirng }\
 * {
 * key: nubmer, _href: string, icon: Icon, name: string, size: number
 * }
 * */
export interface IconLink extends IconProp {
  key: number;
  _href: string;
  name: string;
  size: number;
  fontSize: number;
}

export interface ImageProp {
  key: number;
  _src: string;
  imgName: string;
}
/**
 * ImageLink 인터페이스(Required)\
 * ImageProp: { key: number, _src: string, imageName: stirng }\
 * {
 *  key:number, _href: string, image: Image, name: string
 * }
 * */
export interface ImageLink extends ImageProp {
  key: number;
  _href: string;
  name: string;
  size: number;
  fontSize: string;
}

/**
 * ##########      Test      ############
 */

export interface ImagePropTest {
  _id?: number;
  _src: string;
  size?: { h: number; w: number };
  type: "icon" | "profile" | "image";
  // fallback: "icon_fallback" | "profile_fallback" | "iamge_fallback"; //WARN: fallback의 값은 type에 따라 결정된다.
}
export interface ImageLinkPropTest {
  // 확장 시 속성이 오버라이드되어 구분이 어려움
  _id?: number;
  _href: string;
  name: string;
  image: ImagePropTest;
  fontSize?: "xs" | "sm" | "base" | "lg" | "xl";
  fontHidden?: boolean;
}

export interface SwiperItemProp {
  item: ImagePropTest;
  name: string;
}
