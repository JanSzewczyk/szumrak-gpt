import { Avatar } from "@szum-tech/design-system";
import { Message } from "@types";

type ChatMessageProps = {
  message: Message;
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isBot = "SzumrakGPT" === message.user._id;

  return (
    <div className={`space-y-2 p-4 md:rounded ${isBot && "bg-gray-700"}`}>
      <div className="flex flex-row items-center space-x-4">
        <Avatar src={message.user.avatar} alt={message.user.name} size="sm" />

        <div className="flex flex-1 flex-col sm:flex-row sm:justify-between">
          <p className="typography-subtitle-1">{message.user.name}</p>

          <p className="typography-caption text-typography-disabled">
            {message.createdAt.toDate().toLocaleString()}
          </p>
        </div>
      </div>
      <p className="typography-body-2 ml-10 break-words sm:typography-body-1">{message.text}</p>
    </div>
  );
}
