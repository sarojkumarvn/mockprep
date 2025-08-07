import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  BookOpen,
  Brain,
  FileText,
  Globe,
  GraduationCap,
  Home,
  MapPin,
  MessageCircle,
  NotebookPen,
  Settings,
  Trophy,
  Users,
  Zap,
  FileCheck,
  Briefcase,
  BookOpenCheck
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home },
  { name: "Roadmaps", href: "/roadmaps", icon: MapPin },
  { name: "Mock Tests", href: "/mock-tests", icon: FileCheck },
  { name: "AI Interview", href: "/ai-interview", icon: Brain },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Resume Builder", href: "/resume-builder", icon: FileText },
  { name: "Study Hub", href: "/study-hub", icon: GraduationCap },
  { name: "Notes", href: "/notes", icon: NotebookPen },
  { name: "PDF Tools", href: "/pdf-tools", icon: FileText },
  { name: "Community", href: "/community", icon: Users },
  { name: "Blog", href: "/blog", icon: BookOpen },
  { name: "Jobs", href: "/jobs", icon: Briefcase },
  { name: "Documentation", href: "/documentation", icon: BookOpenCheck },
  { name: "Achievements", href: "/achievements", icon: Trophy },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex h-screen w-64 flex-col fixed left-0 top-0 bg-sidebar border-r border-sidebar-border">
      {/* Header */}
      <div className="flex h-16 items-center justify-between px-6 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold text-sidebar-foreground">AI Career</span>
        </div>
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <NavLink
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-sidebar-accent",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:text-sidebar-accent-foreground"
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}