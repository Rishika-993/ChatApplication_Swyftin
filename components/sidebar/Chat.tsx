import React from "react";

type ChatProps = {
  id: string;
  name: string;
  mobileNumber: string;
  messages: {
    message: string;
    time: string;
    status: string;
  }[];
  isActive?: boolean;
};

const Chat: React.FC<ChatProps> = ({
  id,
  name,
  mobileNumber,
  messages,
  isActive = false,
}) => {
  // Get the latest message
  const latestMessage = messages[messages.length - 1];

  // Function to truncate message to a specified word count
  const truncateMessage = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex p-2 justify-between items-center hover:bg-accent rounded-lg cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0 mr-3">
          <div className="bg-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{mobileNumber}</h1>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {truncateMessage(latestMessage.message, 5)}
          </p>
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{latestMessage.time}</div>
    </div>
  );
};

export default Chat;
