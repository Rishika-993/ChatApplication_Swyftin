"use client";
import React, {useMemo} from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { useRouter, useParams } from "next/navigation";
import Chat from "./Contacts";
import jsonData from "@/app/data.json";
import Header from "./TopSection";

export function AppSidebar() {
  const router = useRouter();
  const params = useParams();
  const currentContactId = params?.contactId as string;

  // Sorting contacts by last message date
  const sortedContacts = useMemo(() => {
    return jsonData?.contacts
      ? [...jsonData.contacts].sort((a, b) => {
          const timeA = a.messages[a.messages.length - 1].time;
          const timeB = b.messages[b.messages.length - 1].time;
          const parsedTimeA = Date.parse(`01/01/1970 ${timeA}`);
          const parsedTimeB = Date.parse(`01/01/1970 ${timeB}`);

          return parsedTimeB - parsedTimeA;
        })
      : [];
  }, [jsonData]);

  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <Header />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sortedContacts.map((contact) => {
                const isActive = currentContactId === contact.id;
                return (
                  <SidebarMenuItem
                    key={contact.id}
                    onClick={() => {
                      router.push(`/${contact.id}`);
                      if (isMobile) toggleSidebar();
                    }}
                    className={isActive ? "bg-background border-2 rounded-lg" : ""}
                  >
                    <SidebarMenuButton asChild>
                      <Chat
                        id={contact.id}
                        name={contact.name}
                        mobileNumber={contact.mobileNumber}
                        messages={contact.messages}
                        isActive={isActive}
                      />
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
