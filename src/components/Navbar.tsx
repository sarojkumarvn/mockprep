import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "./ThemeToggle";
import { 
  Bell, 
  Search, 
  User,
  Menu
} from "lucide-react";

interface NavbarProps {
  onMenuClick?: () => void;
  showMenu?: boolean;
}

export function Navbar({ onMenuClick, showMenu = true }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {showMenu && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={onMenuClick}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">CareerPlatform</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className="hidden md:flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2 max-w-md flex-1 mx-8">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input 
            placeholder="Search courses, roadmaps, tests..." 
            className="bg-transparent border-none outline-none flex-1 text-sm text-foreground placeholder:text-muted-foreground"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-red-500 text-white">
              3
            </Badge>
          </Button>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Profile */}
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-secondary rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="hidden sm:block text-sm font-medium">John Doe</span>
          </Button>
        </div>
      </div>
    </nav>
  );
}