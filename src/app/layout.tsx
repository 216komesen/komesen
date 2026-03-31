import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "劇団東京マハロ 20周年記念公演",
  description: "SNSカウントダウンキャンペーン管理システム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
