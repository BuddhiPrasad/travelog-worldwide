import { Inter } from "next/font/google";
import "./style.css";
import TravelerHeader from "./_components/header";
import TravelerNav from "./_components/nav";
import WrapperContainer from "@/components/wrapper-container";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col">
          <TravelerHeader />
          <WrapperContainer>
            <div className="flex pt-4">{children}</div>
          </WrapperContainer>
        </div>
      </body>
    </html>
  );
}
