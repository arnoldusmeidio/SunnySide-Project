"use client";

import { createClient } from "contentful";
import { useEffect, useState } from "react";

import Image from "next/image";

export default function CarouselLogo() {
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!,

          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN!,
        });
        const response = await client.getEntries({
          content_type: process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_TYPE_LOGO!,
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
          className="carousel-item relative flex h-full w-full justify-center overflow-hidden bg-white/50"
          key={idx}
        >
          <div className="m-4 flex h-full w-[60%] flex-col rounded-xl border border-black bg-white p-4">
            <Image
              src={`https:${item.fields.logo.fields.file.url}`}
              alt=""
              width={800}
              height={245}
              className="h-full w-full place-self-center rounded-xl border object-cover"
            />
            <div className="mt-4 h-full w-full place-self-center">
              <h3 className="font-fraunces text-xl font-bold">
                Title: {item.fields.title}
              </h3>
              <span className="font-barlow text-lg font-semibold">
                Client: {item.fields.client}
              </span>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a
              href={`#Modal-${idx - 1 < 0 ? mapCollection.length - 1 : idx - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#Modal-${idx + 1 > mapCollection.length - 1 ? 0 : idx + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
