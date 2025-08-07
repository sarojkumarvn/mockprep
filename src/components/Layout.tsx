import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen w-full bg-background">
      <Sidebar />
      <main className="flex-1 ml-64 p-6">
        {children}
      </main>
    </div>
  );
}