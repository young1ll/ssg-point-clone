import { AppContextProvider } from "@/provider/AppContextProvider";
import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/provider/AuthContextProvider";
import TabbarFooter from "@/components/TabbarFooter";

const notoKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "SHINSEGEA POINT APP",
  description: "SHINSEGEA POINT APP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={notoKr.className}>
        <AuthContextProvider>
          <AppContextProvider>
            <Header />
            <section className="pt-14 bg-white">{children}</section>
          </AppContextProvider>
          <Footer />
          <TabbarFooter />
        </AuthContextProvider>
      </body>
    </html>
  );
}