"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginRedirector() {
  const session = useSession();

  const isLoggedIn = session.status == "authenticated";

  return isLoggedIn ? UserOn() : UserOff();
}

const UserOn = () => {
  return "";
};
const UserOff = () => {
  const router = useRouter();
  router.replace("/login");
  return "";
};
