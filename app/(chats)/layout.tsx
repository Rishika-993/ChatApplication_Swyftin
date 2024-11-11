import Sidebar  from "@/components/sidebar/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="w-screen h-screen flex flex-col">
        <div className="flex flex-col flex-1 w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}