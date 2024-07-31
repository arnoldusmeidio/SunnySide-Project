"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [navBar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  });

  const navMenu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
  ];
  const pathName = usePathname();

  return (
    <nav
      className={`${navBar ? "bg-indigo-400 transition-all duration-150" : "bg-transparent"} fixed top-0 z-50 flex w-full items-center justify-between px-16 py-8`}
    >
      <Link href={"/"} className="h-full min-w-44">
        <h1>
          <Image
            src="/logo.svg"
            alt="sunnyside logo"
            width={100}
            height={100}
            className="h-full w-full"
          />
        </h1>
      </Link>

      <ul className="flex space-x-12">
        {navMenu.map((menu, index) => (
          <li key={index} className="font-bold">
            <Link
              href={menu.href}
              className={
                pathName === menu.href ? "text-soft-red" : "text-white"
              }
            >
              {menu.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
