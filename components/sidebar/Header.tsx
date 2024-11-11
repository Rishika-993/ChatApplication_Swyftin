import React from "react";
import { ModeToggle } from "@/components/sidebar/ModeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div>
    <div className="w-full justify-between items-center flex p-2">
      <div className="flex items-center">
        <h1 className="text-3xl font-semibold p-1">Chats</h1>
      </div>
      <div className="flex gap-4">
        <ModeToggle />
      </div>
    </div>
    <div className="flex flex-col items-start gap-4">
          <div className="relative w-full">
            <Input
              type="text"
              placeholder="Search..."
              className="pr-10 rounded-2xl"
              aria-label="Search"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          <Button variant='outline' className="border-black" size='sm'>
            Leads
          </Button>
    </div>
    </div>
    
    
  );
};

export default Header;