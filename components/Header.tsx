"use client";

import { signOut, useSession } from "next-auth/react";
import { Avatar } from "@szum-tech/design-system";
import Link from "next/link";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/20/solid";
import packageJson from "../package.json";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 h-16 bg-black">
      <div className="mx-auto flex h-full max-w-7xl flex-row items-center justify-between px-4">
        <div className="flex flex-col sm:flex-row sm:gap-2">
          <Link href="/">
            <p className="typography-heading-6 sm:typography-heading-5">SzumrakGTP</p>
          </Link>
          <p className="mt-auto font-code text-xs text-typography-secondary sm:text-sm">
            v{packageJson.version}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {session ? <Avatar src={session.user?.image!} alt={session.user?.name!} /> : null}
          <button className="typography-button" onClick={() => signOut()}>
            <ArrowRightOnRectangleIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
