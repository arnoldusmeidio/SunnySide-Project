"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const footerMenu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Team", href: "/team" },
  ];

  const socialMedia = [
    {
      src: "/icon-facebook.svg",
      link: "https://www.facebook.com/",
      alt: "facebook logo with link to its website.",
    },
    {
      src: "/icon-instagram.svg",
      link: "https://www.instagram.com/",
      alt: "instagram logo with link to its website.",
    },
    {
      src: "/icon-twitter.svg",
      link: "https://www.twitter.com/",
      alt: "twitter logo with link to its website.",
    },
    {
      src: "/icon-pinterest.svg",
      link: "https://www.pinterest.com/",
      alt: "pinterest logo with link to its website.",
    },
  ];
  const pathName = usePathname();

  return (
    <footer className="h-auto w-full">
      <div className="flex h-auto w-full flex-col items-center gap-20 bg-light-desaturated-cyan p-20">
        <div className="space-y-10">
          <Link href={"/"} className="flex justify-center">
            <h4>
              <Image
                src="/logo-footer.svg"
                alt="sunnyside logo"
                width={124}
                height={24}
                className="h-auto min-w-44"
              />
            </h4>
          </Link>

          <ul className="flex space-x-20 text-[1.5rem]">
            {footerMenu.map((menu, index) => (
              <li key={index} className="font-medium">
                <Link
                  href={menu.href}
                  className={
                    pathName === menu.href ? "text-black" : "text-moderate-cyan"
                  }
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex h-8 w-full justify-center gap-10">
          {socialMedia.map((social, index) => (
            <Link key={index} href={social.link}>
              <Image
                src={social.src}
                alt={social.alt}
                width={20}
                height={20}
                className="h-full w-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
