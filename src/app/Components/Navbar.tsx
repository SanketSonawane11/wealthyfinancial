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
      link: "/Services",
    },
    {
      name: "About Us",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <div className="border-2 w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
