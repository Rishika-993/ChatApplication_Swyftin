import React from "react";
import { Button } from "../ui/button";

type ChatProps = {
  id: string;
  name: string;
  mobileNumber: string;
  messages: {
    message: string;
    time: string;
    status: string;
    readStatus?: string; // Add readStatus field to message
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

  // Function to count unread messages
  const unreadCount = messages.filter((msg) => msg.readStatus === "unread").length;

  return (
    <div className="flex p-2 justify-between items-center hover:bg-accent rounded-lg cursor-pointer">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0 mr-3">
          <div className="bg-muted rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">{mobileNumber}</h1>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {truncateMessage(latestMessage.message, 5)}
          </p>
          <Button variant="outline" size="sm" className="mt-2 w-12"> + Add </Button>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-sm text-muted-foreground">{latestMessage.time}</div>
        {unreadCount > 0 && (
          <div className=" bg-foreground text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center mt-1">
            {unreadCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;
