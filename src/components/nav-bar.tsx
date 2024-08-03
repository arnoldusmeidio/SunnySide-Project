"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function NavBar() {
  const [navBar, setNavbar] = useState<Boolean | undefined>();

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 0) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    changeBackground();

    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const navMenu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
  ];
  const pathName = usePathname();

  return (
    <header>
      {navBar !== undefined ? (
        <nav
          className={`${navBar ? "bg-indigo-400 transition-colors duration-75" : "bg-transparent"} fixed top-0 z-50 flex h-fit w-full items-center justify-between px-16 py-8`}
        >
          <Link href={"/"} className="flex h-fit min-w-52">
            <h1 className="h-full w-full">
              <Image
                src="/logo.svg"
                alt="sunnyside logo"
                width={124}
                height={24}
                className="h-full w-full object-cover"
              />
            </h1>
          </Link>

          <ul className="flex space-x-12 text-[2rem]">
            {navMenu.map((menu, index) => (
              <li key={index} className="font-bold">
                <Link
                  href={menu.href}
                  className={
                    pathName === menu.href ? "text-black" : "text-white"
                  }
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
