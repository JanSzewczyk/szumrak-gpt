"use client";

import ChatInput from "@components/chat/ChatImput";
import { ChatConfig, Message } from "@types";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, orderBy, query, Timestamp } from "@firebase/firestore";
import { db } from "@lib/firebase";
import ChatMessage from "@components/chat/ChatMessage";
import React from "react";
import { Avatar } from "@szum-tech/design-system";

type ChatProps = {
  config: ChatConfig;
};

export default function Chat({ config }: ChatProps) {
  const { data: session } = useSession();

  const ref = React.useRef<HTMLDivElement>(null);
  const prevPosition = React.useRef<number | null>(null);

  const [szumrakThinking, setSzumrakThinking] = React.useState<boolean>(false);

  const [messages] = useCollection(
    query(collection(db, "users", session?.user?.email!, "messages"), orderBy("createdAt", "asc"))
  );

  React.useEffect(() => {
    if (messages?.docs.length && ref.current) {
      if (
        !prevPosition.current ||
        prevPosition.current <= ref.current.scrollTop + ref.current.offsetHeight ||
        szumrakThinking
      ) {
        ref.current.scroll({
          top: ref.current.scrollHeight,
          behavior: "smooth"
        });
      }

      if (!szumrakThinking) {
        prevPosition.current = ref.current.scrollHeight;
      }
    }
  }, [messages, szumrakThinking]);

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="bg-gray-800 px-4 pt-2 pb-4 md:rounded-b">
        <div className="flex flex-row items-center gap-x-4">
          <Avatar alt={config.name} src={config.avatar} />
          <h2 className="items-centers typography-heading-6">{config.name}</h2>
        </div>
      </div>

      <div className="scroll my-2 flex flex-1 flex-col overflow-y-auto" ref={ref}>
        {messages?.docs.map((message) => (
          <ChatMessage key={message.id} message={message.data() as Message} />
        ))}

        {szumrakThinking ? (
          <ChatMessage
            message={{
              createdAt: Timestamp.now(),
              text: `Typing...`,
              user: {
                _id: "SzumrakGPT",
                avatar: config.avatar,
                name: config.name
              }
            }}
          />
        ) : null}
      </div>

      <ChatInput config={config} onChange={(value) => setSzumrakThinking(value)} />
    </div>
  );
}
