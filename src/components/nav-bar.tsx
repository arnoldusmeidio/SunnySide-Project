"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function NavBar() {
  const [navBar, setNavbar] = useState<Boolean | undefined>();
  const [showNavBar, setShowNavBar] = useState(false);

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
          className={`${navBar || showNavBar ? "bg-indigo-400 transition-colors duration-75" : "bg-transparent"} fixed top-0 z-50 grid h-fit w-screen grid-cols-2 items-center justify-between px-6 py-8 min-[320px]:px-10 lg:px-16`}
        >
          <Link
            href={"/"}
            className="flex h-fit max-w-52 max-[400px]:max-w-40 lg:min-w-52"
          >
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

          <Image
            onClick={() => setShowNavBar(!showNavBar)}
            src="/icon-hamburger.svg"
            alt="Hamburer logo"
            width={24}
            height={18}
            className="cursor-pointer justify-self-end lg:hidden"
          />

          <div
            className={`absolute top-[100%] max-lg:w-screen lg:static lg:block lg:h-fit ${showNavBar ? "visible" : "hidden"}`}
          >
            <ul className="right-0 flex items-center justify-center gap-10 rounded-bl-3xl rounded-br-3xl text-[2rem] max-lg:h-[50vh] max-lg:flex-col max-lg:gap-20 max-lg:bg-orange-400 max-[400px]:h-[30vh] max-[400px]:gap-10 max-[400px]:text-[1rem] lg:flex-row lg:justify-end lg:space-x-12">
              {navMenu.map((menu, index) => (
                <li key={index} className="font-bold">
                  <Link
                    onClick={() => setShowNavBar(false)}
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
          </div>
        </nav>
      ) : null}
    </header>
  );
}
