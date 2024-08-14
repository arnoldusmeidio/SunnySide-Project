"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "@/app/features/userSlice";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import Image from "next/image";
import { User } from "@/app/store";

export default function Team() {
  const dispatch = useDispatch<ThunkDispatch<any, void, any>>();
  const results = useSelector((state: User) => state.user.users);

  const position = [
    "Product Executive",
    "Design Manager",
    "Designer",
    "Copywriter",
    "Web Developer",
    "UI/UX",
  ];

  const team = [];
  for (let i = 0; i < results.length; i++) {
    team.push({ ...results[i], position: position[i] });
  }

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <main className="relative min-h-screen w-full">
      <div className="absolute -z-10 h-full w-full overflow-visible">
        <Image
          src="/yellow.jpg"
          alt="Yellow disk on a yellow background."
          width={3000}
          height={2250}
          className="relative h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex h-full flex-col items-center gap-8 pt-24">
        <h2 className="text-center font-fraunces text-[5rem] font-black tracking-[1rem] text-[#0948c7] max-sm:text-[4rem] max-sm:tracking-[0.5rem] max-[550px]:text-[3rem] max-[400px]:text-[2.5rem] max-[350px]:tracking-[0.25rem]">
          OUR TEAM
        </h2>
        <div className="rounded-3xl border-4 border-[#455831] bg-[#ECE4B7]/70 max-md:w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[80vw] 2xl:w-1/2">
          <p className="p-4 font-fraunces text-[2rem] font-medium leading-relaxed text-[#222222] max-md:leading-normal max-[550px]:text-[1.5rem]">
            We pride ourselves on a team of innovative creatives dedicated to
            transforming ideas into compelling visual experiences. Our talented
            designers bring a diverse range of skills and perspectives, from
            cutting-edge graphic design to immersive digital art.
          </p>
        </div>

        <div className="h-fit rounded-3xl bg-[#04bf6e]/80 p-4 max-[1920px]:mb-16 max-md:w-[95vw] md:w-[90vw] lg:w-[80vw]">
          <div className="px-4 max-lg:grid max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 max-[360px]:grid-cols-1 lg:flex 2xl:px-4">
            {team.map((data, index) => (
              <div key={index} className="flex flex-col items-center gap-8 p-4">
                <div className="w-[80%] overflow-hidden rounded-full">
                  <Image
                    src={data.picture.large}
                    alt="Profile picture"
                    width={1000}
                    height={1000}
                    className="width-auto height-auto"
                  />
                </div>

                <div className="flex flex-col items-center gap-2">
                  <span className="font-fraunces font-bold text-[#bf0455] max-lg:text-3xl max-[400px]:text-lg lg:text-2xl xl:text-3xl">
                    {data.name.last}
                  </span>
                  <span className="text- text-center font-semibold text-[#bf0455] max-lg:text-xl max-[400px]:text-base lg:text-xl xl:text-lg">
                    {data.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
