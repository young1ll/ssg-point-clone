"use client";
import Link from "next/link";
import { signIn } from "next-auth/react";

export default function OAuthLogin() {
  const handleOAuthLogin = {
    kakao: () => signIn("kakao", { redirect: true, callbackUrl: "/" }),
    naver: () => signIn("naver", { redirect: true, callbackUrl: "/" }),
    google: () => signIn("google", { redirect: true, callbackUrl: "/" }),
  };
  return (
    <div className="px-12 pt-10 pb-20 bg-[#f9f9f9]">
      <h3 className="text-sm leading-6 font-medium mb-6">간편 로그인</h3>
      <ul className="sns_list flex justify-between items-center mt-5">
        <li className="inline-block">
          {/* Naver */}
          <button
            className="relative block w-12 h-12 bg-[url('/images/ico_sns.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-56px]"
            onClick={handleOAuthLogin.naver}
          />
        </li>
        <li className="inline-block">
          {/* Kakao */}
          <button
            className="relative block w-12 h-12 bg-[url('/images/ico_sns.png')] bg-no-repeat bg-[98%_auto] bg-[left_0px_top_-113px]"
            onClick={handleOAuthLogin.kakao}
          />
        </li>
        <li className="inline-block">
          {/* Apple */}
          <button
            className="relative block w-12 h-12 bg-[url('/images/icon_sms_google.png')] bg-no-repeat bg-[94%_auto]"
            onClick={handleOAuthLogin.google}
          />
        </li>
      </ul>
    </div>
  );
}
