"use client";

import { PlusIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { doc, setDoc, Timestamp } from "@firebase/firestore";
import { db } from "@lib/firebase";

export default function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  async function createNewChat(): Promise<void> {
    await setDoc(doc(db, "users", session?.user?.email!), {
      userId: session?.user?.email!,
      createAt: Timestamp.now(),
      config: {
        name: "SzumrakGPT",
        avatar: "https://ui-avatars.com/api/?name=Szumrak",
        model: "text-davinci-003"
      }
    });
    router.push(`/chat`);
  }

  return (
    <button
      onClick={createNewChat}
      className="flex flex-row items-center border border-gray-500 p-2"
    >
      <PlusIcon className="br-2 h-4 w-4" />
      <p>New Chat</p>
    </button>
  );
}
