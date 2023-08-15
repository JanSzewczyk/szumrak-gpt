import "../styles/globals.css";
import { getServerSession } from "next-auth";

import SessionProvider from "@components/SessionProvider";
import Login from "@components/Login";
import { authOptions } from "@api/auth/[...nextauth]/route";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SzumrakGTP",
  viewport: "width=device-width, initial-scale=1",
  icons: "/favicon.ico"
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(authOptions);

  return (
    <html className="dark">
      <head />
      <body>
        <SessionProvider session={session}>{!session ? <Login /> : children}</SessionProvider>
      </body>
    </html>
  );
}
