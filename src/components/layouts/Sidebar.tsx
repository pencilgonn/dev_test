"use client";

import { cn } from "@/lib/utils";
import {
  ClipboardList,
  Component,
  IdCard,
  LogOut,
  Settings,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebars = [
    {
      icon: <Component size={30} strokeWidth={1} />,
      label: "Dashboard",
      to: "/",
    },
    {
      icon: <IdCard size={30} strokeWidth={1} />,
      label: "Card",
      to: "/card",
    },
    {
      icon: <Wallet size={30} strokeWidth={1} />,
      label: "Wallet",
      to: "/wallet",
    },
    {
      icon: <ClipboardList size={30} strokeWidth={1} />,
      label: "Transaction",
      to: "/transaction",
    },
    {
      icon: <Settings size={30} strokeWidth={1} />,
      label: "Settings",
      to: "/settings",
    },
    {
      icon: <LogOut size={30} strokeWidth={1} />,
      label: "Logout",
      to: "/logout",
    },
  ];

  return (
    <aside>
      <div className="flex flex-col space-y-2 p-3.5 py-4 rounded-full border border-white/50 bg-primary/10 backdrop-blur-lg">
        {sidebars.map((sidebar) => (
          <Tooltip key={sidebar.to}>
            <TooltipTrigger>
              <Link
                href={sidebar.to}
                className={cn(
                  "text-white/80 p-2.5 aspect-square flex items-center justify-center cursor-pointer rounded-full hover:bg-primary transition-colors",
                  pathname === sidebar.to && "bg-primary",
                )}
              >
                {sidebar.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{sidebar.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
