"use client";
import React from "react";
import { FloatingNav } from "./ui/Nav";
export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "Services",
    },
    {
      name: "About Us",
      link: "/About",
    },
    {
      name: "Contact Us",
      link: "/Contact",
    },
  ];
  return (
    <div className="border-2 w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
