// app/chat/[contactId]/page.tsx
"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import jsonData from '@/app/data.json';
import { useParams, useRouter } from 'next/navigation';
import { MessageSquare, ArrowLeft, Reply } from 'lucide-react';
import { useSidebar } from '@/components/ui/sidebar';
import { FaPaperclip, FaSmile } from 'react-icons/fa'; // Emoji and attachment icons
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';


export default function Page() {
  const params = useParams();
  const router = useRouter();
  const { isMobile} = useSidebar();
  const contactId = params?.contactId as string;

  const currentContact = jsonData.contacts.find(
    (contact) => contact.id === contactId
  );

  if (!currentContact) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-muted/30">
        <MessageSquare className="w-16 h-16 text-muted-foreground mb-4" />
        <p className="text-lg text-muted-foreground">Contact not found or select a conversation</p>
      </div>
    );
  }

  return (
    <main className="h-screen flex flex-col bg-muted/30">
      {/* Contact Header with Back Button */}
      <div className="border-b p-4 bg-background shadow-sm">
        <div className="flex items-center gap-3">
          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => router.push('/')}
              className="md:hidden"
              aria-label="Back to contacts"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
          )}
        <div className="flex-shrink-0 mr-2">
          <div className="bg-foreground text-background rounded-full w-10 h-10 flex items-center justify-center text-lg font-medium">
            {currentContact.name.charAt(0).toUpperCase()}
          </div>
        </div>
          <div>
            <h2 className="text-xl font-semibold">{currentContact.name}</h2>
            <p className="text-sm text-muted-foreground">{currentContact.mobileNumber}</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {currentContact.messages.map((message, index) => {
        const isSent = message.status === 'sent';
        
        return (
          <div
            key={index}
            className={cn(
              "flex flex-col relative w-full",
              isSent ? "items-end" : "items-start"
            )}
          >
            <div className={cn(
              "flex items-start gap-2",
              isSent && "flex-row-reverse"
            )}>
              <Card
                className={cn(
                  "max-w-[85%] sm:max-w-[85%] shadow-sm mb-5",
                  isSent 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-background"
                )}
              >
                <CardContent className="p-2 sm:p-3">
                  <p className="whitespace-pre-wrap break-words text-sm">
                    {message.message}
                  </p>
                </CardContent>
              </Card>
              {!isSent && (
                <Button 
                  className="text-[10px] mt-4 sm:text-xs text-muted-foreground hover:text-foreground" 
                  variant="outline"
                  size="sm"
                >
                  <Reply className="h-3 w-3 mr-1" />
                  Reply
                </Button>
              )}
              <span 
                className={cn(
                  "text-[10px] sm:text-xs text-muted-foreground absolute bottom-0 px-2",
                )}
              >
                {message.time}
              </span>
            </div>
          </div>
        );
      })}
    </div>
      {/* Message Input Area */}
      <div className="border-t p-3 sm:p-4 bg-background">
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <button
            className="text-xl"
          >
          <FaSmile />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 rounded-md border p-2 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm sm:text-base"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="px-2 py-1">
                <FaPaperclip className="text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuItem>Attach File</DropdownMenuItem>
              <DropdownMenuItem>Use Camera</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button 
            type="submit"
            className="whitespace-nowrap"
          >
            Send
          </Button>
        </form>
      </div>
    </main>
  );
}