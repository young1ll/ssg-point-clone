import { options } from "@/app/api/auth/[...nextauth]/options";
import FormLogin from "@/components/organisam/FormLogin";
import NavLogo from "@/components/NavLogo";
import { getServerSession } from "next-auth";
import Link from "next/link";
import OAuthLogin from "@/components/organisam/OAuthLogin";

export default async function Login() {
  const session = await getServerSession(options);
  console.log(session);

  const list_between =
    "after:content-[''] after:inline-block after:w-[1px] after:h-[13px] after:bg-[#ebebeb] ]after:mt-[5px] after:mx-[16px]";
  return (
    <>
      <div className="p-[40px]">
        <NavLogo />

        {/* Login Form */}
        <FormLogin />

        <ul className="text-center text-sm divide-x-2">
          <Link className={`inline-block px-2`} href={"/member/findIdPw"}>
            아이디 찾기
          </Link>
          <Link className={`inline-block px-2`} href={"/member/findPw"}>
            비밀번호 찾기
          </Link>
          <Link className="inline-block px-2" href={"/member/join"}>
            회원가입
          </Link>
        </ul>
      </div>

      {/* Social Login */}
      <OAuthLogin />
    </>
  );
}
