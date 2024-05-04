'use client'
import React from "react";
import Header from "./Header";
import { usePathname } from "next/navigation";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname()
  return (
    <>
      {
        !pathname.includes('/studio') && <Header />
      }
      {children}
    </>
  );
};

export default Layout;
