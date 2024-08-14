"use client";

import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { TypeLogoSkeleton } from "@/contentful/types";

import Image from "next/image";

export default function CarouselLogo() {
  const [collection, setCollection] = useState([]) as any;

  useEffect(() => {
    async function getData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,

          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response: any = await client.getEntries<TypeLogoSkeleton>({
          content_type:
            process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_LOGO || "",
        });
        setCollection(response);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  const mapCollection = collection.items;

  return (
    <div className="carousel">
      {mapCollection?.map((item: any, idx: number) => (
        <div
          id={`Modal-${idx}`}
          className="carousel-item relative flex h-full w-full justify-center overflow-hidden bg-white/50"
          key={idx}
        >
          <div className="m-4 flex h-full flex-col rounded-xl border border-black bg-white p-4 max-md:w-[80%] max-[520px]:w-[70%] max-[450px]:w-[50%] max-[360px]:w-[45%] md:w-[70%]">
            <Image
              src={`https:${item.fields.logo.fields.file.url}`}
              alt=""
              width={800}
              height={245}
              className="h-full w-full place-self-center rounded-xl border object-cover"
            />
            <div className="mt-4 h-full w-full place-self-center">
              <h3 className="font-fraunces font-bold max-sm:text-base sm:text-lg md:text-xl">
                Title: {item.fields.title}
              </h3>
              <span className="font-barlow font-semibold max-sm:text-sm sm:text-base md:text-lg">
                Client: {item.fields.client}
              </span>
            </div>
          </div>
          <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-2 max-sm:right-2 max-[520px]:left-8 max-[520px]:right-8 max-[450px]:left-20 max-[450px]:right-20 max-[360px]:left-24 max-[360px]:right-24 sm:left-5 sm:right-5">
            <a
              href={`#Modal-${idx - 1 < 0 ? mapCollection.length - 1 : idx - 1}`}
              className="btn btn-circle max-md:btn-sm"
            >
              ❮
            </a>
            <a
              href={`#Modal-${idx + 1 > mapCollection.length - 1 ? 0 : idx + 1}`}
              className="btn btn-circle max-md:btn-sm"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
