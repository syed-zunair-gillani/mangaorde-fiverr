"use client";
import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { GlobalProvider } from "@/context/global-context";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  return (
    <>
      <GlobalProvider>
        {!pathname.includes("/studio") && <Header />}
        {children}
      </GlobalProvider>
    </>
  );
};

export default Layout;
