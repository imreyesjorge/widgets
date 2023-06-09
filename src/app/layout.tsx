import Link from "next/link";
import { GithubIcon } from "../components/atoms/icons/GithubIcon";
import "./global.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Widgets – Reyes",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className="rootLayout">
          <p className="topBanner">Show-off Project 🚀</p>
          <div>{children}</div>
          <div className="socialContainer">
            <Link href="https://github.com/imreyesjorge/widgets" style={{ height: 20 }}>
              <GithubIcon fill="#141414" size={20} />
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}
