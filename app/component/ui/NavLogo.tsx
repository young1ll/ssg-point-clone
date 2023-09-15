//"use client" #화면 사이즈에 따라 로고 사이즈 변경이 필요하면 CSR
import Image from "next/image";
import Link from "next/link";
import LinkImageWithFallback from "./LinkImageWithFallback";

const logoHrefPath = "/";
const logoSrcPath = "/images/logo_header.840b502c.gif";
// const logoType: "icon";
const logoName = "SHINSEAGAE POINT";

export default function NavLogo() {
  //페이지에 따라 변경될 여지가 있음.
  console.log();
  return (
    <Link className="relative w-[57px] h-[36px]" href={"/"}>
      <Image
        className="indent-[-999em] ml-[-28px]"
        //TODO: ImageStorge 설정 후 src 변경하거나 또는 최적화 위한 다른 Logo Component 생성
        // src="/images/logo_header.840b502c.gif"
        src={logoSrcPath}
        fill={true}
        // sizes="(max-width: 57px;)"
        alt={logoName}
      />
    </Link>
  );
}
