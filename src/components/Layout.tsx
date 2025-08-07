import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  hideSidebar?: boolean;
}

export function Layout({ children, hideSidebar = false }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full bg-background">
      <Navbar 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        showMenu={!hideSidebar}
      />
      
      {!hideSidebar && (
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />
      )}
      
      <main className={`flex-1 pt-16 p-6 transition-all duration-300 ${
        !hideSidebar ? 'ml-64' : 'ml-0'
      }`}>
        {children}
      </main>
    </div>
  );
}