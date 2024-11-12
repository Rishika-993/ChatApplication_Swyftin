import React from "react";
import { ModeToggle } from "@/components/sidebar/ModeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-2 space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
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
        <ModeToggle />
      </div>
      
      <div>
        <Button variant='outline' className="border-black" size='sm'>
          Leads
        </Button>
      </div>
    </div>
  );
};

export default Header;