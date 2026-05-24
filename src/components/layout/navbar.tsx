"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useRoleStore, Role } from "@/store/role-store";
import { Cpu, Terminal, Briefcase, Eye } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { activeRole, setRole } = useRoleStore();

  const navLinks = [
    { href: "/", label: "Dashboard" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Intelligence Map" },
    { href: "/experience", label: "Experience" },
    { href: "/resume", label: "Resume" },
  ];

  const roles: { id: Role; label: string; icon: React.ElementType }[] = [
    { id: "recruiter", label: "Recruiter View", icon: Briefcase },
    { id: "technical", label: "Technical View", icon: Terminal },
    { id: "explorer", label: "Explorer", icon: Eye },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 group-hover:border-primary/50 transition-colors">
              <Cpu className="h-4 w-4 text-primary" />
            </div>
            <span className="font-semibold tracking-tight text-foreground hidden md:inline-block">
              Rahul Kadyan
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md transition-colors hover:text-foreground",
                  pathname === link.href ? "text-foreground bg-secondary/50" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center p-1 rounded-lg bg-secondary/50 border border-border/50">
            {roles.map((role) => {
              const Icon = role.icon;
              const isActive = activeRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setRole(role.id)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                    isActive 
                      ? "bg-background text-primary shadow-sm ring-1 ring-border/50" 
                      : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {role.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
