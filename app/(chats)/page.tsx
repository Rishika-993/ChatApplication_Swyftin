"use client";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import React from "react";

const Page = () => {
  const { isMobile, toggleSidebar } = useSidebar();
  
 
  return(
    <div className="w-full h-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-semibold text-center">
        Welcome to Chat Application
      </h1>
      <p className="text-lg text-center">
        Start a conversation with your friends and family 
      </p>
      {isMobile && <Button onClick={toggleSidebar}>Open Chats</Button>}
    </div>
  );
};

export default Page;