import { Button } from "@/components/ui/button";
import { Home, BookOpen, Brain, MessageSquare, TrendingUp, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/dashboard", label: "Dashboard", icon: TrendingUp },
    { path: "/learn", label: "Learn", icon: BookOpen },
    { path: "/quiz", label: "Quiz", icon: Brain },
    { path: "/chat", label: "AI Chat", icon: MessageSquare },
  ];

  return (
    <nav className="bg-card border-b border-border shadow-card">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-success rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
              InvestBuddy
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    className="flex items-center space-x-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          <Button variant="outline" className="hidden md:flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>Login</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;