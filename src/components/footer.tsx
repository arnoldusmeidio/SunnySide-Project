"use client";

import Image from "next/image";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Footer() {
  const footerImage = [
    {
      src: "/desktop/image-gallery-milkbottles.jpg",
      alt: "3 white milk bottle with red cap on a blue background with white cloud above it.",
    },
    {
      src: "/desktop/image-gallery-orange.jpg",
      alt: "Half cut orange on top of white plate and on top of blue plate on an orange background.",
    },
    {
      src: "/desktop/image-gallery-cone.jpg",
      alt: "Waffle cone without ice cream on blue background.",
    },
    {
      src: "/desktop/image-gallery-sugarcubes.jpg",
      alt: "Sugar cubes stack on top of each other on a soft red background.",
    },
  ];

  const footerMenu = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Teams", href: "/teams" },
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
      <div className="grid auto-cols-fr grid-cols-4">
        {footerImage.map((image, index) => (
          <div key={index}>
            <Image
              src={image.src}
              alt={image.src}
              width={720}
              height={894}
              className="width-auto height-auto"
            />
          </div>
        ))}
      </div>

      <div className="bg-light-desaturated-cyan flex h-auto w-full flex-col items-center gap-20 p-20">
        <div className="space-y-10">
          <Link href={"/"} className="flex justify-center">
            <h4>
              <Image
                src="/logo-footer.svg"
                alt="sunnyside logo"
                width={100}
                height={100}
                className="h-auto min-w-44"
              />
            </h4>
          </Link>

          <ul className="flex space-x-20">
            {footerMenu.map((menu, index) => (
              <li key={index} className="font-medium">
                <Link
                  href={menu.href}
                  className={
                    pathName === menu.href
                      ? "text-soft-red"
                      : "text-moderate-cyan"
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
                width={100}
                height={100}
                className="h-full w-full"
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
