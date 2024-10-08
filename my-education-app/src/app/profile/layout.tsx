import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/new-york/ui/avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/new-york/ui/collapsible";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/new-york/ui/tooltip";
import {
  BookOpenIcon,
  ChevronRightIcon,
  MountainIcon,
  PowerIcon,
  TrophyIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <aside className="hidden w-64 shrink-0 border-r bg-background p-6 md:block">
        <div className="mb-6 flex items-center gap-2">
          <Avatar className="h-12 w-12">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>JP</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-lg font-medium">Jane Doe</h3>
            <p className="text-sm text-muted-foreground">jane@example.com</p>
          </div>
        </div>
        <hr/>
        <nav className="flex flex-1 flex-col space-y-4 px-4 py-6">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <div className="h-5 w-5" />
            <span>Profile</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <div className="h-5 w-5" />
            <span>Courses</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <div className="h-5 w-5" />
            <span>Support</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <div className="h-5 w-5" />
            <span>Achievements</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <div className="h-5 w-5" />
            <span>Community</span>
          </Link>
        </nav>
      </aside>
     
{/* 
      <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Link
              href="#"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <MountainIcon className="h-4 w-4 transition-all group-hover:scale-110" />

              <span className="sr-only">Acme Inc</span>
            </Link>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <UserIcon className="h-5 w-5" />
                
                  <span className="sr-only">Profile</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Profile</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <BookOpenIcon className="h-5 w-5" />
                  <span className="sr-only">Courses</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Courses</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <PowerIcon className="h-5 w-5" />
                  <span className="sr-only">Support</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Support</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <TrophyIcon className="h-5 w-5" />
                  <span className="sr-only">Achievements</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Achievements</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <UsersIcon className="h-5 w-5" />
                  <span className="sr-only">Community</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Community</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
        <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                  prefetch={false}
                >
                  <PowerIcon className="h-5 w-5" />
                  <span className="sr-only">Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Settings</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside> */}
      <main className="flex-1 on:ml-14  p-6 md:p-10">{children}</main>
    </div>
  );
};

export default Layout;
