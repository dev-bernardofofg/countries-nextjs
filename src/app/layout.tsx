import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./_components/base-header";
import { Nunito } from "next/font/google";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={nunito.className}>
      <body className={`antialiased`}>
        <main className="bg-gray-100 h-screen">
          <Header />
          <div className="bg-gray-100 w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
