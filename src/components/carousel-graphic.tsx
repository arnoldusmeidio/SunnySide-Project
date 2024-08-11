"use client";

import { createClient } from "contentful";
import { Suspense, useEffect, useState } from "react";

import Image from "next/image";

export default function CarouselGraphic() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,

          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries({
          content_type:
            process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_GRAPHIC!,
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
      {mapCollection?.map((item, idx) => (
        <div
          id={`Modal-${idx}`}
          className="carousel-item relative flex w-full items-center justify-center overflow-hidden bg-white/50 py-4"
          key={idx}
        >
          <div className="flex h-full w-[50%] flex-col justify-around rounded-xl border border-black bg-white object-scale-down p-4 sm:w-[70%]">
            <div className="flex h-full items-center justify-center place-self-center rounded-xl border-2 border-black p-2">
              <Image
                src={`https:${item.fields.graphic.fields.file.url}`}
                alt=""
                width={4800}
                height={7400}
                className="w-[70%] place-self-center rounded-xl object-contain"
              />
            </div>
            <div className="mt-4 h-fit w-full place-self-center">
              <h3 className="font-fraunces font-bold max-sm:text-base sm:text-lg md:text-xl">
                Title: {item.fields.title}
              </h3>
              <span className="font-barlow font-semibold max-sm:text-sm sm:text-base md:text-lg">
                Client: {item.fields.client}
              </span>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between max-sm:left-5 max-sm:right-5 max-[450px]:left-8 max-[450px]:right-8 max-[400px]:left-16 max-[400px]:right-16">
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
