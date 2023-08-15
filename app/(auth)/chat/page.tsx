import { doc, getDoc } from "@firebase/firestore";
import { db } from "@lib/firebase";
import { getServerSession } from "next-auth";
import Chat from "@components/chat/Chat";

export default async function ChatPage() {
  const session = await getServerSession();
  const chatConfiguration = await getDoc(doc(db, "users", session?.user?.email!));
  const chatConfig = chatConfiguration.data()?.config;

  return (
    <div className="mx-auto h-app w-full max-w-4xl flex-1 md:px-8">
      {chatConfig ? <Chat config={chatConfig} /> : "Szumrak does not exist"}
    </div>
  );
}
