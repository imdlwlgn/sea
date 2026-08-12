import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "물가봄 | 수산물 가격 확인",
  description: "사진과 무게로 수산물의 평균 가격을 확인하세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

