"use client";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const isAdminpage = pathname?.startsWith('/admin');
  const isPlayerPage = pathname?.startsWith("/jobs");
  return (
    <>
      <div className="flex gap-x-2 ml-auto">
        {isAdminpage || isPlayerPage ? (
          <Link href="/">
            <Button
              variant={"outline"}
              size="sm"
              className="border-purple-700/20"
            >
              <LogOut />
            </Button>
          </Link>
        ) : (
          <Link href="/admin/jobs">
            <Button
              variant={"outline"}
              size="sm"
              className="border-purple-700/20"
            >
              Admin Mode
            </Button>
          </Link>
        )}
        <UserButton afterSwitchSessionUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
