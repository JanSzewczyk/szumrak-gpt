import { PaperAirplaneIcon } from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import React from "react";
import { addDoc, collection, Timestamp } from "@firebase/firestore";
import { ChatConfig, Message } from "@types";
import { db } from "@lib/firebase";

type ChatInputProps = {
  onChange: (value: boolean) => void;
  config: ChatConfig;
};

export default function ChatInput({ onChange, config }: ChatInputProps) {
  const { data: session } = useSession();
  const [prompt, setPrompt] = React.useState<string>("");

  async function sentMessage(e: React.FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    if (prompt) {
      const value = prompt.trim();
      setPrompt("");

      const newMessage: Message = {
        text: value,
        createdAt: Timestamp.now(),
        user: {
          _id: session?.user?.email!,
          name: session?.user?.name!,
          avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`
        }
      };

      await addDoc(collection(db, "users", session?.user?.email!, "messages"), newMessage);

      onChange(true);

      await fetch("/api/szumrak/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          prompt,
          model: config.model,
          session
        })
      }).finally(() => onChange(false));
    }
  }

  return (
    <div className="rounded-t bg-gray-800">
      <form className="flex gap-x-6 p-2 sm:p-6" onSubmit={sentMessage}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          className="flex-1 bg-transparent focus:outline-0 disabled:cursor-not-allowed disabled:text-typography-disabled"
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="rounded bg-primary-500 px-4 py-2 disabled:cursor-not-allowed disabled:bg-gray-500"
        >
          <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
        </button>
      </form>
    </div>
  );
}
