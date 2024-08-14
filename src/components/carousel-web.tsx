"use client";

import { createClient } from "contentful";
import { useEffect, useState } from "react";
import { TypeWebDesignSkeleton } from "@/contentful/types/TypeWebDesign";
import { Entry } from "contentful";

import Image from "next/image";

export default function CarouselWeb() {
  const [collection, setCollection] = useState([]) as any;

  useEffect(() => {
    async function getData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,

          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response: any = await client.getEntries<TypeWebDesignSkeleton>({
          content_type:
            process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_WEB || "",
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
          className="carousel-item relative flex h-full w-full items-center justify-center place-self-center overflow-hidden bg-white/50"
          key={idx}
        >
          <div className="m-4 flex w-[80%] flex-col rounded-xl border border-black bg-white p-4 max-sm:w-[70%] max-[500px]:w-[60%] max-[440px]:w-[50%] max-[370px]:w-[45%]">
            <Image
              src={`https:${item.fields.web.fields.file.url}`}
              alt=""
              width={4800}
              height={7400}
              className="w-full place-self-center rounded-xl border object-contain"
            />
            <div className="mt-4 h-fit w-full place-self-center">
              <h3 className="font-fraunces font-bold max-sm:text-base sm:text-lg md:text-xl">
                Title: {item.fields.title}
              </h3>
              <span className="font-barlow font-semibold max-sm:text-sm sm:text-base md:text-lg">
                Client: {item.fields.client}
              </span>
            </div>
          </div>
          <div className="absolute top-1/2 flex -translate-y-1/2 transform justify-between max-[500px]:left-8 max-[500px]:right-8 max-[440px]:left-16 max-[440px]:right-16 max-[370px]:left-24 max-[370px]:right-24 min-[500px]:left-2 min-[500px]:right-2 md:left-5 md:right-5">
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
