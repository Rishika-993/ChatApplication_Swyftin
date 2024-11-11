"use client";
import { useSidebar } from "@/components/ui/sidebar";
import React, { useEffect } from "react";

const Page = () => {
  const { isMobile, toggleSidebar } = useSidebar();

  useEffect(() => {
    if (isMobile) {
      toggleSidebar();
    }
  }, [isMobile, toggleSidebar]);

  return (
    <div className="size-full flex flex-col justify-center items-center gap-4">
      <h1 className="text-4xl font-bold text-center">
        Welcome to Chat Application
      </h1>
    </div>
  );
};

export default Page;
